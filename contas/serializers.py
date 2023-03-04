from rest_framework import serializers
from datetime import date
from datetime import timedelta
from transacoes.serializers import TransacaoSerializer
from .models import Conta
from transacoes.models import Transacao
import ipdb


class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ["limiteSaqueDiario", "idPessoa", "tipoConta", "idConta", "apelido"]
        read_only_fields = [
            "flagAtivo",
            "idConta",
            "saldo",
            "dataCriacao",
            "ultimaAtualizacao",
        ]


class ContaSaqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ["saldo"]
        extra_fields = [
            "valor",
        ]

    @classmethod
    def verifica_limite(cls, instance):
        transacoes = Transacao.objects.filter(
            idConta=instance.idConta,
            tipo="Saque",
            dataTransacao__gte=date.today(),
        )
        list_transacoes = list(transacoes)
        soma = 0
        for numero in list_transacoes:
            soma += numero.valor

        return soma * (-1)

    def __init__(self, instance=None, data=..., **kwargs):
        if instance.flagAtivo:
            sacado = self.verifica_limite(instance)
            if sacado + data["valor"] > instance.limiteSaqueDiario:
                raise serializers.ValidationError(
                    "Limite de saque excedido, contacte o seu gerente."
                )
            if instance.saldo - data["valor"] < 0:
                raise serializers.ValidationError("Saldo insuficiente")

            data["saldo"] = instance.saldo - data["valor"]
            comprovante = {
                "idConta": instance,
                "valor": -data["valor"],
                "tipo": "Saque",
            }
            Transacao.objects.create(**comprovante)
            return super().__init__(instance, data, **kwargs)

        raise serializers.ValidationError("Conta bloqueada")


class ContaBloqueioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ["flagAtivo"]
        extra_fields = [
            "valor",
        ]

    def __init__(self, instance=None, data=..., **kwargs):
        data["flagAtivo"] = data["ativo"]
        super().__init__(instance, data, **kwargs)


class ContaDepositoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ["saldo"]
        extra_fields = ["valor", "comprovante"]

    def __init__(self, instance=None, data=..., **kwargs):
        if instance.flagAtivo:
            data["saldo"] = instance.saldo + data["valor"]
            comprovante = {
                "idConta": instance,
                "valor": data["valor"],
                "tipo": "Depósito",
            }
            comprovante = Transacao.objects.create(**comprovante)
            return super().__init__(instance, data, **kwargs)
        raise serializers.ValidationError("Conta bloqueada")


class ContaSaldoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ["saldo"]


class ExtratoSaldoSerializer(serializers.ModelSerializer):
    transacoes = TransacaoSerializer(many=True)

    class Meta:
        model = Conta
        fields = ["transacoes"]
