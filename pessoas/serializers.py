from rest_framework import serializers
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
