/*const input = document.querySelector('.input__search')
const button = document.querySelector('.button__search')
const lista = document.getElementById('lista')


button.addEventListener('click', function() {
    lista.innerHTML += `<li>${input.value}</li>`
})*/

/*var ul = document.getElementById("myList");
var li;
var itemId;
var item;

Adicionar = function(){
    let item;
    if (document.getElementById("task").value != ""){
        item = document.getElementsById("task").value;
        itemId = ul.childElementCount;
        li = CreateItemEl(itemId);
        li.appendChild(createRemoveTaskBtn(itemId));
        ul.appendChild(li);
    }
}

removeTask = function(){
}

CreateItemEl = function(itemValue, ItemId){
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}
createRemoveTaskBtn = function(itemId){
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeTask("+itemId+")");
    btn.innerHTML = "X";
    return btn;
}*/

//TIO ED ENSINA!

//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const ButtonDeleteAll = document.querySelector(".deleteAll-btn");
const ButtonCheckAll = document.querySelector(".checkAll-btn");
//selector filter option
const  filterOption = document.querySelector(".filter-todo");
const searchInput = document.querySelector(".search-input");
const searchElement = document.querySelector(".search-button")


//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deletecheck);
ButtonDeleteAll.addEventListener('click', deleteAllDone);
ButtonCheckAll.addEventListener('click', checkAll);
//event listener option
filterOption.addEventListener('click', filterTodo);
searchElement.addEventListener('click', searchAll);


//Functions
function addTodo(event){
    //prevent form for submitting. uuuuuuu que legal tio!
    event.preventDefault();
    
    //
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement('li');
    if (todoInput.value === ''){
        alert("Adicione uma tarefa válida")
    } else{
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash' ></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
    }
    //clear todo input value
    todoInput.value = "";

}

function deletecheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo =item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo =item.parentElement;
        todo.classList.toggle('completed');
    }
}

//GRAÇAS A DEUS ALELUIA IRMÃO TAMO AÍ NO BOTÃO DE DELETAR TUDO OS PARANAUE
function deleteAllDone(e){
    const todos = todoList.childNodes;
    let confirmacao = confirm ("Tem certeza que deseja excluir essa lista?");
        if (confirmacao === true){
            todos.forEach(function(todo) {
            console.log(todo);
            //porque o primeiro item está dando como text, então ele buga, se o item for null... ele completa com o trem que eu quero de verdade verdadeira.
            if(todo.lastChild != null){
                todo.classList.add("fall");
                todo.addEventListener('transitionend', function(){
                todo.remove();
                });
            }
        })
    }
}


//dar check em tudo
function checkAll(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        console.log(todo);
        //porque o primeiro item está dando como text, então ele buga, se o item for null... ele completa com o trem que eu quero de verdade verdadeira.
        if(todo.lastChild != null){
            if(!todo.classList.contains('completed')){
                todo.classList.add('completed');
            }
        }
    })
}


function filterTodo(e){
    const todos = todoList.childNodes;

    //AQUI FICAVA DANDO ERRO NO FOREACH??? ATÉ AGORA NÃO ENTENDI PQ
    //ALGUÉM CONSEGUE ME EXPLICAR PQ O FOREACH NÃO PUXA OS TODOS????
    todos.forEach(function(todo) {
        console.log(todo);
        //porque o primeiro item está dando como text, então ele buga, se o item for null... ele completa com o trem que eu quero de verdade verdadeira.
        if(todo.lastChild != null){
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    } else{
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if(!todo.classList.contains('completed')){
                        todo.style.display = 'flex';
                    }else{
                        todo.style.display = 'none';
                    }
                break;
            }
        }
    })
}


function searchAll(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        alert(todo.getElementByClassName('.todo-item').value);
        /*if(todo.lastChild != null){
            if (searchInput.value === todo.getElementByClassName('.todo-item').value){
                
            }
            //const found = todos.find(element === element.value);
            
        }*/
    })
}

