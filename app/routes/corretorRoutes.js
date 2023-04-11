const express = require("express");
const router = express.Router();
const Corretor = require("../models/corretor.model");


// GET all corretores
router.get("/", async (req, res) => {
    try {
        const corretores = await Corretor.find();
        res.json(corretores);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// GET one corretor
router.get("/:id", getCorretor, (req, res) => {
    res.json(res.corretor);
});

// POST new corretor
router.post("/", async (req, res) => {
    const corretor = new Corretor({
        CPF: req.body.CPF,
        nome: req.body.nome,
        apelido: req.body.apelido,
        data_nasc: req.body.data_nasc,
        telefone: req.body.telefone,
        rg: req.body.rg,
        endereco: req.body.endereco,
        email: req.body.email,
        imobiliaria: req.body.imobiliaria,
        categoria_nivel: req.body.categoria_nivel,
        codigointerno: req.body.codigointerno,
        creci: req.body.creci,
        conta_bancaria: req.body.conta_bancaria
    });

    try {
        const newCorretor = await corretor.save();
        res.status(201).json(newCorretor);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

// PATCH update corretor
router.patch("/:id", getCorretor, async (req, res) => {
    if (req.body.CPF != null) {
        res.corretor.CPF = req.body.CPF;
    }
    if (req.body.nome != null) {
        res.corretor.nome = req.body.nome;
    }
    if (req.body.apelido != null) {
        res.corretor.apelido = req.body.apelido;
    }
    if (req.body.data_nasc != null) {
        res.corretor.data_nasc = req.body.data_nasc;
    }
    if (req.body.telefone != null) {
        res.corretor.telefone = req.body.telefone;
    }
    if (req.body.rg != null) {
        res.corretor.rg = req.body.rg;
    }
    if (req.body.endereco != null) {
        res.corretor.endereco = req.body.endereco;
    }
    if (req.body.email != null) {
        res.corretor.email = req.body.email;
    }
    if (req.body.imobiliaria != null) {
        res.corretor.imobiliaria = req.body.imobiliaria;
    }
    if (req.body.categoria_nivel != null) {
        res.corretor.categoria_nivel = req.body.categoria_nivel;
    }
    if (req.body.codigointerno != null) {
        res.corretor.codigointerno = req.body.codigointerno;
    }
    if (req.body.creci != null) {
        res.corretor.creci = req.body.creci;
    }
    if (req.body.conta_bancaria != null) {
        res.corretor.conta_bancaria = req.body.conta_bancaria;
    }
    try {
        const updatedCorretor = await res.corretor.save();
        res.json(updatedCorretor);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

// DELETE corretor
router.delete("/:id", getCorretor, async (req, res) => {
    try {
        await res.corretor.remove();
        res.json({
            message: "Corretor deletado com sucesso"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Middleware function to get corretor by ID
async function getCorretor(req, res, next) {
    let corretor;
    try {
        corretor = await Corretor.findById(req.params.id);
        if (corretor == null) {
            return res.status(404).json({
                message: "Corretor não encontrado"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
    res.corretor = corretor;
    next();
}

module.exports = router;