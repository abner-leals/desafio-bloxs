from django.urls import path

from transacoes.views import ListExtratoView


urlpatterns = [
    path("extrato/", ListExtratoView.as_view()),
]
