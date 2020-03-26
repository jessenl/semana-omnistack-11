const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

/** 
 * Rota / Recurso
 * Métodos HTTP: get, post, put, delete
 * get: buscar informações do back-end
 * post: Criar informações on back-end
 * put: alterar informações do back-end
 * delete: apagar uma informação do back-end
 * Dá pra fazer tudo com get. Os outros só existem por semântica
*/

/**
 * Tipos de parametros:
 * Query Parms: Paramêtros nomeados enviados na rota depois de "?". Pra filtros/paginação. Ex: users?nome_par=valor
 * Route Parms: usado pra identificar recursos. Ex: /users/:id => /users/1
 * Request Body:

 */

/** Banco de dados
 * Driver: SELECT * FROM TABLE 
 * Query builder: table('users').select('*').where(); usando Javascript (KnexJs)
 */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);