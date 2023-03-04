from django.urls import path
from .views import (
    CreateListContaView,
    ListContaView,
    SaqueContaView,
    DepositoContaView,
    BloqueioContaView,
    SaldoContaView,
    ExtratoContaView,
)

urlpatterns = [
    path("contas/", CreateListContaView.as_view()),
    path("contas/<int:pk>/", ListContaView.as_view()),
    path("contas/<int:pk>/saque/", SaqueContaView.as_view()),
    path("contas/<int:pk>/deposito/", DepositoContaView.as_view()),
    path("contas/<int:pk>/saldo/", SaldoContaView.as_view()),
    path("contas/<int:pk>/bloqueio/", BloqueioContaView.as_view()),
    path("contas/<int:pk>/extrato/", ExtratoContaView.as_view()),
]
