from utils.mixins import SerializerByMethodMixin
from .serializers import (
    FalsoLoginSerializer,
    PessoaDetalhadaSerializer,
    PessoaSerializer,
)
from django.shortcuts import get_object_or_404
from rest_framework import generics, views
from .models import Pessoa


# Create your views here.
class CreatePessoaView(SerializerByMethodMixin, generics.CreateAPIView):
    queryset = Pessoa.objects.all()
    serializer_map = {
        "GET": PessoaSerializer,
        "POST": PessoaSerializer,
    }


# Create your views here.
class ListEspecificPessoaView(generics.RetrieveAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaDetalhadaSerializer


class FalsoLogin(views.APIView):
    def post(self, request: views.Request) -> views.Response:
        pessoa = get_object_or_404(Pessoa, **request.data)
        if pessoa:
            serializer = FalsoLoginSerializer(pessoa)
            return views.Response(serializer.data, views.status.HTTP_200_OK)
        return views.Response(
            {"detail": "usuario não encontrado"}, views.status.HTTP_400_BAD_REQUEST
        )
