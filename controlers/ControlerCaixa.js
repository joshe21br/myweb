
const express = require("express");
const caixa = express.Router();
//const User = require("../models/NewUserModels");
//const bcrypt = require('bcryptjs');

//
// rotas admin
//
caixa.get("/caixa/caixa", (req, res) => {
	res.render("caixa/caixa");
});
/*caixa.get("/caixa/list_clientes", (req, res) => {
	res.render("clientes/list_clientes");
});
*/

module.exports = caixa;