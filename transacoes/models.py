from django.db import models


class Transacao(models.Model):
    idTransacao = models.BigAutoField(primary_key=True)
    idConta = models.ForeignKey(
        "contas.Conta",
        on_delete=models.CASCADE,
        related_name="transacoes",
    )
    valor = models.DecimalField(max_digits=14, decimal_places=2)
    dataTransacao = models.DateTimeField(auto_now_add=True)
    tipo = models.CharField(max_length=20)
