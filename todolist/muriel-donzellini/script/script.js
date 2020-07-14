function addNewTask() {

    let li = document.createElement("li");
    let inputValue = document.querySelector('.toDoList__header--input').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    let buttonClose = document.createElement("buttonClose");
    buttonClose.innerHTML = ("\u00D7");
    let liButton = document.getElementsByTagName("li");
    li.appendChild(buttonClose);

    let buttonCheck = document.createElement("buttonCheck");
    buttonCheck.innerHTML = ("\u2713");
    let liButtonCheck = document.getElementsByTagName("li");
    li.appendChild(buttonCheck);

    if (inputValue === "") {
        alert("You must write something!");
    } else {
        document.getElementById("toDoList__body--ul").appendChild(li);
    }

    document.querySelector('.toDoList__header--input').value = "";

    buttonClose.addEventListener ("click", function() {
        let div = this.parentElement;
        div.style.display = "none";
    });

    buttonCheck.addEventListener ("click", function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

}