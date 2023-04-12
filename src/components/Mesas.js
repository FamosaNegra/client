import React, { useState, useEffect } from 'react';
import { Table, Badge, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import MesaForm from './MesaForm';

export default function Mesas() {
  const [mesas, setMesas] = useState([]);
  const [andarSelecionado, setAndarSelecionado] = useState('Todos');


  useEffect(() => {
    const url = `${window.location.protocol}//${window.location.hostname}:443/mesa/`;

    axios.get(url)
      .then(res => {
        setMesas(res.data)
      })
  }, [])

  const handleChange = (event) => {
    setAndarSelecionado(event.target.value);
  }

  if (!Array.isArray(mesas)) {
    return <div>Carregando...</div>;
  }

  const renderMesa = mesa => {
    if (mesa.andar === 'Terreo') {
      return mesa.mesaterreo;
    } else if (mesa.andar === 'Mezanino') {
      return mesa.mesamezanino;
    } else if (mesa.andar === '37') {
      return mesa.mesa37;
    }
  } 

  const filtrarMesas = () => {
    if (andarSelecionado === 'Todos') {
      return mesas;
    } else {
      return mesas.filter(mesa => mesa.andar === andarSelecionado)
    }
  }

  function handleEncerrar(event) {
    const tr = event.target.parentNode.parentNode;
    const mesaId = tr.getAttribute('data-id');
    console.log(`mesaId: ${mesaId}`);
  
    axios.put(`/mesa/saida/${mesaId}`, {}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const saida = tr.querySelector('td:last-child');
        saida.textContent = new Date(response.data.saida).toLocaleString();
        alert("Mesa Liberada");
        window.location.reload();

      })
      .catch(error => console.error(error));
  }
  return (
    <Container>
      <Row>
      <Col md={2}>
        <MesaForm></MesaForm>
        </Col>
        <Col md={10}>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <select value={andarSelecionado} onChange={handleChange}>
                <option value="Todos">Todos</option>
                <option value="Terreo">Terreo</option>
                <option value="Mezanino">Mezanino</option>
                <option value="37">37</option>
              </select>
            </th>
            <th>Número da Mesa</th>
            <th>Status</th>
            <th>Corretor</th>
            <th>Tipo Mesa</th>
            <th>Cliente</th>
            <th>Telefone</th>
            <th>Entrada</th>
            <th>Saída</th>
          </tr>
        </thead>
        <tbody>
          {filtrarMesas().filter(mesa => mesa.saida === null).map(mesa =>(
            <tr key={mesa._id} data-id={mesa._id}>
              <td>{mesa.andar}</td>
              <td>{renderMesa(mesa)}</td>
              <td>{mesa.status === 'Ocupada' ? <Badge bg="danger">Ocupada</Badge> : <Badge bg="success">Disponível</Badge>}</td>
              <td>{mesa.corretor}</td>
              <td>{mesa.tipomesa}</td>
              <td>{mesa.cliente}</td>
              <td>{mesa.telefone}</td>
              <td>{mesa.entrada}</td>
              <td><Button variant="primary" onClick={handleEncerrar}>Encerrar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Col>

      </Row>
      </Container>
  );
}