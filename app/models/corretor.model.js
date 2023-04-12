const mongoose = require("mongoose");

const corretorSchema = new mongoose.Schema({
  CPF: {
    type: String,
    required: true,
    unique: true
  },
  nome: {
    type: String,
    required: true
  },
  apelido: {
    type: String,
    required: false
  },
  data_nasc: {
    type: Date,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  rg: {
    type: String,
    required: true
  },
  endereco: {
    logradouro: {
      type: String,
      required: true
    },
    numero: {
      type: String,
      required: true
    },
    complemento: {
      type: String,
      required: false
    },
    bairro: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    cep: {
      type: String,
      required: true
    }
  },
  email: {
    type: String,
    required: true
  },
  imobiliaria: {
    type: String,
    required: true
  },
  categoria_nivel: {
    type: String,
    required: true
  },
  codigointerno: {
    type: String,
    required: true
  },
  creci: {
    type: String,
    required: true
  },
  conta_bancaria: {
    tipo_conta: {
      type: String,
      required: true
    },
    banco: {
      type: String,
      required: true
    },
    agencia: {
      type: String,
      required: true
    },
    conta: {
      type: String,
      required: true
    },
    digito: {
      type: String,
      required: true
    }
  }
});

const Corretor = mongoose.model("Corretor", corretorSchema);

module.exports = Corretor;
