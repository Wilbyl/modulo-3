const express = require('express');

const TarefasController = require('../controllers/trefas.controller');

const TarefaControllerFunc = require('../controllers/tarefas.func.controller');

const tarefaController = new TarefasController();

const router = express.Router();


router.get('/',tarefaController.getTarefas);

router.get('/listar',  TarefaControllerFunc.getAll);

router.get('/:id', tarefaController.getTarefaById);

router.post('/:add',tarefaController.crateTarefa);

router.put('/:id',tarefaController.editTarefa);

router.delete('/id:',tarefaController.deleteTarefa);

module.exports = router;