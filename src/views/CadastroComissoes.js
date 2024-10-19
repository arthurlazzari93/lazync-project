import { useState } from "react";
import api from "api";
import { Button, FormGroup, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

const CadastroComissoes = () => {
  const [parcelaNumero, setParcelaNumero] = useState("");
  const [porcentagemComissao, setPorcentagemComissao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/comissoes-planos/", {
        parcela_numero: parcelaNumero,
        porcentagem_comissao: porcentagemComissao,
      });
      alert("Comissão cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar comissão:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Número da Parcela</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            value={parcelaNumero}
            onChange={(e) => setParcelaNumero(e.target.value)}
            placeholder="Número da parcela"
            required
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Porcentagem da Comissão</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            value={porcentagemComissao}
            onChange={(e) => setPorcentagemComissao(e.target.value)}
            placeholder="Porcentagem da comissão"
            required
          />
        </InputGroup>
      </FormGroup>
      <Button type="submit" color="primary">Cadastrar Comissão</Button>
    </Form>
  );
};

export default CadastroComissoes;
