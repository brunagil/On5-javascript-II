const input = document.querySelector('.input__add')
const button = document.querySelector('.button__add')
const list = document.getElementById('list')
const listItem = document.querySelector('.list-item')
const buttonDeleteAll = document.querySelector('.button__delete-all')
const textError = document.querySelector('.error')
const buttonCheckbox = document.querySelector('.checkbox')
const deleteTask = document.querySelector('.delete-task')
const buttonCheckAll = document.querySelector('.button__check-all')

let totalToDo = 1

button.addEventListener('click', function() {
    if (input.value === '') {
        textError.innerHTML = 'Adicione uma tarefa'
    } else {
        list.innerHTML += `<li class="list-item" id="item-${totalToDo}">
        <input type="checkbox" name="checkbox-${totalToDo}" class="checkbox" onclick='handleClick(this, this.name)'>${input.value}
        <button class="delete-task" onclick="deleteListItem(this)"><img src="img/delete.png" class="delete-task"></button>`;
        totalToDo++
        input.value = '';
        textError.innerHTML = '';
    }
})

//função para deletar uma tarefa
function deleteListItem(li) {
     li.parentNode.remove()
}

buttonDeleteAll.addEventListener('click', function() {
    list.innerHTML = '';
})

buttonCheckAll.addEventListener('click', function() {
    let listaCheckAll = document.querySelectorAll('.checkbox') 
    for ( i = 0; i < listaCheckAll.length; i++) {
        listaCheckAll[i].checked = true
    }
})

function handleClick(checkbox, name) {
    const id = name.replace('checkbox', 'item')
    const item = document.getElementById(id)

    if (!checkbox.checked) {
        item.classList.remove('checked')
    } else {
        item.classList.add('checked')
    }
}
