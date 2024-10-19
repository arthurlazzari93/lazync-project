import { useState } from "react";
import api from "api";
import { Button, FormGroup, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

const CadastroClientes = () => {
  const [nomeCliente, setNomeCliente] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/clientes/", {
        nome_cliente: nomeCliente,
      });
      alert("Cliente cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Nome do Cliente</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
            placeholder="Nome do cliente"
            required
          />
        </InputGroup>
      </FormGroup>
      <Button type="submit" color="primary">Cadastrar Cliente</Button>
    </Form>
  );
};

export default CadastroClientes;
