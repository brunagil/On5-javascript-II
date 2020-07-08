//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const alerta = document.querySelector('.message');
const limpAll = document.querySelector('.fa-power-off');
const checkAll = document.querySelector('.fa-tasks');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// checkAll.addEventListener('click', limpaCheckAll);


//Functions
function addTodo(event){
    const inputTodo = todoInput   
    if(todoInput.value === ""){
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

limpAll.addEventListener('click', function(){
    todoList.remove();
});

checkAll.addEventListener('click', function(){
    todoList.classList.toggle('completed');
    if(todoInput.value = ""){
        const newTodoCheck = document.createElement("li");
        newTodoCheck.innerText = todoInput.value;
        newTodoCheck.classList.add("todo-item");
        todoDivCheck.appendChild(newTodoCheck);
    }
    else{
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
    }
    
});


// //Função do botão limpar lista
// function limpaCheckAll(e){
//     const item = e.target;
//     for(let i=0; i<classList.length; i++){
//         if(item.classList[i] === fa-power-off){
//         const tudo = item.parent.parentElement;
//         todo.remove();
//         }

//     }    
    

// }






