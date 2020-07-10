const input = document.querySelector('.input__search')
const button = document.querySelector('.button__search')
const lista = document.getElementById('lista')


button.addEventListener('click', function() {
    lista.innerHTML += `<li>${input.value}</li>`
})



// //Criando referencia para o botão
// const addTarefa = document.getElementById('addTarefa')
// //Adiciona o eventListener para o botão
// addTarefa.addEventListener('click', function(){
//     //criando referencia para o campo de texto
//     const tarefa = document.getElementById('tarefa').value  
//     document.getElementById('tarefa').value = ''
//     addEvento(tarefa)
// })
// //botão para remover todas as tarefas
// document.getElementById("remAll").addEventListener("click", function(){
//     removeEvento(null)
// })
// //botão para selecionar todas as tarefas
// document.getElementById("checkAll").addEventListener("click", function(){
//     document.querySelectorAll("input[type=checkbox]").forEach(function(item){
//         item.checked=true
//     })
// })
// //botão para desmarcar todas as tarefas
// document.getElementById("uncheckAll").addEventListener("click", function(){
//     document.querySelectorAll("input[type=checkbox]").forEach(function(item){
//         item.checked=false
//     })
// })
// //removendo eventos
// function removeEvento(idPai) {
//     const listaTarefas = document.getElementById('listaTarefas')
//     if (idPai){
//         listaTarefas.removeChild(document.getElementById(idPai))
//     } else {
//         while(listaTarefas.lastElementChild) {
//             listaTarefas.removeChild(listaTarefas.lastElementChild)
//         }
//     }
// }
// function addEvento(tarefa){
//     //Não receber tarefas vazias
//     if(!tarefa || !tarefa.trim()){
//         return
//     }
//     //criando referencia para a lista de tarefas
//     const listaTarefas = document.getElementById('listaTarefas') 
//     const idPai = `item-${Math.random()}`
//     //criando elemento filho
//     let itemLista = document.createElement("li")
//     itemLista.setAttribute("id",idPai)
//     //criando checkbox
//     let checkbox = document.createElement("input")
//     checkbox.setAttribute("type","checkbox")
//     itemLista.appendChild(checkbox)
//     //criando o elemento span
//     let span = document.createElement("span")
//     span.appendChild(document.createTextNode(tarefa.trim()))
//     //add span ao item da lista
//     itemLista.appendChild(span)
//     //criando botão
//     let botao = document.createElement("button")
//     botao.appendChild(document.createTextNode("X"))
//     botao.addEventListener("click", function(){
//         removeEvento(idPai)
//     })
//     itemLista.appendChild(botao)
//     //Adicionando o elemento filho ao elemento pai
//     listaTarefas.appendChild(itemLista)
// }