
const express = require("express");
const rota = express.Router();
//const User = require("../models/NewUserModels");
//const bcrypt = require('bcryptjs');

//
// rotas admin
//

// rrota login admin
rota.get("/admin/admin", (req, res) => {
	res.render("admin/admin");
});

rota.get("/admin/login_admin", (req, res) => {
	res.render("admin/login_admin");
});

//rota list admin
rota.get("/admin/list_admins", (req, res) => {
	res.render("admin/list_admins");
});

//rota signup admin
rota.get("/admin/signup_admin", (req, res) => {
	res.render("admin/signup_admin");
});




module.exports = rota;
