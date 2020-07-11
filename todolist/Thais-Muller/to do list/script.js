/*const input = document.querySelector('.inputTask') //era input search
const addTask = document.querySelector('.addTask') //era button search
const buttonDelete = document.querySelector('.button__delete')
const buttonCheck = document.querySelector('.button__check')

FEITO- poder adicionar tarefas
FEITO- poder remover tarefas
N AINDA- poder marcar tarefas como feitas
FEIT0- ao adicionar tarefa, o campo de input deve ser limpo.
FEITO- não pode adicionar tarefa vazia

*/
const input = document.querySelector('.input__search')
const button = document.querySelector('.button__search')
const lista = document.getElementById('lista')
const buttonDeleteAll = document.querySelector('.button__delete')
const textError = document.querySelector('.error') //o text error da verificação vai pra classe error no html
const deleteTask = document.querySelector('#deleteTask');
const buttonCheckAll = document.querySelector('#buttonCheckAll');

button.addEventListener('click', function() { //Quando o evento click acontecer 
    if (input.value === ''){    //vai ver se ta adicionando uma tarefa vazia
        textError.innerHTML = 'Adicione uma tarefa válida' //e vai dar essa mensagem de erro
    } else {
    lista.innerHTML += `<li>${input.value}
    <input type="checkbox" name="checando" class="checkbox">
    <button class="delete-task" onclick="deleteLiItem(this)"><img src="img/lixo.png" class="delete-task" id="deleteTask"></button>
   </li>`; //para colocar a lista item por item
    input.value = ''; //vai limpar o que tiver no campo de digitar
    textError.innerHTML = ''; //e vai limpar também a mensagem de erro
    }
})



buttonDeleteAll.addEventListener('click', function(){
    lista.innerHTML = ''; //para limpar a lista  toda 
})

function deleteLiItem(li) {
    li.parentNode.remove()
}

buttonCheckAll.addEventListener('click', function () {
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].checked = true;
    };
    });

