// Exercícios de interpretação de código //

/*

1. 

false
false
true
boolean

2.

a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 11

*/

// Exercícios de escrita de código //

/*

1.

let idade = Number(prompt("Qual a sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu amigo?", idade > idadeMelhorAmigo)

let diferenca = idade - idadeMelhorAmigo
console.log(diferenca)

2.

const numeroPar = prompt("Insira um número par: ")

console.log(numeroPar % 2)

// Para todos os números pares, vai ser impresso 0
// Para números ímpares, vai ser impresso 1


3.

let listaDeTarefas = []
let tarefa1 = prompt("Digite a tarefa 1: ")
listaDeTarefas.push(tarefa1)

let tarefa2 = prompt("Digite a tarefa 2: ")
listaDeTarefas.push(tarefa2)

let tarefa3 = prompt("Digite a tarefa 3: ")
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indice = prompt("Digite o índice da tarefa que você já realizou: ")
listaDeTarefas.splice(indice)

console.log(listaDeTarefas)


4.

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu e-mail?")

console.log("O e-mail ", emailDoUsuario, " foi cadastrado com sucesso. Seja bem-vinda(o), ", nomeDoUsuario)

*/


// 1-

/*const respostaDoUsuario = prompt("Digite o número que você quer testar") // digitei 10.
const numero = Number(respostaDoUsuario) // a resposta do usuario foi 10 entao o numero vai ser 10.

if(numero % 2 === 0) { // o resto de 10 é 0.
  console.log("Passou no teste.")// entao sera impresso passou no teste
} else {
  console.log("Não passou no teste.")
}*/

// 2-

// a- o codigo serve quando não for comparação, ou seja analisar apenas um produto
// b- o preço da fruta maça é R$ 2,25
// c- acredito que não encerraria o programa e ia executando os proximos

// 3-

// a- a primeira linha esta perguntando para o usuario um numero
// b- se tivesse digitado 10 a mensagem seria "esse numero passou no teste" pois 10 é maior que 0, se fosse -10 não ia aparecer nada pois o codigo não esta completo falta o else e o console.log com a mensagem que seria um numero menor que 0
// c - sim existira um erro pois let mensagem foi declarada em um bloco diferente

// 4- 

/*let idadeUsuario = Number(prompt("Qual é a idade do Usuario?"))
let idadeMinima = 18

if(idadeUsuario >= 18){
    console.log("Você pode dirigir!")
}else{
    console.log("Você não pode dirigir!")
}*/

// 5-

/*let turno = prompt("Digite o periodo que você estuda M(matutino), N(noturno), V(vespertino?")

let manha = "m"
let tarde = "v"
let noite = "n"

if(turno === manha){
    console.log("Bom dia!");
    }else if(turno === tarde){
        console.log("Boa tarde!");
    }else{
    console.log("Boa noite!");
}*/


// 6 - 

/*let turno = prompt("Digite o periodo que você estuda M(matutino), N(noturno), V(vespertino?")

switch (turno) {
    case "m":
        console.log("manha");
        break;
    case "n":
        console.log("noite");
        break;
    case "v":
        console.log("tarde");
        break;
    default:
        console.log("outra opçao");
        break;
}*/


// 7-


/*let genero = prompt("Qual é o genero de filme que quer assistir?")
let preco = Number(prompt ("Qual valor do ingresso do filme?"))
let comprar = prompt ("Que snack vai comprar: Chocolate, bala, pipoca ?")

let filme = "acao"
let valor = 15
let snack = [ "chocolate", "bala", "pipoca" ]


if(genero === filme & preco <= valor & snack[0] === comprar){
    console.log("Bom filme com ", comprar);
}else{
    console.log("Escolha outro filme");
}*/

// 

let nome = prompt("Dgite seu nome?")
let tipo = prompt("Digite o tipo de jogo: internacional ou domestico?")
let etapaJogo = prompt("Digite a etapa do jogo: semifinal ou final?")
let categoria = prompt ("Digite a categoria: 1, 2, 3, 4?")
let quantidade = prompt("Digite a quantidade de ingressos:")

console.log("nome do clinete:"+ nome + "tipo de jogo:" + tipo );