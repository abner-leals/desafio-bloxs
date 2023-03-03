from django.db import migrations
from django.contrib.auth.hashers import make_password


def populate_my_table(apps, schema_editor):
    Model = apps.get_model("pessoas", "Pessoa")
    pessoa = {
        "cpf": "050.234.667-59",
        "dataNascimento": "2000-01-01",
        "nome": "Alan Santos",
        "password": make_password("123456"),
    }

    Model.objects.create(**pessoa)


class Migration(migrations.Migration):
    dependencies = [
        ("pessoas", "0002_alter_pessoa_managers"),
    ]

    operations = [
        migrations.RunPython(populate_my_table),
    ]


# https://stackoverflow.com/questions/50320989/how-would-you-create-a-manual-django-migration
# https://stackoverflow.com/questions/60161127/django-how-to-populate-table-with-data-migration
