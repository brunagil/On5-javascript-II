//  1- adicione uma fruta no final da array abaixo
const frutas = ['morango', 'limao', 'abacaxi', 'banana']
frutas.push('pera')

// 2- retire o ultimo item da array
const frutas = ['morango', 'limao', 'abacaxi', 'banana']
frutas.pop()

// 3- retire o primeiro item da array
const frutas = ['morango', 'limao', 'abacaxi', 'banana']
frutas.shift()

// 4- junte duas arrays
const numbers = [1,2,3,4,5]
const otherNumbers = [6, 7, 8, 9, 10]
const novaArray = numbers.concat(otherNumbers)

// 5- adicione o numero zero no começo da array
const numbers = [1,2,3,4,5]
numbers.unshift(0)

// 6- remova os espaços no começo da string
const string = '    natalya'
const novaString = string.trim()

// 7- cheque que se o tipo do primeiro item da array é igual ao do segundo item
// e retorno verdadeiro ou falso.
const frutas = ['morango', 1 , 'abacaxi', 'banana']
if(typeof frutas[0] === typeof frutas[1]) {
  console.log(true)
} else {
  console.log(false)
}


// 8- com o for loop, itere pela array 'misturado' e printe todos os itens na tela
const misturado = ['1', 2, 'três', false, 'hello world', 5.6];
for (let i = 0; i < misturado.length; i++) {
  console.log(misturado[i])
}

// ARRAYS + OBJETOS

const alunas = [
    { nome: "Joana", idade: 23, materia_preferida: "JavaScript" },
    { nome: "Marta", idade: 15, materia_preferida: "Git" },
    { nome: "Francine", idade: 33, materia_preferida: "Bootstrap" },
    { nome: "Priscila", idade: 19, materia_preferida: "Git" },
    { nome: "Carla", idade: 29, materia_preferida: "Bootstrap" },
    { nome: "Vanessa", idade: 24, materia_preferida: "Git" },
    { nome: "Roberta", idade: 30, materia_preferida: "Bootstrap" }
];

// acesse a array e printe apenas o nome Carla.
"Carla"
alunas[4].nome

//acesse a array e printe apenas a materia preferida de vanessa
"Git"
alunas[5].materia_preferida

// percorra o array e retorno um novo array contendo apenas idades. Exemplo:
const idades = []
for (let i = 0; i < alunas.length; i++) {
  idades.push(alunas[i].idade)
}

[23, 15, 33, 19, 29, 24, 30]

// Retorne um array que contenha os dados da alunas que tem a idade maior que 24. Exemplo:
const alunasToppers = []
for (let i = 0; i < alunas.length; i++) {
  if (alunas[i].idade > 24) {
    alunasToppers.push(alunas[i])
  }
}

[
  {nome: "Francine", idade: 33, materia_preferida: "Bootstrap"},
  {nome: "Carla", idade: 29, materia_preferida: "Bootstrap"},
  {nome: "Roberta", idade: 30, materia_preferida: "Bootstrap"}
]


// Retorne um array que encontre as alunas na qual a matéria preferida seja JavaScript. Exemplo:
const alunasJs = []
for (let i = 0; i < alunas.length; i++) {
  if (alunas[i].materia_preferida === 'JavaScript') {
    alunasJs.push(alunas[i])
  }
}
[
  { nome: "XXX", idade: 23, materia_preferida: "JavaScript" }
]

// Retorne um arrau que encontre as alunas maiores de 18 que gostam de javaScript
const alunasMaioresJs = []
for (let i = 0; i < alunas.length; i++) {
  if (alunas[i].idade > 18 && alunas[i].materia_preferida === 'JavaScript') {
    alunasMaioresJs.push(alunas[i])
  }
}
[
    { nome: "XXX", idade: 23, materia_preferida: "JavaScript" }
]
