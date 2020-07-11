// Selecionar os elementos
const clearAll = document.querySelector(".btn-del-all")
const dateElement = document.getElementById("header-date")
const list = document.getElementById("list")
const input = document.getElementById("input")


const check = "fa-check-circle"
const uncheck = "fa-circle-thin"
const lineThrough = "lineThrough"

// Data
const options = {weekday: "long", month: "long", day: "numeric", year: "numeric" };
const today = new Date ();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// adicionando "To Do" Function 

function addToDo(toDo, id, done, trash){
    if(trash){
        return;
    } 

    // const DONE = check;
    // if (DONE == done) {
    //     return check;
    // } else {
    //     return uncheck;
    // }

    const item = `<li class="item">
                        <i class="far fa-circle ${check}" job="complete" id="${toDo}"></i>
                        <p class="text">${toDo}</p>
                        <i class="far fa-window-close" job="delete" id="${id}"></i>
                    </li>
                    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);

}


// Adicionar um botão clicando Enter

document.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) {
        const toDo = input.value;

        if (toDo){
            addToDo(toDo);
        }
        input.value = "";
    }
});
