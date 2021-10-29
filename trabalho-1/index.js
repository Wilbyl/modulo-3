const express = require("express");
const cors = require("cors");

// inicializar o express no nosso arquivo javascript para que ele possa assumir as funcoes do servidor
const app = express();

// fala pro express ultilizar o midleware para trabalhar com JSON.
app.use(express.json());

// estou ultilizando o midleware do cors para liberar as requisicoes entre origens diferentes.
app.use(cors());
const port = 3000;


const vagasRouter = require('./views/index.html');

app.get("/", (req, res) => {
  res.send("ola galera");
});

// app.get("/listar", (req, res) => {
//   res.send("vamos galera");
// });

// app.post("/listar", (req, res) => {
//   res.send(`vamos galera ${req.body.nome}`);
// });

// app.post("/listar1", (req, res) => {
//   const { nome, genero, ano } = req.body;

// //   res.send(`o nogo ${nome}do genero${genero} foi lançado em ${ano}`);

//   lista.push(nome,genero,ano);
//   res.send(lista);
// });
// app.put("/listar1:id", (req, res)=>{
//     const id = req.params.id -1 ;
//     const {nome, genero, ano}=req.body;

//     lista[id]= {nome,genero,ano};
//     res.send(lista);
// });



// app.delete("/listar1/:id", (req, res) => {
//   const id = req.params.id - 1;
//   delete lista[id];
//   res.send(lista);
// });

// inicializamos o servidor na porta pré definida.
app.listen(port, () => {
  console.log(`o app está rodando na : http://localhost:${port}`);
});
