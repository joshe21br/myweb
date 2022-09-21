
const express = require("express");
const cliente = express.Router();
//const User = require("../models/NewUserModels");
//const bcrypt = require('bcryptjs');

//
// rotas admin
//
cliente.get("/clientes/cad_clientes", (req, res) => {
	res.render("clientes/cad_clientes");
});

cliente.get("/clientes/list_clientes", (req, res) => {
	res.render("clientes/list_clientes");
});


module.exports = cliente;