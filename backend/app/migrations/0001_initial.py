# Generated by Django 5.1.2 on 2024-10-17 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plano',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('operadora', models.CharField(max_length=100)),
                ('tipo', models.CharField(max_length=50)),
                ('taxa_administrativa', models.DecimalField(decimal_places=2, max_digits=10)),
                ('parcelas_total', models.IntegerField()),
            ],
        ),
    ]