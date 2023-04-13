import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Corretor = () => {
  const [CPF, setCPF] = useState("");
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [data_nasc, setDataNasc] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rg, setRG] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [imobiliaria, setImobiliaria] = useState("");
  const [categoria_nivel, setCategoriaNivel] = useState("");
  const [codigointerno, setCodigoInterno] = useState("");
  const [creci, setCreci] = useState("");
  const [tipo_conta, setTipoConta] = useState("");
  const [banco, setBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [digito, setDigito] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const corretor = {
      CPF,
      nome,
      apelido,
      data_nasc,
      telefone,
      rg,
      endereco: {
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        cep,
      },
      email,
      imobiliaria,
      categoria_nivel,
      codigointerno,
      creci,
      conta_bancaria: {
        tipo_conta,
        banco,
        agencia,
        conta,
        digito,
      },
    };
    try {
      const url = `${window.location.protocol}//${window.location.hostname}:443/corretores/`
      await axios.post(url , corretor);
      setCPF("");
      setNome("");
      setApelido("");
      setDataNasc("");
      setTelefone("");
      setRG("");
      setLogradouro("");
      setNumero("");
      setComplemento("");
      setBairro("");
      setCidade("");
      setEstado("");
      setCep("");
      setEmail("");
      setImobiliaria("");
      setCategoriaNivel("");
      setCodigoInterno("");
      setCreci("");
      setTipoConta("");
      setBanco("");
      setAgencia("");
      setConta("");
      setDigito("");
      alert("Corretor cadastrado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao cadastrar corretor");
    }
  };

  return (
    <Container className="pt-4 pb-4">
      <h2>Cadastro de Corretor</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>CPF:</Form.Label>
              <Form.Control
                type="text"
                value={CPF}
                onChange={(e) => setCPF(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Apelido:</Form.Label>
              <Form.Control
                type="text"
                value={apelido}
                onChange={(e) => setApelido(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Data de Nascimento:</Form.Label>
              <Form.Control
                type="date"
                value={data_nasc}
                onChange={(e) => setDataNasc(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Telefone:</Form.Label>
              <Form.Control
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>RG:</Form.Label>
              <Form.Control
                type="text"
                value={rg}
                onChange={(e) => setRG(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={3}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Endereço:</Form.Label>
              <Form.Control
                type="text"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
                placeholder="Logradouro"
                required
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Numero:</Form.Label>
              <Form.Control
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Número"
                required
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Complemento:</Form.Label>
              <Form.Control
                type="text"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                placeholder="Complemento"
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Bairro:</Form.Label>

              <Form.Control
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Bairro"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Cidade:</Form.Label>
              <Form.Control
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Cidade"
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Estado:</Form.Label>
              <Form.Control
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                placeholder="Estado"
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Cep:</Form.Label>
              <Form.Control
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="CEP"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                requiredl
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Superintendencia:</Form.Label>
              <Form.Select
                type="text"
                value={imobiliaria}
                onChange={(e) => setImobiliaria(e.target.value)}
                required
              >
                <option>Pamela</option>
                <option>Lisboa</option>
                <option>Garcia</option>
                <option>Yago</option>
                <option>Mateus</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Corretor ou Gerente:</Form.Label>
              <Form.Select
                type="text"
                value={categoria_nivel}
                onChange={(e) => setCategoriaNivel(e.target.value)}
                required
              >
                <option>Corretor</option>
                <option>Gerente</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
        <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Código Interno:</Form.Label>
              <Form.Control
               type="text"
               value={codigointerno}
               onChange={(e) => setCodigoInterno(e.target.value)}
               required
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>CRECI:</Form.Label>
              <Form.Control
               type="text"
               value={creci}
               onChange={(e) => setCreci(e.target.value)}
               required
              />
            </Form.Group>
          </Col>
        </Row>
        

        <Row className="mb-4">
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Tipo de conta:</Form.Label>
              <Form.Control
                type="text"
                value={tipo_conta}
                onChange={(e) => setTipoConta(e.target.value)}
                placeholder="Tipo de conta"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Banco:</Form.Label>
              <Form.Control
                type="text"
                value={banco}
                onChange={(e) => setBanco(e.target.value)}
                placeholder="Banco"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Agência:</Form.Label>
              <Form.Control
                type="text"
                value={agencia}
                onChange={(e) => setAgencia(e.target.value)}
                placeholder="Agência"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Conta:</Form.Label>
              <Form.Control
                type="text"
                value={conta}
                onChange={(e) => setConta(e.target.value)}
                placeholder="Conta"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Conta:</Form.Label>
              <Form.Control
                type="text"
                value={digito}
                onChange={(e) => setDigito(e.target.value)}
                placeholder="Dígito"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
        Finalizar
      </Button>
      </Form>
    </Container>
  );
};

export default Corretor;
