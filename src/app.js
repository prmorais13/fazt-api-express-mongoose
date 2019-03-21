const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const usersRouter = require('./routes/usersRouter');

const app = express();

// Conexão com o banco de dados
mongoose
  .connect('mongodb://localhost/faz-api-express-mongoose', {
    useNewUrlParser: true
  })
  .then(db => console.log('Banco de dados conectado.'))
  .catch(err => console.log('Falha ao conectar banco de dados', err));

// Configurações
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/users', usersRouter);

// Iniciando o servidor
app.listen(app.get('port'), () => {
  console.log('Servidor rodando na porta', app.get('port'));
});
