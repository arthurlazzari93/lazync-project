from django.db import models


# Tabela tb_Planos
class Plano(models.Model):
    nome_plano = models.CharField(max_length=100)
    tipo_plano = models.CharField(max_length=50)  # Ex: PME, PF, Adesão
    taxa_administrativa = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    parcelas_total = models.IntegerField()

    def __str__(self):
        return f"{self.nome_plano} ({self.tipo_plano})"

# Tabela tb_Comissoes_Planos
class ComissaoPlano(models.Model):
    plano = models.ForeignKey(Plano, on_delete=models.CASCADE)
    parcela_numero = models.IntegerField()
    porcentagem_comissao = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        unique_together = ('plano', 'parcela_numero')  # Adiciona restrição de unicidade

    def __str__(self):
        return f"Plano: {self.plano.nome_plano}, Parcela: {self.parcela_numero}"

    def __str__(self):
        return f"Plano: {self.plano.nome_plano}, Parcela: {self.parcela_numero}"

# Tabela tb_Clientes
class Cliente(models.Model):
    nome_cliente = models.CharField(max_length=255)

    def __str__(self):
        return self.nome_cliente

# Tabela tb_Consultores
class Consultor(models.Model):
    nome_consultor = models.CharField(max_length=255)

    def __str__(self):
        return self.nome_consultor

# Tabela tb_Vendas
class Venda(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    plano = models.ForeignKey(Plano, on_delete=models.CASCADE)
    consultor = models.ForeignKey(Consultor, on_delete=models.CASCADE)
    numero_proposta = models.CharField(max_length=100, unique=True)
    valor_plano = models.DecimalField(max_digits=10, decimal_places=2)
    data_venda = models.DateField()
    data_vigencia = models.DateField()
    data_vencimento = models.DateField()
    desconto = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    taxa = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    valor_real = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Proposta: {self.numero_proposta}, Cliente: {self.cliente.nome_cliente}"

# Tabela tb_Controle_Recebimento
class ControleRecebimento(models.Model):
    venda = models.ForeignKey(Venda, on_delete=models.CASCADE)
    parcela_numero = models.IntegerField()
    data_parcela = models.DateField()
    valor_comissao = models.DecimalField(max_digits=10, decimal_places=2)
    confirmacao_pagamento = models.CharField(max_length=20, choices=[
        ('Pago', 'Pago'),
        ('Aguardando', 'Aguardando'),
        ('Inadimplente', 'Inadimplente')
    ], default='Aguardando')
    codigo_extrato = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f"Proposta: {self.venda.numero_proposta}, Parcela: {self.parcela_numero}, Status: {self.confirmacao_pagamento}"

# Tabela tb_Extratos_Plataforma
class ExtratoPlataforma(models.Model):
    numero_proposta = models.CharField(max_length=100)
    nome_cliente = models.CharField(max_length=255)
    plano = models.CharField(max_length=100)
    parcela_numero = models.IntegerField()
    porcentagem = models.DecimalField(max_digits=5, decimal_places=2)
    valor_total = models.DecimalField(max_digits=10, decimal_places=2)
    valor_parcela = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Extrato: {self.numero_proposta}, Cliente: {self.nome_cliente}"
