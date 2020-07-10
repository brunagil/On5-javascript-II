const input = document.getElementById('tarefa')
const button = document.getElementById('btn-adicionar')
const ul = document.getElementById('minha-lista')
const errorMessage = document.querySelector('.error')

button.addEventListener('click', function () {

    const itemLista = input.value.trim()
    if (itemLista.length === 0) {
        errorMessage.textContent = 'Digite sua atividade, por gentileza.'
    }

    else {
        ul.appendChild(criarItem(itemLista))
    }

})

input.addEventListener('focus', function () {
    errorMessage.textContent = ''
    input.value = ''
})

input.addEventListener('keypress', function () {
    const itemLista = input.value.trim()

    if (event.keyCode == 13) {
        if (itemLista.length === 0) {
            errorMessage.textContent = 'Digite sua atividade, por gentileza.'
        }
        else {
            errorMessage.textContent = ''
            ul.appendChild(criarItem(itemLista))
            input.value = ''
        }
    }
})

function criarItem(itemLista) {
    var itemId = ul.childElementCount;
    let li = document.createElement("li");

    li.textContent = itemLista;
    li.setAttribute("index", itemId);
    li.appendChild(criarCheckbox());
    li.appendChild(criarBtnRemover(itemId));
    return li;
}

function criarCheckbox() {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "checkboxDaLista")
    return checkbox;
}

function criarBtnRemover(itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removerTarefa(" + itemId + ")");
    btn.setAttribute("class", "apagarItem")
    btn.innerHTML = 'x';
    return btn;
}

function removerTarefa(itemId) {
    for (let i = 0; i < ul.children.length; i++) {
        if (ul.children[i].getAttribute("index") == itemId) {
            ul.children[i].remove();
        }
    }
}

const buttonDeleteAll = document.getElementById('btn-delete-all')

buttonDeleteAll.addEventListener('click', function () {
    for (let i = ul.children.length - 1; ul.children.length > 0; i--) {
        ul.children[i].remove()

    }
})

const buttonMarcarAll = document.getElementById('btn-marcar-all')

buttonMarcarAll.addEventListener('click', function () {
    let listaCheckbox = document.querySelectorAll(".checkboxDaLista")
    for (let i = 0; i < listaCheckbox.length; i++) {
        listaCheckbox[i].checked = true
    }
})

const buttonDesmarcarAll = document.getElementById('btn-desmarcar-all')

buttonDesmarcarAll.addEventListener('click', function () {
    let listaCheckbox = document.querySelectorAll(".checkboxDaLista")
    for (let i = 0; i < listaCheckbox.length; i++) {
        listaCheckbox[i].checked = false
    }
})