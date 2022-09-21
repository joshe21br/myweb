
const express = require("express");
const produto = express.Router();
//const User = require("../models/NewUserModels");
//const bcrypt = require('bcryptjs');

// rotas de cadastro de produto
produto.get("/produtos/cad_prod", (req, res) => {
	res.render("produtos/cad_prod");
});

// rota de listagem de produto
produto.get("/produtos/list_prod", (req, res) => {
	res.render("produtos/list_prod");
});

// rota de estoque de produto
produto.get("/produtos/estoque_prod", (req, res) => {
	res.render("produtos/estoque_prod");
});

// rota de avaria de produto
produto.get("/produtos/avarias_prod", (req, res) => {
	res.render("produtos/avarias_prod");
});

// rota de produto vendido
produto.get("/produtos/venda_prod", (req, res) => {
	res.render("produtos/venda_prod");
});


module.exports = produto;