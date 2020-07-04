const button = document.getElementById('button')

button.addEventListener('click', function() {
    //tira o botao da tela
    button.remove()

    const dogs = ['Dakota', 'Arizona', 'Gloria', 'Rex', 'Bolinha', 'Caixote'];

    const result = document.getElementById('result')
    const resultList = document.getElementById('resultList')

    result.innerHTML = `O array dogs tem ${dogs.length} itens:`

    //esvazia a lista de 'li' antes de criar novamente
    resultList.innerHTML = ''
    for (let i = 0; i < dogs.length; i++) {
        resultList.innerHTML += `<li>${dogs[i]}</li>`
    }
});

// atualmente o programa está mostrando apenas 1 item na tela
// mas queremos que ele mostre toda a lista de dogs

// resolvido o primeiro problemas, temos que garantir que ao apertar novamente o botão 'show'
// a lista seja mantida na tela sem itens repetidos.

// resolvido os dois problemas acima, queremos que só seja permitido apertar o botão uma vez.
// depois do primeiro clique, remova o botão da tela.

// atualize o código e use template strings
