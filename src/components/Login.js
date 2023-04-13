import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css'; // Importe o arquivo CSS personalizado
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const url = `${window.location.protocol}//${window.location.hostname}:443/api/auth/signin`;
      try {
        const response = await axios.post(url, { username, password });
        console.log(response.data); // Exibe os dados da resposta da API
      } catch (error) {
        console.error(error); // Exibe o erro, se ocorrer
      }
    };

  return (
    <div className="login-container d-flex align-items-center justify-content-center"> {/* Adicione classes para centralizar o componente */}
    <Form className="login-form" onSubmit={handleSubmit}>
      <h2 className="mb-4">Login</h2>
      <Form.Group controlId="formBasicUsername" className="mb-4">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Preencha com o username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="mb-4">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 mt-3 p-3">
        Login
      </Button>
    </Form>
  </div>
  );
};

export default Login;
