from rest_framework import serializers
from .models import Plano, ComissaoPlano, Cliente, Consultor, Venda, ControleRecebimento, ExtratoPlataforma
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class PlanoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plano
        fields = ['id', 'nome_plano']

class ComissaoPlanoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComissaoPlano
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'nome_cliente']

class ConsultorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultor
        fields = ['id', 'nome_consultor']

class VendaSerializer(serializers.ModelSerializer):
    data_venda = serializers.DateField(input_formats=['%Y-%m-%d', '%d/%m/%Y'])
    data_vigencia = serializers.DateField(input_formats=['%Y-%m-%d', '%d/%m/%Y'])
    data_vencimento = serializers.DateField(input_formats=['%Y-%m-%d', '%d/%m/%Y'])

    class Meta:
        model = Venda
        fields = [
            'cliente', 'plano', 'consultor', 'numero_proposta', 
            'valor_plano', 'data_venda', 'data_vigencia', 
            'data_vencimento', 'desconto', 'taxa', 'valor_real'
        ]

class ControleRecebimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ControleRecebimento
        fields = '__all__'

class ExtratoPlataformaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtratoPlataforma
        fields = '__all__'
