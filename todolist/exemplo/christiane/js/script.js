const input  = document.querySelector('.input__add')
const errorMessage = document.querySelector('.error')
const button = document.querySelector('.button__add')
const buttonDeleteAll = document.querySelector('.button__delete-all')
const lista = document.getElementById('lista')

//input /mensagem de erro para click button input vazio
button.addEventListener('click', function() {
    
    if (input.value === '') {
        errorMessage.innerHTML = 'Digite algo'
    } else {
        lista.innerHTML += `<li>${input.value}</li>`
        input.value = ''
        errorMessage.innerHTML = ''
    }
})

function removeListaItem(item) {
    item.parentNode.remove()
}

//botão para deletar lista
buttonDeleteAll.addEventListener('click', function() {
    lista.innerHTML = '';
})

//dar foco no campo input
input.addEventListener('focus', function() {
    errorMessage.textContent = ''
    input.value = ''
})