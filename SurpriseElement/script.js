const div = document.getElementById('main')
const button = document.getElementById('button')


// button.addEventListener('click', function() {
//     div.innerHTML = ''
//     const img = document.createElement('img')
//     img.setAttribute('src', './img/natymariel.jpg')
//     img.setAttribute('class', 'img')

//     const p = document.createElement('p')
//     p.textContent =
//     `Olha eu bem feliz recebendo meu diploma
//     da Reprograma das mãos dd Mariel <3 !
//     `
//     div.appendChild(img)
//     div.appendChild(p)

//     div.classList.toggle('visible')
// })

button.addEventListener('click', function() {
    div.innerHTML =`
    <img src="./img/natymariel.jpg" class="img">
    <p>Olha eu bem feliz recebendo meu diploma
    da Reprograma das mãos de Mariel <3!</p>
    `
    div.classList.toggle('visible')
})
