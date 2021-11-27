if (process.env.NODE_ENV!== 'production'){
    require('dotenv').config()
}

const express = require('express');
const cors = require('cors');
const Conn = require ('./conn/conn.js')
const app = express();


app.use(express.json());
app.use(cors());



const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_base = process.env.DB_BASE;
console.log(db_host, db_user, db_pass, db_base)

Conn(db_host, db_user, db_pass, db_base);


const port = 3001;

app.listen(process.env.PORT || port, () => {
    console.log(`O servidor esta rodando na porta ${port}`);
  })