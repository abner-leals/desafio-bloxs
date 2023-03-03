from rest_framework import serializers
from .models import Transacao
import ipdb


class TransacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transacao
        fields = "__all__"
