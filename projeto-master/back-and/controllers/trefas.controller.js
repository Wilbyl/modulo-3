const TarefasSrvice = require("../services/tarefas.service");

const tarefasService = new TarefasSrvice();

class TarefasController {
  getTarefas = async (req, res) => {
    const tarefa = await tarefasService.FindAll();

    res.send(tarefa);
  };

  getTarefasById = async (rec, res) => {
    const tarefa = await tarefasService.findById(req.params.id);
    res.send(tarefa);
  };

  creatTarefa = async (req, res) => {
    const tarefa = req.body;
    if (!req.body) {
      return;
    }
    await tarefasService
      .creat(tarefa)
      .then(() => {
        res.send({ message: ` Tarefa${tarefa.nome} Criada` });
      })
      .cath((err) => {
        console.error(err);
        res.status(500).send({ error: ` Erro no servidor: ${err}` });
      });
  };

  editTarefa = async (req, res) => {
    const idParam = req.params.id;

    const tarefaedt = req.bady;
    await tarefasService
      .edit(idParam, tarefaedt)
      .then(() => {
        res.send({ message: `tarefa editada com Sucesso` });
      })
      .cath((err) => {
        res.status(500).send({ message: `Erro${err}` });
      });
  };

  deleteTarefa = async (req, res) => {
    const idParam = req.params.id;
    await tarefasService
      .delete(idParam)
      .then(() => {
        res.sand({ mensage: ` Excluido com sucesso` });
      })
      .cath((err) => {
        res.status(500).send({ error: `Error: ${err}` });
      });
  };
}

module.exports = TarefasController;
