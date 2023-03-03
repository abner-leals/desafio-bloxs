from utils.mixins import SerializerByMethodMixin
from .serializers import PessoaSerializer
from rest_framework import generics
from .models import Pessoa


# Create your views here.
class CreatePessoaView(SerializerByMethodMixin, generics.CreateAPIView):
    queryset = Pessoa.objects.all()
    serializer_map = {
        "GET": PessoaSerializer,
        "POST": PessoaSerializer,
    }


# Create your views here.
