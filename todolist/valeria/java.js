//botão para adicionar tarefas
const bntaddtarefa = document.querySelector('#buttonAdd');
//aonde eu irei escrever para capturar o value
const inputTask = document.querySelector('.addtarefa');
//id da ul 
const taskList = document.querySelector('.listando');
//botão de deletar uma li
const deleteTask = document.querySelector('.deleteAll');
//a li
const listItem = document.querySelector('.list-item');
//mensagem de erro
const errorMessage = document.querySelector('.error');


bntaddtarefa.addEventListener('click', function () {

    if (inputTask.value.length > 0) {
        taskList.innerHTML += `
        <li class="list-item">
            <input type="checkbox" name="checkThis" class="checkbox">
            <p class="list-text">${inputTask.value}</p>;
            <i class="fas fa-trash-restore" id="deleteTask" onclick="deleteLiItem(this)">
            <hr></li>`
        inputTask.value = "";
        errorMessage.innerHTML = "";
    } else {
        return errorMessage.innerHTML = '.error'
    }
});


function deleteLiItem(li) {
    li.parentNode.remove()

};

clearAll.addEventListener('click', function () {
    taskList.innerHTML = '';
    inputTask.value = "";
});

