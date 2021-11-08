

const express = require("express");
const cors = require("cors");

const vagasRouter = require('../trabalho-1/router/games.routes');

const app = express();

app.use(express.json());

app.use(cors());




app.use("/game" ,vagasRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`o app está rodando na : http://localhost:${port}`);
});
module.exports = router ;