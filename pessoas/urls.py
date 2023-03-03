from django.urls import path
from .views import CreatePessoaView
from rest_framework.authtoken.views import ObtainAuthToken

urlpatterns = [
    path("pessoas/", CreatePessoaView.as_view()),
    path("login/", ObtainAuthToken.as_view()),
]
