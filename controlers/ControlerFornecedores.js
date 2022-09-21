
const express = require("express");
const fornecedor = express.Router();
//const User = require("../models/NewUserModels");
//const bcrypt = require('bcryptjs');

//
// rotas admin
//
fornecedor.get("/fornecedores/cad_fornec", (req, res) => {
	res.render("fornecedores/cad_fornec");
});

fornecedor.get("/fornecedores/list_fornec", (req, res) => {
	res.render("fornecedores/list_fornec");
});


module.exports = fornecedor;