from transacoes.serializers import TransacaoSerializer
from utils.mixins import SerializerByMethodMixin

from rest_framework import generics
from .models import Transacao


# Create your views here.
class ListExtratoView(SerializerByMethodMixin, generics.ListAPIView):
    queryset = Transacao.objects.all()
    serializer_map = {
        "GET": TransacaoSerializer,
    }
