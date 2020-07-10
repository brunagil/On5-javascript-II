const input = document.querySelector('.input__search')
const button = document.querySelector('.button__search')
const lista = document.getElementById('lista')
const buttonDelete = document.querySelector('.button__delete')
const button__checkAll = document.querySelector('.checkbox')
const textError = document.querySelector('.error')
//= document.querySelector('.button_check')
//const buttonDeletar = document.querySelector('.button__deletar')




button.addEventListener('click', function() {

    if (input.value === ''){
      textError.innerHTML = 'Adicione uma tarefa válida'
    } else {
      lista.innerHTML += `<li>${input.value}<button onclick="buttonDeletar(this)">X</button><input type="checkbox" onclick='handleClick(this, this.name);'></input></li>`;
      input.value = '';
      textError.innerHTML = '';
      input.focus ()
      input.value.trim()
            
    }
})


buttonDelete.addEventListener('click', function() {
  lista.innerHTML = '';
  
})

 function checkbox (item){

 } 

 function buttonDeletar (item){
 item.parentNode.remove() 
  
}

button__checkAll.addEventListener('click', function() {
  const checkAll = document.querySelectorAll('.checkbox') 
  for ( i = 0; i < checkAll.length; i++) {
      checkAll[i].checked
  }
})







