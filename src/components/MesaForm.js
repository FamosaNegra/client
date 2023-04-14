import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Select from 'react-select';

class MesaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      andar: "",
      mesaTerreo: "",
      mesaMezanino: "",
      mesa37: "",
      status: "ocupada",
      corretor: "",
      corretores: [],
      gerente: "",
      tipoMesa: "venda",
      cliente: "",
      telefone: "",
      entrada: "",
      saida: "",
    };
    this.state = {
      andar: "",
      mesaTerreo: "",
      mesaMezanino: "",
      mesa37: "",
      showMesa: false,
    };
  }
  handleAndarChange = (event) => {
    const andar = event.target.value;
    this.setState({
      andar: andar,
      mesaTerreo: "",
      mesaMezanino: "",
      mesa37: "",
      showMesa: andar !== "",
    });
  };
  componentDidMount() {
    const url = `${window.location.protocol}//${window.location.hostname}:443/corretores/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((corretor) => ({
          value: corretor.id,
          label: corretor.nome,
        }));
        this.setState({
          corretores: options,
        });
      })
      .catch((error) => console.error(error));
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const url = `${window.location.protocol}//${window.location.hostname}:443/mesa/`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // fazer algo com a resposta da requisição, se necessário
      })
      .catch((error) => console.error(error));
  };
  

  render() {
    const mesasTerreo = Array.from(Array(22), (_, i) => `Mesa ${i + 1}`);
    const mesasMezanino = Array.from(Array(17), (_, i) => `Mesa ${i + 1}`);
    const mesas37 = Array.from(Array(30), (_, i) => `Mesa ${i + 1}`);
    return (
      <Form onSubmit={this.handleSubmit} method="POST" id="form" className="form">
        <FormGroup>
          <Label for="andar">Andar:</Label>
          <Input
            type="select"
            name="andar"
            id="andar"
            onChange={this.handleAndarChange}
            value={this.state.andar}
            required
          >
            <option value="">Selecione o andar</option>
            <option value="Terreo">Terreo</option>
            <option value="Mezanino">Mezanino</option>
            <option value="37">37</option>
          </Input>
        </FormGroup>

        {this.state.showMesa && this.state.andar === "Terreo" && (
          <FormGroup id="select-mesa-terreo">
            <Label for="mesa-terreo">Mesa - Terreo:</Label>
            <Input
              type="select"
              name="mesaterreo"
              id="mesa-terreo"
              value={this.state.mesaTerreo}
              onChange={(event) =>
                this.setState({ mesaTerreo: event.target.value })
              }
            >
              <option value="">Selecione a mesa</option>
              {mesasTerreo.map((mesa) => (
                <option value={mesa}>{mesa}</option>
              ))}
            </Input>
          </FormGroup>
        )}

        {this.state.showMesa && this.state.andar === "Mezanino" && (
          <FormGroup id="select-mesa-mezanino">
            <Label for="mesa-mezanino">Mesa - Mezanino:</Label>
            <Input
              type="select"
              name="mesamezanino"
              id="mesa-mezanino"
              value={this.state.mesaMezanino}
              onChange={(event) =>
                this.setState({ mesaMezanino: event.target.value })
              }
            >
              <option value="">Selecione a mesa</option>
              {mesasMezanino.map((mesa) => (
                <option value={mesa}>{mesa}</option>
              ))}
            </Input>
          </FormGroup>
        )}

        {this.state.showMesa && this.state.andar === "37" && (
          <FormGroup id="select-mesa-37">
            <Label for="mesa-37">Mesa - 37:</Label>
            <Input
              type="select"
              name="mesa37"
              id="mesa-37"
              value={this.state.mesa37}
              onChange={(event) =>
                this.setState({ mesa37: event.target.value })
              }
            >
              <option value="">Selecione a mesa</option>
              {mesas37.map((mesa) => (
                <option value={mesa}>{mesa}</option>
              ))}
            </Input>
          </FormGroup>
        )}

        <FormGroup>
          <Label for="status">Status:</Label>
          <Input
            type="select"
            name="status"
            id="status"
            value={this.state.status}
            required
            onChange={(e) => this.setState({ status: e.target.value })}
          >
            <option value="ocupada">Ocupada</option>
            <option value="mba">MBA</option>
          </Input>
        </FormGroup>

        <FormGroup>
  <Label for="corretor">Corretor:</Label>
  <Select
    options={this.state.corretores}
    value={this.state.corretor}
    onChange={(selectedOption) => {
      this.setState({ corretor: selectedOption.value });
    }}
  />
</FormGroup>

        <FormGroup>
          <Label for="gerente">Gerente:</Label>
          <Input
            type="text"
            name="gerente"
            id="gerente"
            value={this.state.gerente}
            
            required
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="tipo-mesa">Tipo de Mesa:</Label>
          <Input
            type="select"
            name="tipomesa"
            id="tipo-mesa"
            value={this.state.tipoMesa}
            required
            onChange={(e) => this.setState({ tipoMesa: e.target.value })}
          >
            <option value="venda">Venda</option>
            <option value="entrevista">Entrevista</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="cliente">Cliente:</Label>
          <Input
            type="text"
            name="cliente"
            id="cliente"
            value={this.state.cliente}
            required
            onChange={(e) => this.setState({ cliente: e.target.value })}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="telefone">Telefone:</Label>
          <Input
            type="tel"
            name="telefone"
            id="telefone"
            value={this.state.telefone}
            placeholder="tel: cliente"
            required
            onChange={(e) => this.setState({ telefone: e.target.value })}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="entrada">Entrada:</Label>
          <Input
            type="datetime-local"
            name="entrada"
            id="entrada"
            value={this.state.entrada}
            required
            onChange={(e) => this.setState({ entrada: e.target.value })}
          ></Input>
          <Input
            type="datetime-local"
            name="saida"
            id="saida"
            style={{ display: "none" }}
            value={this.state.saida}
          ></Input>
        </FormGroup>

        <Button type="submit" className="btn btn-primary">
          Enviar
        </Button>
      </Form>
    );
  }
}

export default MesaForm;
