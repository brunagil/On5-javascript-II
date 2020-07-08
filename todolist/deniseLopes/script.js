//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const alerta = document.querySelector('.mensage');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


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








//  const element = document.getElementById("element");

//  var item  = document.querySelector(".inputItens");
//  let lista = document.querySelector("#lista");
//  const btnInputItens = document.querySelector(".btnInserirItens");
//  const btnDeleteItem = document.querySelector(".btnDeletarItem");
//  var li

//  //Adicionar itens na lista clicando no botão 'Adicionar item'.
//  btnInputItens.addEventListener('click', addItem);
//  function addItem (){
//      if(item.value != ""){
//      let itemAdd = '<li>' + item.value + '</li>';
//      lista.innerHTML +=itemAdd;
//      item.value = "";
//      item.focus();
//      }    
//  }

//  //Adicionar itens na lista clicando em 'Enter'.
//  item.addEventListener('keyup', function(e){
//      if(e.keyCode === 13){
//          addItem()
//      }
//  })

// //criando o botão check
// const btnComplete = document.createElement("button");
// btnComplete.innerHTML = <i class="fas fa-check"></i>;
// btnComplete.classList.add("btn-complete");
// inserirItens.appendChild(btnComplete);


// //criando um botão
// function addNewBtn(){
//     $("body").append("<button>-</button>");
// }
//  removeTask = function(){
//      for(var i = 0 ; i<lista.children.length; i++){
//          if(li.children[i].getAttribute("i") == item){
//              li.children[i].remove();
//          }
//      }
//  }
//  createRemoveItemBtn = function(){
//      let btnRemoveItem = document.createElement("button");
//      btnRemoveItem.setAttribute("onclick", "removeItem("+item+")");
//      btnRemoveItem.innerHTML = "x";
//      return btnRemoveItem;
//  }