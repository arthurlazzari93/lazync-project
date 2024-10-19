from django.contrib import admin
from .models import Plano, ComissaoPlano, Cliente, Consultor, Venda, ControleRecebimento, ExtratoPlataforma

admin.site.register(Plano)
admin.site.register(ComissaoPlano)
admin.site.register(Cliente)
admin.site.register(Consultor)
admin.site.register(Venda)
admin.site.register(ControleRecebimento)
admin.site.register(ExtratoPlataforma)