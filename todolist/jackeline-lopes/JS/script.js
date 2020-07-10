const tasks = [
    "Consulta médica sexta 09/07 14h", 
    "Jantar tia Lena segunda 13/07",
    "Assistir aulas BossaBox",
    "Organizar Drive"

];

//capturar tudo primeiro 
const input = document.getElementById("taskInput");
const addButton = document.querySelector(".add-button");
const taskList = document.getElementById("listaTarefas");
const errorMessage = document.querySelector(".error");
const buttonDeleteAll = document.getElementById("deleteButton");
const buttonCheckAll = document.getElementById("checkButton");


addButton.addEventListener("click", function() {
    const task = input.value.toLowerCase().trim();
    console.log(task);
    if (task.length === 0) {
        return errorMessage.innerHTML = "Insira uma tarefa";
    }

    //atualiza a lista de tarefas
    taskList.innerHTML += `
            <li class="task" onclick="makeItGrey(this)">
                <h4>${task}</h4>
                <button class="task__delete" onclick="removeTask(this)"></button>
            </li>
        `
})

function removeTask(task) {
    task.parentNode.remove();
}

//toggle - interruptor
function makeItGrey(task) {
    task.classList.toggle('grey');
}

//para limpar o campo "add task" e a mensagem de erro
input.addEventListener('focus', function() {
    errorMessage.textContent = ''
    input.value = ''
})


//sempre que atualizar a página
window.onload = function() {
    for (let i = 0; i < tasks.length; i++) {
        taskList.innerHTML += `
        <li class="task" onclick="makeItGrey(this)">
            <h4>${tasks[i]} <span class="space"></span> </h4>
            <button class="task__delete" onclick="removeTask(this)"></button>
        </li>
        `
    }
}
//tarefas q já estavam na lista e as q foram adicionadas - por isso a nova variável "tarefas"
buttonDeleteAll.addEventListener('click', function() {
    const tarefas = document.querySelectorAll('.task-list')
    for (let i = 0; i < tarefas.length; i++) {
        tarefas[i].remove()
    }
})

//marcar como feitas as tarefas q já estavam na lista e as q foram adicionadas - por isso a nova variável "tarefas"
buttonCheckAll.addEventListener('click', function() {
    const tarefas = document.querySelectorAll('.task-list')
    for (let i = 0; i < tarefas.length; i++) {
        makeItGrey(tarefas[i])
    }
})
