const express = require('express');
const session = require('express-session');
const app = express();

// Configura a sessão
app.use(session({
  secret: 'Pedrao-MKT',
  resave: false,
  saveUninitialized: true
}));

// Middleware para verificar se o usuário está logado
const checkAuth = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('../login.html');
  } else {
    next();
  }
}
app.get('/', (req, res) => {
    res.redirect('./login.html');
  });
// Rota para a página de login
app.get('/login.html', (req, res) => {
  res.sendFile(__dirname + '../login.html');
});

// Rota para a página de índice
app.get('/index.html', checkAuth, (req, res) => {
  res.sendFile(__dirname + '../index.html');
});

module.exports = checkAuth;