const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require("./app/routes/userRoutes");
const mesaRoutes = require("./app/routes/mesaRoutes");
const corretorRoutes = require("./app/routes/corretorRoutes");
const cors = require('cors');
const jwt = require('jsonwebtoken');

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

const authRoutes = require('./app/routes/auth.routes');
app.use(express.json()); // Adicione o middleware para lidar com o corpo da requisição em formato JSON
authRoutes(app); // Passe a instância do Express para a função exportada do arquivo auth.routes.js

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.use("/usuarios", userRoutes);
app.use("/mesa", mesaRoutes);
app.use("/corretores", corretorRoutes);

const secret = process.env.JWT_SECRET || 'mysecret'; // use uma variável de ambiente para armazenar o segredo

app.post('/api/auth/signin', (req, res) => {
  User.findOne({ username: req.body.username })
    .populate('roles', '-__v')
    .exec()
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not found.'
        });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!'
        });
      }

      const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400 // 24 hours
      });

      const authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push('ROLE_' + user.roles[i].name.toUpperCase());
      }

      return res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while signing in.'
      });
    });
});
const port = process.env.PORT || 3001;
app.listen(443, function() {
    console.log('Servidor iniciado na porta 443');
});
