// ploft 
// here are the elements in the HTML file that I want interaction into
const input = document.querySelector('.input__search')
const button = document.querySelector('.button__search')
const lista = document.getElementById('list')
const buttonDelete = document.querySelector('.button__delete')
const textError = document.querySelector('.error')
const image = document.getElementById('myImg')
const checkAll = document.getElementById('btnCheckCheck')
const deleteTask = document.querySelector('#deleteTask')


// empty string = error 
button.addEventListener('click', function() {
    if (input.value === '') {
        textError.innerHTML = 'Escreve algo, vai'
    } else {
        lista.innerHTML += `<li>${input.value}</li>`;
        `<li class="list-item">
            <input type="checkbox" class=""></input>
            <p class="list-text">${input.value}</p>
            <button id="deleteTask" class="btn" onclick="deleteItem(this)><i class="fa fa-trash"></i></button>
       </li>` 
        input.value = '';
        textError.innerHTML = '';
    }
})

//             <input type="checkbox" class=""></input>

// function deleteItem(li) {
//     li.parentNode.remove()
// }

// // marking all the list
// checkAll.addEventListener('click', function() {
//     let mark = document.querySelectorAll('input[type="checkbox"]');
//         for (let i = 0; i < mark.length; i++) {
//             checkboxes[i].checked = true;        }

//cleaning off the list entirely
buttonDelete.addEventListener('click', function() {
    lista.innerHTML = '';
})

// function deleteLiItem(li) {
//     li.parentNode.remove()


// function addItem(){
//     var ul = document.getElementById('ul'); //ul
//     var li = document.createElement('li');//li
//     var text = document.getElementById('texto');

//     var checkbox = document.createElement('button');
//     checkbox.type = "checkbox";
//     checkbox.name = "name";
//     checkbox.value = "value";
//     checkbox.id = "id";

//     li.appendChild(checkbox);
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li); 
// }




// Create a "close" button and append it to each list item
// var i;
// for (i = 0; i < lista.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
// var close = document.getElementById("list");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

//    //check mark button
//    const completedButton = document.createElement("button");
//    completedButton.innerHTML = "<i class='fas fa-check'></i>";
//    completedButton.classList.add("complete-btn");
//    input.appendChild(completedButton);

//    //check trash button
//    const trashButton = document.createElement("button");
//    trashButton.innerHTML = "<i class='fas fa-trash' ></i>";
//    trashButton.classList.add("trash-btn");
//    input.appendChild(trashButton);




// //cleaning off the list entirely
// buttonDelete.addEventListener('click', function() {
//     lista.innerHTML = '';
// })

//função para deletar uma tarefa


// function checkAll(o) {
//     var boxes = document.querySelector(".input");
//     for (var x = 0; x < boxes.length; x++) {
//       var obj = boxes[x];
//       if (obj.type == "checkbox") {
//         if (obj.name != "check")
//           obj.checked = o.checked;
//       }
//     }
//   }





// document.getElementById('select-all').onclick = function() {
//     var checkboxes = document.getElementsByName('.selectThat');
//     for (var checkbox of checkboxes) {
//       checkbox.checked = this.checked;
//     }
//   }
// podemos tb usar o loop, inteirando por um array e ordenada pelo index? (socorro, me perdi )

//click eh o gatilho da função 

// var image = document.getElementById("myImg")

// button.addEventListener('click', function() {
//     tasklist.innerHTML
// })

// PARAMETRO 
// // x e y sao parametros, sao placeholders da funcao. eu nao quero definir o numero, eu quero que o usuario me DE ISSO PORRA, EH ISSO CARALHO
// function soma (x, y) {
//     return x + y
// }

// //esses sao parametros definidos 
// soma(2,3)

// socorro
// fazer o mesmo para um add all 
// const buttonAddAll = document.querySelector('.button__selector')

// buttonAddAll.addEventListener('click', function { 
//     cont tarefas = document.querySelectorAll('.button__add')

//     for (let i = 0; i < tarefas.lenght; i++) {
//         tarefas[i].remove()
//     }
// })

// //propriedade que é uma função e esta dentro de uma funcao, normalmente quando queremos ver um objeto com uma acao 
// const objtao  ={ 
//     nome"'joao'
//     idade: 23.
//     falar: function() {
//         console.log('oi')
//     }
// }
// objtao.nome

//tentativa dfe algo que ainda nao entendi



//lembrar do input.value.trim para tirar os espaços 
// st ring vazia eh um valor falso no javascript 
// // funcao resultados button.addeventlinstener...
// \resultados.html 
// const query = input.value.trim , linha 37 





// const buttonAddAll = document.querySelector('.button__add') nooooope 
// buttonAddAll.addEventListener ('click', function() {
//     lista.innerHTML += `<li>${input.value}</li>`

//     function removeAll(){
//         document.getElementById("checkList").innerHTML = "";
//     }




// var ul = document.getElementById("List");
// var li;
// var itemId;


// addTask = function() 
// {
//     alert("oi")
// }

// removeTask = function()
// {
// }

// createItemEl = function() 
// {
// }

// createRemoveTaskBtn = function()
// {
    
// }


