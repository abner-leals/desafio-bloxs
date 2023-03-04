from utils.mixins import SerializerByMethodMixin
from .serializers import (
    ContaSerializer,
    ContaSaqueSerializer,
    ContaDepositoSerializer,
    ContaSaldoSerializer,
    ContaBloqueioSerializer,
    ExtratoSaldoSerializer,
)
from rest_framework import generics
from .models import Conta


# Create your views here.
class CreateListContaView(SerializerByMethodMixin, generics.ListCreateAPIView):
    queryset = Conta.objects.all()
    serializer_map = {
        "GET": ContaSerializer,
        "POST": ContaSerializer,
    }


class ListContaView(SerializerByMethodMixin, generics.RetrieveAPIView):
    queryset = Conta.objects.all()
    serializer_map = {
        "GET": ContaSerializer,
        "POST": ContaSerializer,
    }


class SaqueContaView(generics.UpdateAPIView):
    queryset = Conta.objects.all()
    serializer_class = ContaSaqueSerializer


class DepositoContaView(generics.UpdateAPIView):
    queryset = Conta.objects.all()
    serializer_class = ContaDepositoSerializer


class BloqueioContaView(generics.UpdateAPIView):
    queryset = Conta.objects.all()
    serializer_class = ContaBloqueioSerializer


class SaldoContaView(generics.RetrieveAPIView):
    queryset = Conta.objects.all()
    serializer_class = ContaSaldoSerializer


class ExtratoContaView(generics.RetrieveAPIView):
    queryset = Conta.objects.all()
    serializer_class = ExtratoSaldoSerializer
