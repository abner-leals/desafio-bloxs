from django.db import models
from rest_framework import serializers
from django.apps import apps
from django.contrib.auth.models import AbstractUser, UserManager
from django.contrib.auth.hashers import make_password


class CustomUserManager(UserManager):
    use_in_migrations = True

    def _create_user(self, username, email, password, **extra_fields):
        if not username:
            raise ValueError("The given username must be set")
        email = self.normalize_email(email)

        GlobalUserModel = apps.get_model(
            self.model._meta.app_label, self.model._meta.object_name
        )
        username = GlobalUserModel.normalize_username(username)
        user = self.model(username=username, email=email, **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        u = Pessoa.objects.get(username__exact=username)
        u.set_password(password)
        u.save()
        return user

    def create_user(self, username=None, email=None, password=None, **extra_fields):
        cpf = extra_fields["cpf"]
        extra_fields["cpf"] = cpf[:3] + "." + cpf[3:6] + "." + cpf[6:9] + "-" + cpf[9:]
        username = extra_fields.get("cpf")
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(username, email, password, **extra_fields)

    def create_superuser(
        self, username=None, email=None, password=None, **extra_fields
    ):
        cpf = extra_fields["cpf"]
        extra_fields["cpf"] = cpf[:3] + "." + cpf[3:6] + "." + cpf[6:9] + "-" + cpf[9:]
        username = extra_fields.get("cpf")
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        return self._create_user(username, email, password, **extra_fields)


class Pessoa(AbstractUser):
    idPessoa = models.BigAutoField(primary_key=True)
    cpf = models.CharField(
        max_length=14,
        unique=True,
    )
    nome = models.CharField(max_length=150)
    dataNascimento = models.DateField(default="timezone.now")
    USERNAME_FIELD = "cpf"
    REQUIRED_FIELDS = ["nome", "dataNascimento"]

    objects = CustomUserManager()
