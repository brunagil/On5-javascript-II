const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo")

//event listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);
filterOption.addEventListener('click', checkItem);


//function
function addTodo(event) {

    event.preventDefault();

    if (todoInput.value.length === 0) {
        alert('Please, type an activity') 
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
    item.parentElement.remove();
}

function checkItem(item) {
    item.parentElement.classList.toggle('completed');
}