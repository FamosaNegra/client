const mongoose = require('mongoose');

const LeadsCVSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true
  },
  email_principal: {
    type: String,
    required: true
  },
  telefone_principal: {
    type: String,
    required: true
  },
  nome_cliente: {
    type: String,
    required: true
  },
  data_criacao_lead: {
    type: Date,
    required: true
  },
  hora_criacao_lead: {
    type: String,
    required: true
  },
  email_alternativo: {
    type: String
  },
  telefone_alternativo: {
    type: String
  },
  sexo: {
    type: String
  },
  valor_negocio: {
    type: Number
  },
  endereco: {
    type: String
  },
  numero: {
    type: String
  },
  complemento: {
    type: String
  },
  bairro: {
    type: String
  },
  cidade: {
    type: String
  },
  estado: {
    type: String
  },
  id_empreendimentos: {
    type: String
  },
  id_gestor: {
    type: String
  },
  id_imobiliaria: {
    type: String
  },
  id_corretor: {
    type: String
  },
  cpf_corretor: {
    type: String
  },
  origem: {
    type: String
  },
  midia: {
    type: String
  },
  pdv: {
    type: String
  },
  conversao: {
    type: String
  },
  renda_familiar: {
    type: Number
  },
  situacao_lead: {
    type: String
  },
  tag: {
    type: String
  },
  preferencia_contato: {
    type: String
  }
});

const LeadsCV = mongoose.model('LeadsCV', LeadsCVSchema);

module.exports = LeadsCV;
