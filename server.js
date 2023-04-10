const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require("./app/routes/userRoutes");
const mesaRoutes = require("./app/routes/mesaRoutes");

const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://Admin:%40Ph974985101@databasemc.w2z5piy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.log('Erro ao conectar ao MongoDB:', err);
});

app.use("/usuarios", userRoutes);
app.use("/mesa", mesaRoutes);

app.listen(5000, function() {
    console.log('Servidor iniciado na porta 5000');
});
