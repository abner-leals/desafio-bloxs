from rest_framework import serializers

from contas.serializers import ContaSerializer
from .models import Pessoa
import re
from django.core.exceptions import ValidationError


class PessoaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pessoa
        fields = ["nome", "cpf", "dataNascimento"]
        extra_kwargs = {"password": {"write_only": True}}
        read_only_fields = [
            "idPessoa",
            "ultimaAtualizacao",
        ]

    def __init__(self, instance=None, data=..., **kwargs):
        data["cpf"] = re.sub("\D", "", data["cpf"])
        if data["cpf"]:
            if len(data["cpf"]) != 11:
                raise serializers.ValidationError("CPF inválido")

            data["username"] = data["cpf"]

        super().__init__(instance, data, **kwargs)

    def create(self, validated_data):
        pessoa = Pessoa.objects.create_user(**validated_data)
        return pessoa


class PessoaDetalhadaSerializer(serializers.ModelSerializer):
    contas = ContaSerializer(many=True)

    class Meta:
        model = Pessoa
        fields = ["nome", "cpf", "dataNascimento", "contas"]
        extra_kwargs = {"password": {"write_only": True}}
        read_only_fields = [
            "idPessoa",
            "ultimaAtualizacao",
        ]


class FalsoLoginSerializer(serializers.ModelSerializer):
    contas = ContaSerializer(many=True)

    class Meta:
        model = Pessoa
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}
        read_only_fields = [
            "idPessoa",
            "ultimaAtualizacao",
        ]

    def create(self, validated_data):
        pessoa = Pessoa.objects.get(username=validated_data["username"])
        if pessoa:
            return pessoa

        return {"error": "Usuario não encontrado"}
