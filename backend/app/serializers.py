from rest_framework import serializers
from .models import Plano, ComissaoPlano, Cliente, Consultor, Venda, ControleRecebimento, ExtratoPlataforma

class PlanoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plano
        fields = '__all__'

class ComissaoPlanoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComissaoPlano
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class ConsultorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultor
        fields = '__all__'

class VendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venda
        fields = '__all__'

class ControleRecebimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ControleRecebimento
        fields = '__all__'

class ExtratoPlataformaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtratoPlataforma
        fields = '__all__'
