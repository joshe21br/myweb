const express = require('express');
const app = express();

// controlers de rotas

const admin = require("./controlers/ControlerAdmin");
const user = require("./controlers/ControlerUser");
const produto = require("./controlers/ControlerProdutos");
const fornecedor = require("./controlers/ControlerFornecedores");
const cliente = require("./controlers/ControlerClientes");
const caixa = require("./controlers/ControlerCaixa");
// renderiza arquivos .ejs
app.set("view engine","ejs");

// arqwuivos staticos
app.use(express.static('public'));

// rotas

app.use("/", admin);
app.use("/", user);
app.use("/", produto);
app.use("/", fornecedor);
app.use("/", cliente);
app.use("/", caixa);

// pagina index
app.get("/", (req,res) => {
	res.render("index");
})

 const port = process.env.PORT || 3000;


// run server
 app.listen(port, () => {
      console.info("Aplicação rodando  em http/localhost:3000 ");
 })
