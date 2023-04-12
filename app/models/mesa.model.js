const mongoose = require("mongoose");

const mesaSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  andar: {
    type: String,
    enum: ['Terreo', 'Mezanino', '37'],
    required: true
  },
  mesaterreo: {
    type: String,
    required: false
  },
  mesamezanino: {
    type: String,
    required: false
  },
  mesa37: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['ocupada', 'disponivel', 'mba'],
    required: true
  },
  corretor: {
    type: String,
    required: true
  },
  tipomesa: {
    type: String,
    enum: ['venda', 'entrevista'],
    required: true
  },
  cliente: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  entrada: {
    type: Date,
    required: true
  },
  saida: {
    type: Date,
    required: false
  }
});

const Mesa = mongoose.model("Mesa", mesaSchema);


module.exports = Mesa;