
const express = require("express");
const rota = express.Router();
//const User = require("../models/NewUserModels");
//const bcrypt = require('bcryptjs');

//
rota.get("/users/contato", (req, res) => {
	res.render("users/contato");
});

rota.get("/users/sobre", (req, res) => {
	res.render("users/sobre");
});

rota.get("/users/portifolio", (req, res) => {
	res.render("users/portifolio");
});

rota.get("/users/projetos", (req, res) => {
	res.render("users/projetos");
});

rota.get("/users/list_users", (req, res) => {
	res.render("users/list_users");
});

rota.get("/users/list_users", (req, res) => {
	res.render("users/list_users");
});



module.exports = rota;
