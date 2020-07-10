//Seletores
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const errorMessage = document.querySelector('.error')
const buttonDeleteAll = document.querySelector('#buttonDeleteAll')
const buttonCheckAll = document.querySelector('#buttonCheckAll')
const optionDeleteTodas = document.querySelector('#buttonDeleteAll')



//Events Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deletareFeito)


//Funções
function addTodo(event) {
    //impedir que o formulario seja enviado
    event.preventDefault()
    //formulario vazio
    if (todoInput.value === '') {
        return errorMessage.innerHTML = 'Por gentileza, digite uma tarefa.'
    } else {
        //CRIANDO LISTA DIRETO NO JS
        //Div Todo
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        //Criar lista
        const novoTodo = document.createElement('li')
        novoTodo.innerHTML = todoInput.value
        novoTodo.classList.add('todo-item') 
        todoDiv.appendChild(novoTodo)

        //botão tarefa feita
        const feitoButton = document.createElement('button')
        feitoButton.innerHTML = '<i class="fas fa-check-circle"></i>'
        feitoButton.classList.add('completo-btn')
        todoDiv.appendChild(feitoButton)

        //botão deletar
        const deletarButton = document.createElement('button')
        deletarButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
        deletarButton.classList.add('trash-btn')
        todoDiv.appendChild(deletarButton)

        //anexar a lista
        todoList.appendChild(todoDiv)

        //limpar input
        todoInput.value = ''
    }
}

function deletareFeito(e) {
    const item = e.target
    // Deletar tarefas feitas
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.remove()
    }
    // Tarefa feita
    if (item.classList[0] === 'completo-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completo')
    }

}
// selecionar todas, completa e incompletas (mas tá dando erro)
filterOption.addEventListener('click', function(){
    const todos = todoList.parentNode
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
               todo.style.display = "flex"
                break;
                case "completed":
                   if(t.classList.contains("completed")){
                    todo.style.display = "flex"
                   }else {
                    todo.style.display = "none"
                   }
                   break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex"
                   }else {
                    todo.style.display = "none"                      
                   }
                   break;
        }
    })

})

//Deletanto todas as tarefas
optionDeleteTodas.addEventListener('click', function () {
let deleteTodas = document.querySelectorAll('.todo-list')
for (let i = 0; i < deleteTodas.length; i++) {
  deleteTodas[i].delete = true;
}
})

