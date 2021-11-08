
const lista = document.getElementById("lista");


const apiUrl = "http://localhost:3000/game";


let edicao = false;
let idEdicao = 0;


let titulo = document.getElementById("titulo");
let empresa = document.getElementById("empresa");
let logo = document.getElementById("logo");
let salario = document.getElementById("salario");
let descricao = document.getElementById("descricao");


const getVagas = async () => {

  const response = await fetch(apiUrl);
  
  const vagas = await response.json();

  console.log(vagas);


  vagas.map((vaga) => {
    lista.insertAdjacentHTML(
      "beforeend",
      `
        <div class="col">
            <div class="card">
            <img src="${vaga.logo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${vaga.titulo} - ${vaga.empresa}</h5>
                
                <p class="card-text">R$ ${vaga.salario}</p>
                <p class="card-text">${vaga.descricao}</p>
                <div>
                    <button class="btn btn-primary" onclick="editVaga('${vaga.id}')">Editar</button>
                    <button class="btn btn-danger" onclick="deleteVaga('${vaga.id}')">Excluir</button>
                </div>
                <div>
                 <input type="checkbox" id="horns" name="horns">
                <label for="horns">Horns</label>
            </div>
            </div>
            </div>
        </div>
        `
    );
  });
};

a

const submitForm = async (event) => {
  
  event.preventDefault();

  
  const vaga = {
    titulo: titulo.value,
    empresa: empresa.value,
    logo: logo.value,
    salario: parseFloat(salario.value),
    descricao: descricao.value,
  };
  

  if (edicao) {
    putVaga(vaga, idEdicao);
  } else {
    createVaga(vaga);
  }

  clearFields();
  lista.innerHTML = "";
};

const createVaga = async (vaga) => {
  
  const request = new Request(`${apiUrl}/add`, {
    method: "POST",
    body: JSON.stringify(vaga),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  
  const response = await fetch(request);

  const result = await response.json();
  
  alert(result.message);
 
  getVagas();
};

const putVaga = async (vaga, id) => {
 
  const request = new Request(`${apiUrl}/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify(vaga),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  
  const response = await fetch(request);

  const result = await response.json();
 
  alert(result.message);
  edicao = false;
  idEdicao = 0;
  getVagas();
};


const deleteVaga = async (id) => {
 
  const request = new Request(`${apiUrl}/delete/${id}`, {
    method: "DELETE",
  });

  const response = await fetch(request);
  const result = await response.json();

  alert(result.message);

  lista.innerHTML = "";
  getVagas();
};


const getVagaById = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  return await response.json();
};


const editVaga = async (id) => {
  
  edicao = true;
  idEdicao = id;

 
  const vaga = await getVagaById(id);

  
  titulo.value = vaga.titulo;
  empresa.value = vaga.empresa;
  logo.value = vaga.logo;
  salario.value = vaga.salario;
  
  descricao.value = vaga.descricao;
};

const clearFields = () => {
  titulo.value = "";
  empresa.value = "";
  logo.value = "";
  salario.value = "";
  senioridade.value = "";
  descricao.value = "";
};

getVagas();
