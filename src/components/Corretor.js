import React, { useState } from "react";
import axios from "axios";

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

  const handleSubmit = async e => {
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
        cep
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
        digito
      }
    };
    try {
      await axios.post("/corretores/", corretor);
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
    <div className='container'>
      <h2>Cadastro de Corretor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            value={CPF}
            onChange={e => setCPF(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Apelido:</label>
          <input
            type="text"
            value={apelido}
            onChange={e => setApelido(e.target.value)}
          />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={data_nasc}
            onChange={e => setDataNasc(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>RG:</label>
          <input
            type="text"
            value={rg}
            onChange={e => setRG(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            value={logradouro}
            onChange={e => setLogradouro(e.target.value)}
            placeholder="Logradouro"
            required
          />
          <input
            type="text"
            value={numero}
            onChange={e => setNumero(e.target.value)}
            placeholder="Número"
            required
          />
         <input
            type="text"
            value={complemento}
            onChange={e => setComplemento(e.target.value)}
            placeholder="Complemento"
          />
          <input
            type="text"
            value={bairro}
            onChange={e => setBairro(e.target.value)}
            placeholder="Bairro"
            required
          />
          <input
            type="text"
            value={cidade}
            onChange={e => setCidade(e.target.value)}
            placeholder="Cidade"
            required
          />
          <input
            type="text"
            value={estado}
            onChange={e => setEstado(e.target.value)}
            placeholder="Estado"
            required
          />
          <input
            type="text"
            value={cep}
            onChange={e => setCep(e.target.value)}
            placeholder="CEP"
            required
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imobiliária:</label>
          <input
            type="text"
            value={imobiliaria}
            onChange={e => setImobiliaria(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Categoria/Nível:</label>
          <input
            type="text"
            value={categoria_nivel}
            onChange={e => setCategoriaNivel(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Código Interno:</label>
          <input
            type="text"
            value={codigointerno}
            onChange={e => setCodigoInterno(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CRECI:</label>
          <input
            type="text"
            value={creci}
            onChange={e => setCreci(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Conta Bancária:</label>
          <input
            type="text"
            value={tipo_conta}
            onChange={e => setTipoConta(e.target.value)}
            placeholder="Tipo de conta"
            required
          />
          <input
            type="text"
            value={banco}
            onChange={e => setBanco(e.target.value)}
            placeholder="Banco"
            required
          />
          <input
            type="text"
            value={agencia}
            onChange={e => setAgencia(e.target.value)}
            placeholder="Agência"
            required
          />
          <input
            type="text"
            value={conta}
            onChange={e => setConta(e.target.value)}
            placeholder="Conta"
            required
          />
          <input
            type="text"
            value={digito}
            onChange={e => setDigito(e.target.value)}
            placeholder="Dígito"
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Corretor;
