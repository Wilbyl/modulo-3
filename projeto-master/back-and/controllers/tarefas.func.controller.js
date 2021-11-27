const TarefaService = require("../services/tarefas.service");

const tarefaService = new TarefaService;

exports.getAll = async (req, res) => {
  const tarefa = await tarefaService.findAll();
  res.send(tarefa);
};

exports.getbyId = async (req, res) => {
  const tarefa = await tarefaService.findById(req.params.id);
  res.send(tarefa);
};
