import { useState } from "react";
import api from "api";  // Certifique-se de que sua API está configurada
import { Button, FormGroup, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

const CadastroPlanos = () => {
  const [nomePlano, setNomePlano] = useState("");
  const [tipoPlano, setTipoPlano] = useState("");
  const [taxaAdministrativa, setTaxaAdministrativa] = useState("");
  const [parcelasTotal, setParcelasTotal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/planos/", {
        nome_plano: nomePlano,
        tipo_plano: tipoPlano,
        taxa_administrativa: taxaAdministrativa,
        parcelas_total: parcelasTotal,
      });
      alert("Plano cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar plano:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Nome do Plano</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            value={nomePlano}
            onChange={(e) => setNomePlano(e.target.value)}
            placeholder="Nome do Plano"
            required
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Tipo de Plano</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            value={tipoPlano}
            onChange={(e) => setTipoPlano(e.target.value)}
            placeholder="Ex: PME, PF"
            required
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Taxa Administrativa</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            value={taxaAdministrativa}
            onChange={(e) => setTaxaAdministrativa(e.target.value)}
            placeholder="Taxa em R$"
            required
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Total de Parcelas</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            value={parcelasTotal}
            onChange={(e) => setParcelasTotal(e.target.value)}
            placeholder="Número de parcelas"
            required
          />
        </InputGroup>
      </FormGroup>
      <Button type="submit" color="primary">Cadastrar Plano</Button>
    </Form>
  );
};

export default CadastroPlanos;
