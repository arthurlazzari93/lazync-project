from rest_framework import viewsets, generics
from .models import Plano, ComissaoPlano, Cliente, Consultor, Venda, ControleRecebimento, ExtratoPlataforma
from .serializers import PlanoSerializer, ComissaoPlanoSerializer, ClienteSerializer, ConsultorSerializer, VendaSerializer, ControleRecebimentoSerializer, ExtratoPlataformaSerializer, UserSerializer 
from django.contrib.auth.models import User

class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PlanoViewSet(viewsets.ModelViewSet):
    queryset = Plano.objects.all()
    serializer_class = PlanoSerializer

class ComissaoPlanoViewSet(viewsets.ModelViewSet):
    queryset = ComissaoPlano.objects.all()
    serializer_class = ComissaoPlanoSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class ConsultorViewSet(viewsets.ModelViewSet):
    queryset = Consultor.objects.all()
    serializer_class = ConsultorSerializer

class VendaViewSet(viewsets.ModelViewSet):
    queryset = Venda.objects.all()
    serializer_class = VendaSerializer

class ControleRecebimentoViewSet(viewsets.ModelViewSet):
    queryset = ControleRecebimento.objects.all()
    serializer_class = ControleRecebimentoSerializer

class ExtratoPlataformaViewSet(viewsets.ModelViewSet):
    queryset = ExtratoPlataforma.objects.all()
    serializer_class = ExtratoPlataformaSerializer
