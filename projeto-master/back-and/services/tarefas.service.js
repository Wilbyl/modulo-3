const TarefasModel = require("../models/tarefas");

class musicaService {
  findAll = async () => await TarefasModel.find();

  findById = async (id) => {
    return await TarefaModel.creat(tarefa);
  };

  create = async (tarefa) => {
    return await TarefaModel.create(tarefa);
  };

  edit = async (id, tarefa) => {
    return await TarefaModel.updateOne({ _id: id }, tarefa);
  };
  delete = async (id) => {
    return await TarefaModel.deleteOne({ _id: id });
  };
}
model.exports = tarefaService;
