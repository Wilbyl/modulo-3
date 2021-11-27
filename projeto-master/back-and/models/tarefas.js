const mongoose = require("mongoose");

const tarefaShema = new mongoose.Schema({
  nome: { type: String, required: true },
  prioridade: { type: String, required: true },
  descricao: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const TarefaModel = mongoose.model("tarefa", tarefaShema);

model.exports = TarefaModel;
