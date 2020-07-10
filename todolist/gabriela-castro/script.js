const input = document.querySelector('.input__add')
const button = document.querySelector('.button__add')
const list = document.getElementById('list')
const listItem = document.querySelector('.list-item')
const buttonDeleteAll = document.querySelector('.button__delete-all')
const textError = document.querySelector('.error')
const buttonCheckbox = document.querySelector('.checkbox')
const deleteTask = document.querySelector('.delete-task')
const buttonCheckAll = document.querySelector('.button__check-all')


button.addEventListener('click', function () {
    if (input.value === '') {
      textError.innerHTML = 'Adicione uma tarefa';
    } else {
      list.innerHTML += `<li class="list-item">
          <input type="checkbox" class="checkbox" onclick='handleClick(this)'>${input.value}
          <button class="delete-task" onclick="deleteListItem(this)"><img src="img/delete.png" class="delete-task"></button>`;
          input.value = '';
          textError.innerHTML = ''
    }
  });

//função para deletar uma tarefa
function deleteListItem(li) {
     li.parentNode.remove();
}

buttonDeleteAll.addEventListener('click', function() {
    list.innerHTML = '';
})

buttonCheckAll.addEventListener('click', function() {
    let listaCheckAll = document.querySelectorAll('.checkbox') 
    for ( i = 0; i < listaCheckAll.length; i++) {
        listaCheckAll[i].checked = true;
        listaCheckAll[i].parentNode.classList.add('checked');
    }
})

// Função que vai escutar os eventos de check
function handleClick(checkbox) {
    if (!checkbox.checked) {
      // Se o checkbox foi desabilitado, nós removemos a classe
      checkbox.parentNode.classList.remove('checked');
    } else {
      // Se o checkbox foi habilitado, nós adicionamos a classe
      checkbox.parentNode.classList.add('checked');
    }
}  














