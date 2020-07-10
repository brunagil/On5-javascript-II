const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners 
todoButton.addEventListener('click', addTodo);


//function
function addTodo(event) {

    event.preventDefault();

    if (todoInput.value.length === 0) {
        alert (`Please, type an activity.`)
    }
    else {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
    
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        completedButton.setAttribute("onclick", "checkItem(this)");
        todoDiv.appendChild(completedButton);
    
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        trashButton.setAttribute("onclick", "deleteItem(this)");
        todoDiv.appendChild(trashButton);
    
        todoList.appendChild(todoDiv);
    
        todoInput.value = '';
    }
}

function deleteItem(item) {
    item.parentNode.remove();
}

function checkItem(item) {
    item.parentNode.classList.toggle('completed');
}

function deleteAll() {
    for(let i = todoList.children.length - 1; todoList.children.length > 0; i--) {
        todoList.children[i].remove();
    }
}

function checkAll() {
    for(let i = 0; i < todoList.children.length; i++) {
        if(todoList.children[i].classList[todoList.children[i].classList.length - 1] !== 'completed') {
            todoList.children[i].classList.toggle('completed');
        }
    }
}