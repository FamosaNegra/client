import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function Mesas() {
  const [mesas, setMesas] = React.useState([]);
  const [andarSelecionado, setAndarSelecionado] = useState('Todos');

  React.useEffect(() => {
    axios.get('http://localhost:5000/mesa/')
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
  const handleSaida = (id) => {
    const dataAtual = new Date();

    axios.put(`http://localhost:5000/mesa/${id}/saida`, {
      saida: dataAtual
    })
    .then(res => {
      window.location.reload();
    })
  }
  return (
    <div className='container'>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>  <select value={andarSelecionado} onChange={handleChange}>
                <option value="Todos">Todos</option>
                <option value="Terreo">Terreo</option>
                <option value="Mezanino">Mezanino</option>
                <option value="37">37</option>
              </select></TableCell>
            <TableCell>Numero da Mesa</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Corretor</TableCell>
            <TableCell>Tipo Mesa</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Entrada</TableCell>
            <TableCell>Saida</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {filtrarMesas().filter(mesa => mesa.saida === null).map(mesa =>(
            <TableRow key={mesa._id}>
              <TableCell>{mesa.andar}</TableCell>
              <TableCell>{renderMesa(mesa)}</TableCell>
              <TableCell>{mesa.status}</TableCell>
              <TableCell>{mesa.corretor}</TableCell>
              <TableCell>{mesa.tipomesa}</TableCell>
              <TableCell>{mesa.cliente}</TableCell>
              <TableCell>{mesa.telefone}</TableCell>
              <TableCell>{mesa.entrada}</TableCell>
              <TableCell> <Button onClick={() => handleSaida(mesa._id)}> Saida </Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
