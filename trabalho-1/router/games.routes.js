const express= require("express");
const router = express.Router();

const lista = [
    {
        nome:"warcraft 3",
        genero:"rpg",
        ano:"2004"
    },{
        nome:"dora 2",
        genero:"moba",
        ano:"2013"
    },{
        nome:"league of legends",
        genero:"moba",
        ano:"2009",
    }
];

router.get('/', (req, res) => {
    res.send(lista);
});

router.get('/:id', (req, res) => {
    const idParam = req.params.id;
    const lista = vagas.find(lista => lista.id == idParam);
    res.send(lista);
});

router.post('/add', (req, res) => {
    
    const lista = req.body;
    lista.id = Date.now();
    vagas.push(lista);
    res.status(201).send({
        message: 'Cadastro com sucesso',
        data: lista
    });
});


router.put('/edit/:id', (req, res) => {
    
    const listaEdit = req.body;
    
    const idParam = req.params.id;
    
    let index = lista.findIndex(lista => lista.id == idParam);

    // spread operator ...
    // faz um espelho do item na lista e um espelho do objeto atualizado e junta os 2
    lista[index] = {
        ...lista[index],
        ...listaEdit
    }

    res.send({
        message: `vaga ${lista[index].titulo} atualizada com sucesso`,
        data: lista[index]
    });
});


router.delete('/delete/:id', (req, res) => {
    // acessamos o id recebido via parametro
    const idParam = req.params.id;

    const index = lista.findIndex(lista => lista.id == idParam);
    const nome = lista[index];
    lista.splice(index, 1);
    res.send({
        message: `Vaga ${nome.titulo} excluida com sucesso !`,
    });
});




module.export= router;