const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Mesa = require("../models/mesa.model");

// Cria uma nova mesa
router.post("/", async (req, res) => {
  try {
    const mesa = new Mesa(req.body);
    await mesa.save();
    res.status(201).json(mesa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Busca todas as mesas
router.get("/", async (req, res) => {
  try {
    const mesas = await Mesa.find();
    res.status(200).json(mesas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Busca uma mesa por ID
router.get("/:id", async (req, res) => {
  try {
    const mesa = await Mesa.findById(req.params.id);
    res.status(200).json(mesa);
  } catch (err) {
    res.status(404).json({ message: "Mesa não encontrada" });
  }
});

// Atualiza uma mesa existente
router.patch("/:id", async (req, res) => {
  try {
    const mesa = await Mesa.findById(req.params.id);
    if (req.body.andar) {
      mesa.andar = req.body.andar;
    }
    if (req.body.mesaterreo) {
      mesa.mesaterreo = req.body.mesaterreo;
    }
    if (req.body.mesamezanino) {
      mesa.mesamezanino = req.body.mesamezanino;
    }
    if (req.body.mesa37) {
      mesa.mesa37 = req.body.mesa37;
    }
    if (req.body.status) {
      mesa.status = req.body.status;
    }
    if (req.body.corretor) {
      mesa.corretor = req.body.corretor;
    }
    if (req.body.tipomesa) {
      mesa.tipomesa = req.body.tipomesa;
    }
    if (req.body.cliente) {
      mesa.cliente = req.body.cliente;
    }
    if (req.body.telefone) {
      mesa.telefone = req.body.telefone;
    }
    if (req.body.entrada) {
      mesa.entrada = req.body.entrada;
    }
    if (req.body.saida) {
      mesa.saida = req.body.saida;
    }
    await mesa.save();
    res.status(200).json(mesa);
  } catch (err) {
    res.status(404).json({ message: "Mesa não encontrada" });
  }
});

// Deleta uma mesa
router.delete("/:id", async (req, res) => {
  try {
    const mesa = await Mesa.findByIdAndDelete(req.params.id);
    res.status(200).json(mesa);
  } catch (err) {
    res.status(404).json({ message: "Mesa não encontrada" });
  }
});

router.post('/mesa/:id/saida', async (req, res) => {
  const id = req.params.id;
  try {
    const mesa = await Mesa.findByIdAndUpdate(id, { saida: new Date() }, { new: true });
    res.status(200).json(mesa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
