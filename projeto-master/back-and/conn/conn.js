const mongoose = require("mongoose");
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const base = process.env.DB_BASE;

//url de conexão = mongodb+srv://user:password@host/nomedobanco
const Conn = (db_host, db_user, db_pass, db_base) => {
  mongoose
    .connect(
      `${host}/${base}`,
      {
        user:user,
        pass:pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB Atlas Conectado");
    })
    .catch((err) => console.log("Falha de conexao com o MongoDB Atlas", err));
};

//Exporta função Conn
module.exports = Conn;