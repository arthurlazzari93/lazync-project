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
