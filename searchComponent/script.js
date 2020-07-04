const cards = [
    {
        titulo: "David Bowie",
        linkMusica: "https://www.youtube.com/watch?v=lXgkuM2NhYI",
        imagem: "https://www.rbsdirect.com.br/imagesrc/25656152.jpg?w=800&h=535&a=c%201x"
    },
    {
        titulo: "Amy Winehouse",
        linkMusica: "https://www.youtube.com/watch?v=namFjcOgHSE",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPNvHX0praNSvv22P6EP6SptRfGLnobKQ9BPEPnRWgA1LD53bA&usqp=CAU"
    },
    {
        titulo: "Pink Floyd",
        linkMusica: "https://www.youtube.com/watch?v=_FrOQC-zEog",
        imagem: "https://i.ytimg.com/vi/-EzURpTF5c8/maxresdefault.jpg"
    },
    {
        titulo: "Caetano Veloso",
        linkMusica: "https://www.youtube.com/watch?v=WwfwRULbSA8",
        imagem: "https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2019/05/0e45c9f-caetano-veloso-musicas-1024x682.jpg"
    },
    {
        titulo: "Cartola",
        linkMusica: "https://www.youtube.com/watch?v=dvpk1wL_zC8",
        imagem: "https://facesocial.files.wordpress.com/2010/06/clip_image0021.jpg?w=775"
    }
];


const button = document.querySelector('.button__search')
const resultados = document.getElementById('resultados')
const input  = document.querySelector('.input__search')
const errorMessage = document.querySelector('.error')
const buttonDeleteAll = document.querySelector('.button__delete-all')


button.addEventListener('click', function() {
    resultados.innerHTML = ''
    const query = input.value.toLowerCase().trim()

    if (query.length === 0) {
        return errorMessage.innerHTML = 'digite algo, por gentileza'
    }

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].titulo.toLowerCase().includes(query)) {
            resultados.innerHTML += `
            <div class="card" onclick="makeItGrey(this)">
                <button class="card__button" onclick="removeCard(this)">X</button>
                <img class="imagem" src="${cards[i].imagem}"/>
                <div class="">
                    <h2>${cards[i].titulo}</h2>
                    <a class="linkMusica" href="${cards[i].linkMusica}">
                        <strong>Música</strong>
                    </a>
                </div>
            </div>
        `
        }
    }
})

function removeCard(item) {
    item.parentNode.remove()
}

function makeItGrey(item) {
    item.classList.toggle('grey')
}

input.addEventListener('focus', function() {
    errorMessage.textContent = ''
    input.value = ''
})


buttonDeleteAll.addEventListener('click', function() {
    const artistas = document.querySelectorAll('.card')
    for (let i = 0; i < artistas.length; i++) {
        artistas[i].remove()
    }
})

window.onload = function() {
    for (let i = 0; i < cards.length; i++) {
        resultados.innerHTML += `
        <div class="card" onclick="makeItGrey(this)">
            <button class="card__button" onclick="removeCard(this)">X</button>
            <img class="imagem" src="${cards[i].imagem}"/>
            <div class="">
                <h2>${cards[i].titulo}</h2>
                <a class="linkMusica" href="${cards[i].linkMusica}">
                    <strong>Música</strong>
                </a>
            </div>
        </div>
    `
    }
}
