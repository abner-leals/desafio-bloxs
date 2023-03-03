from django.db import models


# Create your models here.
class Conta(models.Model):
    idConta = models.BigAutoField(primary_key=True)
    saldo = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    limiteSaqueDiario = models.DecimalField(max_digits=14, decimal_places=2)
    flagAtivo = models.BooleanField(default=True)
    tipoConta = models.IntegerField()
    apelido = models.CharField(max_length=50, null=True, blank=True)
    dataCriacao = models.DateTimeField(auto_now_add=True)
    ultimaAtualizacao = models.DateField(auto_now=True)

    idPessoa = models.ForeignKey(
        "pessoas.Pessoa", on_delete=models.CASCADE, related_name="contas", null=True
    )
