//Selectors
const header = document.querySelector('.header');
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoListShow = document.querySelector('.todo-list-show');
const alerta = document.querySelector('.message');
const limpAll = document.querySelector('.fa-power-off');
const checkAll = document.querySelector('.fa-tasks');
const completedTask = document.querySelector('.allchecked');
const btnGuardar = document.querySelector('.fa-eye');
const btnDeletar = document.querySelector('.fa-dumpster-fire');



//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



//Functions
function addTodo(event){
    const inputTodo = todoInput;
       
    if(todoInput.value.trim() === ""){        
        //Esta linha faz com que ele envie a informação
        event.preventDefault();
        //Aqui criamos uma Div como se fosse no HTML
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //Cria uma lista
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        inputTodo.focus();
        inputTodo.style.border = "5px solid red"
        alerta.textContent = "Você precisa digitar uma tarefa para adicionar."
        todoInput.value = "";
    }
    else{
        alerta.textContent = ""
        inputTodo.style.border = ""
        //Esta linha faz com que ele envie a informação
        event.preventDefault();
        //Aqui criamos uma Div como se fosse no HTML
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //Cria uma lista
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        //Salvar local
        saveLocalTodos(todoInput.value)
        //Criar o botão para dar check na atividade.
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //Criar o botão para remover a atividade.
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //Acrescentar para lista
        todoList.appendChild(todoDiv);
        //Limpar conteúdo digitado.
        todoInput.value = "";             
    }
}


//Função do botão deletar item
function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
//Função do botão check item
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

//Limpar todos os itens
limpAll.addEventListener('click', function(){
    const task = document.querySelectorAll('.todo');

    for (let i = 0; i<task.length; i++){
        todoList.remove();
        localStorage.clear()
        window.location.reload();
    }
});

//Botão check all
checkAll.addEventListener('click', function(){
    const task = document.querySelectorAll('.todo');
      
    for (let i = 0; i<task.length; i++){
        if(!task[i].classList.contains('completed')){
            task[i].classList.toggle('completed');
            completedTask.style.display = 'block';
        }
        else{
            (task[i].classList.contains('completed'))
            completedTask.style.display = 'block';
        }
    }
});

//Esta função salva as tarefas digitadas localmente.
function saveLocalTodos (todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


//Esta função remove as tarefas salvas localmente.
function removeLocalTodos (todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Esta função pega as informações slavas localmente e imprime na tela.
btnGuardar.addEventListener('click', function(){
    const tarefasCheck = document.querySelector('.tarefas');
    const show = localStorage.getItem("todos");
    //O replace serve para tirar as aspas ao exibir as tarefas concluídas.          
    tarefasCheck.textContent = `Tarefas concluídas: ${show.replace(/['"]+/g, '')}`;
});

//Esta função limpa (exclui permanentemente) as info salvas localmente.
btnDeletar.addEventListener('click', function(){
    localStorage.clear()
    window.location.reload();
});

const fechar = document.querySelector('.fa-times-circle');
fechar.addEventListener('click', function(){
    completedTask.style.display= 'none';
});


