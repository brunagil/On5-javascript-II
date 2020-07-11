const input = document.querySelector('.input__add')
const buttonAdd = document.querySelector('.button__add')
const errorMessenge = document.querySelector('.error')
const list = document.getElementById('list')
const buttonDelete = document.querySelector('.button__deleteall')
const buttonCheck = document.querySelector('.button__checkall')



buttonAdd.addEventListener('click', function(){

    var lista = input.value.trim()
    if(lista.length === 0){
        return   errorMessenge.innerHTML = 'Digite algo'
    }
    
  
    list.innerHTML += `
            <li class="itens"> <input class="checkbox" type="checkbox" onclick="checkElement(this)" /> ${lista} <button class="deleta" onclick="deleteElement">X</button> </li>
    `

})


function checkElement(item) {
    item.parentNode.classList.toggle('check')
}

function deleteElement(item){
    item.parentNode.remove()
}

buttonDelete.addEventListener('click', function(){
    const linha = document.querySelector('.itens')
    linha.remove()
})

buttonCheck.addEventListener('cllick', function(){
    const okay = document.querySelector('.itens')
    okay.classList.toggle('check')
})

input.addEventListener('focus', function(){
    errorMessenge.texContent = ''
    input.value = ''
})