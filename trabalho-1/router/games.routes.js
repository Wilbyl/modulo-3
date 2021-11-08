const express= require("express");
const router = express.Router();

const lista =[
    {
        id: Date.now(),
        Titulo: "halo 4",
        empresa: 'blue',
        logo: 'https://cdn.akamai.steamstatic.com/steam/apps/1064273/capsule_616x353.jpg?t=1605671186',
        salario: '8,9',
       
        descricao: 'A mente do Master Chief foi invadida por um poderoso inimigo, que em busca de sua fraqueza, acaba encontrando a fonte de sua força.'

    }
]

router.get('/', (req, res) => {
    res.send(lista);
});

router.get('/:id', (req, res) => {
    const idParam = req.params.id;
    const listas = lista.find(listas => listas.id == idParam);
    res.send(listas);
});

router.post('/add', (req, res) => {
    
    const listas = req.body;
    listas.id = Date.now();
    vagas.push(listas);
    res.status(201).send({
        message: 'Cadastro com sucesso',
        data: listas
    });
});


router.put('/edit/:id', (req, res) => {
    
    const listaEdit = req.body;
    
    const idParam = req.params.id;
    
    let index = lista.findIndex(lista => lista.id == idParam);

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
    
    const idParam = req.params.id;

    const index = lista.findIndex(lista => lista.id == idParam);
    const nome = lista[index];
    lista.splice(index, 1);
    res.send({
        message: `Vaga ${nome.titulo} excluida com sucesso !`,
    });
});




module.export= router;