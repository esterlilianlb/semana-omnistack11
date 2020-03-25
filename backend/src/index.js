const express = require('express');
const routes = require('./routes')

const app = express();

app.use(express.json())
app.use(routes)

app.listen(3333)

/*
Métodos HTTP

- GET: buscar ou listar uma informação no backend
- POST: criar uma informação no backend
- PUT: alterar uma informação no backend
- DELETE: apagar uma informação no backend

Tipos de parâmetros:

- Query params: parâmetros nomeados enviados na rota após o símbolo de '?', 
e geralmente eles servem pra filtros, paginação
- Route params: parâmentros utilizados para identificar recursos
- Request body: corpo da requisição utilizado para criar ou alterar recursos

Bancos de Dados:
- SQL: MySQL, SQLite, PostgreSQL, Microsoft SQL Server, Oracle
- NoSQL: MongoDB, CouchDB, etc

- Driver: SELECT * FROM users
- Query builder: table('users').select('*').where()
*/