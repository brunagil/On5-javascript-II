//Criando referencia para o botão
const addTarefa = document.getElementById('addTarefa')

//Adiciona o eventListener para o botão
addTarefa.addEventListener('click', function(){

    //criando referencia para o campo de texto
    const tarefa = document.getElementById('tarefa').value  
    document.getElementById('tarefa').value = ''
    addEvento(tarefa)

})
//botão para remover todas as tarefas
document.getElementById("remAll").addEventListener("click", function(){
    removeEvento(null)
})

//botão para selecionar todas as tarefas
document.getElementById("checkAll").addEventListener("click", function(){
    document.querySelectorAll("input[type=checkbox]").forEach(function(item){
        item.checked=true
    })
})

//botão para desmarcar todas as tarefas
document.getElementById("uncheckAll").addEventListener("click", function(){
    document.querySelectorAll("input[type=checkbox]").forEach(function(item){
        item.checked=false
    })
})

//removendo eventos
function removeEvento(idPai) {
    const listaTarefas = document.getElementById('listaTarefas')
    if (idPai){
        listaTarefas.removeChild(document.getElementById(idPai))
    } else {
        while(listaTarefas.lastElementChild) {
            listaTarefas.removeChild(listaTarefas.lastElementChild)
        }
    }
}

function addEvento(tarefa){

    //Não receber tarefas vazias
    if(!tarefa || !tarefa.trim()){
        return
    }

    //criando referencia para a lista de tarefas
    const listaTarefas = document.getElementById('listaTarefas') 
    const idPai = `item-${Math.random()}`

    //criando elemento filho
    let itemLista = document.createElement("li")
    itemLista.setAttribute("id",idPai)
    itemLista.setAttribute("class","list-group-item d-flex justify-content-between align-items-center")

    //setando bootstrap da lista de tarefas
    let div = document.createElement("div")
    div.setAttribute("class","form-group form-check")

    //criando checkbox
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")
    checkbox.setAttribute("class", "form-check-input")
    checkbox.setAttribute("id", `tarefa-check-${idPai}`)
    div.appendChild(checkbox)

    //criando o elemento span
    let label = document.createElement("label")
    label.appendChild(document.createTextNode(tarefa.trim()))
    label.setAttribute("class","form-check-label")
    label.setAttribute("for", `tarefa-check-${idPai}`)
    //add label ao item da lista
    div.appendChild(label)
   
    let icone = document.createElement("i")
    icone.setAttribute("class","fas fa-trash-alt")

    //criando botão
    let botao = document.createElement("button")
    botao.setAttribute("type", "button")
    botao.setAttribute("class", "btn btn-outline-danger")
    botao.appendChild(icone)
    botao.addEventListener("click", function(){
        removeEvento(idPai)
    })
   
    itemLista.appendChild(div)
    itemLista.appendChild(botao)
    //Adicionando o elemento filho ao elemento pai
    listaTarefas.appendChild(itemLista)

}