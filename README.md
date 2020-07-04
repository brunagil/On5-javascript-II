# Estruturas de dados

## Arrays

![arrays in javascript](https://miro.medium.com/max/1400/0*jJba103A-9xmpTYq.jpg)

Uma array é uma coleção ordenada de itens, onde cada item tem um *índice(index)*.

__Arrays tem o índice começando no zero.__

![animal array](https://mernstack917190716.files.wordpress.com/2018/05/array.jpg?w=840)

```
const arr = ['Zebra', 'Rhino', 'Giraffe', 'Owl'];

console.log(arr[0]);              // logs 'Zebra'
console.log(arr[1]);              // logs 'Rhino'
```

### Length

É uma propriedade de Arrays que mostra o número de elementos contidos na mesma.

Exemplo:
```
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length); // 4
```
Podemos usa-lo também para pegar o último item de uma array:
```
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing[clothing.length - 1]); // 'sweaters'
````

Arrays podem conter vários tipos de dados:
```
   const variavel = 'abc'
   const misturado = ['1', 2, 'três', false, variavel, 5.6];
   console.log(misturado) // logs ["1", 2, "três", false, "abc", 5.6]
```
Doc MDN: [MDN - Arrays JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Métodos de Arrays

Existem vários métodos já prontinhos que o JS nos dá para manipular dados de arrays. Eles são extremamente úteis e muito utilizados no dia-a-dia de pessoas desenvolvedoras.

Alguns exemplos:
* push
* pop
* concat
* includes
* pop
* shift
* unshift
* indexof
* typeof
* trim
* reverse

Doc Referência: [w3Schools](https://www.w3schools.com/js/js_array_methods.asp)


### Iterando por uma Array
```
const arrayNomes = ['roberta', 'fernanda', 'denise', 'marcela']

for (let i = 0; i < arrayNomes.length; i++) {
    console.log(arrayNomes[i])
}

logs:
roberta
fernanda
denise
marcela
```

## Objetos

![objetos javascript](https://blog.dankicode.com/wp-content/uploads/2019/08/Objetos-em-JavaScript.png)

Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.

#### Criando um objeto:
```
    const pessoa = {};
    pessoa.nome = 'jonas'
    pessoa.idade = 29

    console.log(pessoa) // logs {nome: "jonas", idade: 29}
```

#### Acessando objetos
##### Dot notation vs Bracket notation
```
    pessoa.nome // jonas
    pessoa['nome'] // jonas
```

Por padrão prefira usar o '.' ou dot notation, é mais fácil de ler e mais rápido de escrever. Apenas em alguns caso específicos usamos os brackets(colchetes). Por exemplo, quando a propriedade começa com número ou for uma string que tenha mais de um nome (ex: 'thank-you').


Doc MDN: [MDN - Objetos JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico)

### Iterando por um Array de objetos

```
const arrayDeObjetos = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

for(let i = 0; i < arrayDeObjetos.length; i++) {
    console.log(arrayDeObjetos[i])
}

logs:
{user: 234, name: "Marcia", idade: 40}
{user: 235, name: "Lorena", idade: 20}
{user: 236, name: "Patricia", idade: 24}
{user: 237, name: "Mariana", idade: 15}
{user: 238, name: "Isis", idade: 34}
{user: 239, name: "Pietra", idade: 23}
```


### Template Strings
São strings que permitem que coloquemos dentro delas expressões ou variáveis.

Para declara-las usamos 'crase'.


Usando template strings com expressões:

```
`luis tem ${2+3} chocolates`
```
isso printaria na tela: luis tem 5 chocolates


Usando template strings para printar mais de uma linha:

Sem template string:
```
console.log('texto string linha 1\n' + 'texto string linha 2\n' + 'outra linha');
```

Com template string:
```
console.log(` texto string linha 1 e isso vai ficar na mesma linha
texto string linha 2
terceira linha
quarta linha
quinta linha
`);
```

Usando template strings para printar variavel dentro da string:

```
const nome = 'Simone'
const frase = `meu nome é ${nome}`

console.log(frase) -> 'meu nome é Simone'

```
sem teplate string:
```
console.log('meu nome é ' + nome);
```
Doc MDN: [Template Strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings)


### Utilizando estrutura de dados e efeitos para modificar o DOM
- ex-arrays-2
- searchComponent
- slider

### Exercício da Semana

[__To do List__](./todolist/readme.md)


### Links
* https://www.freecodecamp.org/learn/
* https://www.cursoemvideo.com/cursos/
* Escopo: https://imasters.com.br/desenvolvimento/escopos-em-javascript
