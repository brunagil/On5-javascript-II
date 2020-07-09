const input = document.querySelector('.input')
const button = document.querySelector('.button__add')
const lista = document.getElementById('lista')
const errorMessage = document.querySelector('.error')
const buttonCheckAll = document.querySelectorAll('.btn__check-all')


button.addEventListener('click', addTask);

// Função que adiciona novo item na lista de tarefa
function addTask() {
    const query = input.value.trim()
    if (query.length === 0 || 
        query === '') {
        return errorMessage.innerHTML = 'Digite sua nova tarefa!'
    }
    

    lista.innerHTML += `
    <div onclick="markList(this)">
    <p >
    <li class="task-text">${input.value}
    <button onClick="deletar(this)" class="tasklist-delete-item">x</button></li>
    </div>
    `

    input.value=""
    input.focus()
}

    // Adiciona item clicando no enter
    input.addEventListener('keyup', function(event){
         if(event.keyCode === 13){
            addTask()
         }
     })

    
    input.addEventListener('focus', function() {
    errorMessage.textContent = ''
    input.value = ''
    })

    function deletar(item) {
    item.parentNode.remove()
    }

    delAll.addEventListener('click', function() {
        const listas = document.querySelectorAll('#lista')
        for (let i=0; i< listas.length; i++) {
            listas[i].remove()
        }
    })

    function markList(item) {
        item.classList.toggle('tasklist-show__p_checked')
    }

    document.getElementById("checkAll").addEventListener("click", function(){
        document.querySelectorAll("li").forEach(function(item){
            item.classList.toggle('tasklist-show__p_checked')
        })
    })