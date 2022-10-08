

const express = require('express');

const rotas = express.Router();

const receberControles= require('../controle/receberControles');


//ROTAS DO SITE
rotas.get('/', receberControles.home);
rotas.get('/receita/:id', receberControles.showReceita);
rotas.get('/categories', receberControles.displaycategories);
rotas.get('/categories/:id', receberControles.showCategoriesId);


module.exports = rotas ;
