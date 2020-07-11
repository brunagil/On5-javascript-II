//SELETORES
const listaInput = document.querySelector('.inputTarefa');
const listaButton = document.querySelector('.btnTarefa');
const listaTarefas = document.querySelector('.listaDeTarefas');
const errorMessage = document.querySelector('.error')

//EVENT LISTENERS
listaButton.addEventListener('click', addTarefa);
listaTarefas.addEventListener('click', deletaTarefa);

//FUNÇÕES
function addTarefa(event){
    event.preventDefault();
    
    const divTarefa = document.createElement('div');
    divTarefa.classList.add('tarefa');
    
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = listaInput.value;
    novaTarefa.classList.add('itemTarefa');
    divTarefa.appendChild(novaTarefa);

    //BOTÃO DE TAREFA COMPLETA/CHECK
    const btnFeita = document.createElement('button')
    btnFeita.innerHTML = '<i class="fas fa-check"></i>';
    btnFeita.classList.add("complete-btn");
    divTarefa.appendChild(btnFeita);

    //BOTÃO DE DELETAR TAREFA
    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
    btnDelete.classList.add("trash-btn");
    divTarefa.appendChild(btnDelete);

    //ADICIONANDO INTENS APÓS O ANTERIOR
    listaTarefas.appendChild(divTarefa);

    //APAGANDO A TAREFA NO CAMPO INPUT APÓS ACRESCENTAR NA LISTA
    listaInput.value = "";
}

//APAGANDO A TAREFA NO BOTÃO DO LIXO
function deletaTarefa(e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        const lista = item.parentElement;
        lista.remove();
    }

//MARCANDO TAREFA COMO FEITA
    if(item.classList[0] === 'complete-btn'){
    const lista = item.parentElement;
    lista.classList.toggle('feito');
}




