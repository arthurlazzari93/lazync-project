from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from app.views import PlanoViewSet, ComissaoPlanoViewSet, ClienteViewSet, ConsultorViewSet, VendaViewSet, ControleRecebimentoViewSet, ExtratoPlataformaViewSet

router = DefaultRouter()
router.register(r'planos', PlanoViewSet)
router.register(r'comissoes-planos', ComissaoPlanoViewSet)
router.register(r'clientes', ClienteViewSet)
router.register(r'consultores', ConsultorViewSet)
router.register(r'vendas', VendaViewSet)
router.register(r'controle-recebimentos', ControleRecebimentoViewSet)
router.register(r'extratos-plataforma', ExtratoPlataformaViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # Incluindo as rotas da API
]
