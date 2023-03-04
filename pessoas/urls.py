from django.urls import path
from .views import CreatePessoaView, ListEspecificPessoaView, FalsoLogin
from rest_framework.authtoken.views import ObtainAuthToken

urlpatterns = [
    path("pessoas/", CreatePessoaView.as_view()),
    path("pessoas/<int:pk>/", ListEspecificPessoaView.as_view()),
    path("pessoas/login/", FalsoLogin.as_view()),
]
