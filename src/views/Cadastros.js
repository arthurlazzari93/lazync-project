import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const Cadastros = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Cadastros</h2>
          <Button color="primary" href="/admin/cadastro-planos">
            Cadastro de Planos
          </Button>
        </Col>
        <Col>
          <Button color="primary" href="/admin/cadastro-comissoes">
            Cadastro de Comissões
          </Button>
        </Col>
        <Col>
          <Button color="primary" href="/admin/cadastro-clientes">
            Cadastro de Clientes
          </Button>
        </Col>
        <Col>
          <Button color="primary" href="/admin/cadastro-consultores">
            Cadastro de Consultores
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cadastros;
