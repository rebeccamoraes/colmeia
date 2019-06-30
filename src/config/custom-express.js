require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;