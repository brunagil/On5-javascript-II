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



button.addEventListener('click', function() {

    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i])

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

})

