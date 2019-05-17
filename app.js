var express = require('express');
var app = express();
    
// Definir a route principal
app.get('/', function(req, res) {
  res.send('Welcome to API');
});

// Lista de Usuarios
var users = [
  { id: 1, username: 'Manuel', email: 'manuel@examplo.com' },
  { id: 2, username: 'Joao', email: 'joao@examplo.com' },
  { id: 3, username: 'Roberto', email: 'roberto@examplo.com' },
  { id: 4, username: 'Sergio', email: 'sergio@examplo.com' },
  { id: 5, username: 'Lucas', email: 'lucas@examplo.com' },
  { id: 6, username: 'Luis', email: 'luis@examplo.com' },
  { id: 7, username: 'Gustavo', email: 'gustavo@examplo.com' },
];

// Definir um endpoint da API
app.get('/api/get_users', function(req, res, next) {
  res.send(users);
})

// Aplicação disponível em http://localhost:8000/
app.listen(8000);