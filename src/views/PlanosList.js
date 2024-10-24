import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import { Table, Container, Row, Card, CardHeader, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from 'components/Headers/Header';

const PlanosList = () => {
  const [planos, setPlanos] = useState([]);
  const [selectedPlano, setSelectedPlano] = useState(null);
  const [comissoes, setComissoes] = useState({});
  
  const [newPlano, setNewPlano] = useState({
    nome_plano: '',
    tipo_plano: '',
    taxa_administrativa: '',
    parcelas_total: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8000/api/planos/')
      .then((response) => {
        setPlanos(response.data);
  
        // Carregar comissões para todos os planos
        response.data.forEach(plano => {
          axios.get(`http://localhost:8000/api/comissoes-planos/?plano=${plano.id}`)
            .then((comissoesResponse) => {
              const comissoesMap = {};
              comissoesResponse.data.forEach((comissao) => {
                comissoesMap[`${plano.id}-${comissao.parcela_numero}`] = comissao.porcentagem_comissao;
              });
              setComissoes(prevComissoes => ({ ...prevComissoes, ...comissoesMap }));
            });
        });
      })
      .catch((error) => {
        console.error('Erro ao buscar planos', error);
      });
  }, []);
  
  const handleSaveComissao = (planoId, parcela_numero, porcentagem_comissao) => {
    const data = {
      plano: planoId,
      parcela_numero,
      porcentagem_comissao
    };

    axios.post('http://localhost:8000/api/comissoes-planos/', data)
      .then((response) => {
        console.log('Comissão salva com sucesso:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao salvar comissão:', error);
      });
  };

  const handleInputChangeComissao = (planoId, parcela_numero, value) => {
    setComissoes({
      ...comissoes,
      [`${planoId}-${parcela_numero}`]: value
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (selectedPlano) {
      setSelectedPlano({ ...selectedPlano, [name]: value });
    } else {
      setNewPlano({ ...newPlano, [name]: value });
    }
  };

  const handleNewPlano = () => {
    setSelectedPlano(null);
    setNewPlano({
      nome_plano: '',
      tipo_plano: '',
      taxa_administrativa: '',
      parcelas_total: ''
    });
  };

  const handleDeletePlano = (id) => {
    axios.delete(`http://localhost:8000/api/planos/${id}/`)
      .then(() => {
        setPlanos(planos.filter(plano => plano.id !== id));
        setSelectedPlano(null);  // Limpa o formulário
      })
      .catch((error) => {
        console.error('Erro ao deletar plano', error);
      });
  };

  const handleSavePlano = (e) => {
    e.preventDefault();

    if (selectedPlano) {
      axios.put(`http://localhost:8000/api/planos/${selectedPlano.id}/`, selectedPlano)
        .then(() => {
          setPlanos(planos.map(plano => plano.id === selectedPlano.id ? selectedPlano : plano));
          setSelectedPlano(null);  // Limpa o formulário
        })
        .catch((error) => {
          console.error('Erro ao modificar plano', error);
        });
    } else {
      axios.post('http://localhost:8000/api/planos/', newPlano)
        .then((response) => {
          setPlanos([...planos, response.data]);
          setNewPlano({
            nome_plano: '',
            tipo_plano: '',
            taxa_administrativa: '',
            parcelas_total: ''
          });
        })
        .catch((error) => {
          console.error('Erro ao cadastrar plano', error);
        });
    }
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          {/* Coluna da lista de planos */}
          <Col xl="8">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Lista de Planos</h3>
              </CardHeader>
              <Table className="align-items-center table-dark table-flush" responsive>
  <thead className="thead-dark">
    <tr>
      <th>Ações</th>
      <th>ID</th>
      <th>Nome do Plano</th>
      <th>Tipo do Plano</th>
      <th>Taxa Administrativa</th>
      <th>Total de Parcelas</th>
      {/* Cria uma coluna para as parcelas baseado no primeiro plano */}
      {Array.from({ length: Math.max(...planos.map(plano => plano.parcelas_total)) }, (_, i) => (
        <th key={i}>Parcela {i + 1}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {planos.map((plano) => (
      <tr key={plano.id}>
        <td>
          <Button color="info" onClick={() => setSelectedPlano(plano)}>Modificar</Button>
          <Button
            color="success"
            onClick={() => {
              Array.from({ length: plano.parcelas_total }).forEach((_, i) => {
                handleSaveComissao(plano.id, i + 1, comissoes[`${plano.id}-${i + 1}`] || '0');
              });
            }}
          >
            Salvar Comissões
          </Button>
        </td>
        <td>{plano.id}</td>
        <td>{plano.nome_plano}</td>
        <td>{plano.tipo_plano}</td>
        <td>{plano.taxa_administrativa}</td>
        <td>{plano.parcelas_total}</td>
        {/* Renderiza os inputs de acordo com as parcelas do plano */}
        {Array.from({ length: plano.parcelas_total }, (_, i) => (
  <td key={i}>
    <Input
      type="number"
      value={comissoes[`${plano.id}-${i + 1}`] || ''}  // Exibe a porcentagem cadastrada
      onChange={(e) => {
        const value = e.target.value;
        handleInputChangeComissao(plano.id, i + 1, value);  // Atualiza o estado
        handleSaveComissao(plano.id, i + 1, value);  // Salva diretamente no banco
      }}
      placeholder="%"
    />
  </td>
))}

      </tr>
    ))}
  </tbody>
</Table>

            </Card>
          </Col>

          {/* Coluna do formulário de cadastro/edição de plano */}
          <Col xl="4" className="mb-4">
            <Card className="bg-secondary shadow">
              <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                <h3 className="mb-0">{selectedPlano ? 'Editar Plano' : 'Cadastrar Novo Plano'}</h3>
                {selectedPlano && (
                  <Button color="info" onClick={handleNewPlano}>Novo Plano</Button>
                )}
              </CardHeader>
              <Form onSubmit={handleSavePlano}>
                <FormGroup>
                  <Label for="nome_plano">Nome do Plano</Label>
                  <Input
                    type="text"
                    name="nome_plano"
                    id="nome_plano"
                    value={selectedPlano ? selectedPlano.nome_plano : newPlano.nome_plano}
                    onChange={handleInputChange}
                    placeholder="Digite o nome do plano"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="tipo_plano">Tipo do Plano</Label>
                  <Input
                    type="text"
                    name="tipo_plano"
                    id="tipo_plano"
                    value={selectedPlano ? selectedPlano.tipo_plano : newPlano.tipo_plano}
                    onChange={handleInputChange}
                    placeholder="Digite o tipo do plano (PME, PF, Adesão)"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="taxa_administrativa">Taxa Administrativa</Label>
                  <Input
                    type="number"
                    step="0.01"
                    name="taxa_administrativa"
                    id="taxa_administrativa"
                    value={selectedPlano ? selectedPlano.taxa_administrativa : newPlano.taxa_administrativa}
                    onChange={handleInputChange}
                    placeholder="Digite a taxa administrativa"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="parcelas_total">Total de Parcelas</Label>
                  <Input
                    type="number"
                    name="parcelas_total"
                    id="parcelas_total"
                    value={selectedPlano ? selectedPlano.parcelas_total : newPlano.parcelas_total}
                    onChange={handleInputChange}
                    placeholder="Digite o número total de parcelas"
                    required
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  {selectedPlano ? 'Modificar' : 'Cadastrar'}
                </Button>
                {selectedPlano && (
                  <Button color="danger" className="ml-2" onClick={() => handleDeletePlano(selectedPlano.id)}>Deletar</Button>
                )}
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlanosList;
