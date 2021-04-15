// Exercícios de análise

/* EXERCÍCIO 01
Verifica se o número é par
*/

/* EXERCÍCIO 02
a. Insere uma fruta e imprime o preço dela
b. O preço da fruta Maçã é R$2.25
c. O preço da fruta Pera é R$5.5 O preço da fruta Pera é R$5
*/

/* EXERCÍCIO 03
a. usuario digita um valor que é convertido para number e salvo na variavel
b. Esse número passou no teste e nada
c. Sim pois mensagem está em um escopo filho e não é possível acessá-la no escopo pai
*/


// Exercícios de código

// EXERCÍCIO 04
/*const idade = Number(prompt("Qual é sua idade?"))
if (idade >= 18){
    console.log("Pode dirigir")
} else {
    console.log("Não pode dirigir")
}*/

// EXERCÍCIO 05
/*const periodo = prompt("Insira o período em que estuda (m,v,n)").toLowerCase()
if (periodo === "m"){
    console.log("Bom Dia!")
} else if (periodo === "v") {
    console.log("Boa Tarde!")
} else if (periodo === "n"){
    console.log("Boa Noite!")
} else {
    console.log("Erro")
}*/

// EXERCÍCIO 06
/*const periodo = prompt("Insira o período em que estuda (m,v,n)").toLowerCase()
switch (periodo){
    case "m":
        console.log("Bom Dia!")
        break
    case "v":
        console.log("Boa Tarde!")
        break
    case "n":
        console.log("Boa Noite!")
        break
    default:
        console.log("Erro")
        break
}
*/

// EXERCÍCIO 07
/*const genero = prompt("Digite o genero do filme")
const preco = Number(prompt("Digite o preço do ingresso"))

if (genero === 'fantasia' && preco <= 15){
    console.log("Vamo que vamo")
} else {
    console.log("Vou dar banho no meu peixe")
}*/

// Desafios Extras

// DESAFIO 01
/*const genero = prompt("Digite o genero do filme")
const preco = Number(prompt("Digite o preço do ingresso"))

if (genero === 'fantasia' && preco <= 15){
    const snack = prompt("Escolha um snack")
    console.log("Bom filme com", snack)
} else {
    console.log("Vou dar banho no meu peixe")
}*/

/* DESAFIO 02
const nome = prompt('Digite seu nome')
const tipo = prompt('[IN]ternacional ou [DO]mestico')
const etapa = prompt('Semi-final [SF], Decisão Terceiro [DT] ou Final [FI]?')
const categoria = Number(prompt('Categoria 1, 2, 3 ou 4?'))
const quantidade = Number(prompt("Quantidade de ingressos?"))

let textoTipo 

switch (tipo) {
    case "IN":
        textoTipo = "Internacional"
        break;
    case "DO":
        textoTipo = "Doméstico"
        break;
    default:
        textoTipo = "Erro"
        break;
}

let textoEtapa 

switch (etapa) {
    case "SF":
        textoEtapa = "Semi-Final"
        break;
    case "DT":
        textoEtapa = "Decisão Terceiro"
        break;
    case "FI":
        textoEtapa = "Final"
        break;
    default:
        textoEtapa = "Erro"
        break;
}

let precoUnitario = 0
let precoTotal = 0

switch (etapa) {
    case "SF":
        switch (categoria) {
            case 1:
                precoUnitario = 1320
                break;
            case 2:
                precoUnitario = 880
                break;
            case 3:
                precoUnitario = 550
                break;
            case 4:
                precoUnitario = 220
                break;
            default:
                precoUnitario = 0
                break;
        }
        break;
    case "DT":
        switch (categoria) {
            case 1:
                precoUnitario = 660
                break;
            case 2:
                precoUnitario = 440
                break;
            case 3:
                precoUnitario = 330
                break;
            case 4:
                precoUnitario = 170
                break;
            default:
                precoUnitario = 0
                break;
        }
        break;
    case "FI":
        switch (categoria) {
            case 1:
                precoUnitario = 1980
                break;
            case 2:
                precoUnitario = 1320
                break;
            case 3:
                precoUnitario = 880
                break;
            case 4:
                precoUnitario = 330
                break;
            default:
                precoUnitario = 0
                break;
        }
        break;
    default:
        break;
}

precoTotal = precoUnitario * quantidade

let precoUnitarioTexto
let precoTotalTexto

if (tipo === "IN"){
    precoTotal = precoTotal * 4.1
    precoUnitario = precoUnitario * 4.1
    precoUnitarioTexto = `U$${precoUnitario}`
    precoTotalTexto = `U$${precoTotal}`
} else {
    precoUnitarioTexto = `R$${precoUnitario}`
    precoTotalTexto = `R$${precoTotal}`
}


console.log("---Dados da compra---")
console.log("Nome do cliente:", nome)
console.log("Tipo do jogo:", textoTipo)
console.log("Etapa do jogo:", textoEtapa)
console.log("Categoria: ", categoria)
console.log("Quantidade de Ingressos:", quantidade, "ingressos")
console.log("---Valores--- ")
console.log("Valor do ingresso:", precoUnitarioTexto)
console.log("Valor total:", precoTotalTexto)*/


// exercicio de Funções

// 1-

// a- Sera impresso o resultado da multiplicaçao de 2 * 5 e 10 * 5
// b- Não sera impresso no console o resultado


// 2-


// b- Sera impresso amanda e caio pois os indices sao menores que 2 


// 3-


// 4-

// a-
/*function sobreMim() {
    console.log("Eu sou Gabriel, tenho 35 anos, moro em Patrocinio Paulista, São paulo e sou estudante!");
}
sobreMim()*/

// b-

/*function sobreMim(nome, idade, cidade, verdadeiro) {
    
        console.log("Eu sou", nome , "tenho", idade , "anos", "moro em" , cidade , "e" , verdadeiro , "estudante");   
    }
   

sobreMim("Gabriel", 35, "Patrocinio Paulista", "sou");*/

// 5-

// a-

/*function soma(n1, n2) {
    resultado = n1 + n2
    console.log(resultado);
}
soma(12, 16)*/

// b-

/*function resultado(numero1, numero2) {
    if (numero1 >= numero2) {
        console.log("verdadeiro");
    }else{
        console.log("falso");
    }
}
resultado(8, 7)*/

// c-

/*function mensagem(fruta) {
   for(let i=0; i < 10; i++) {
    console.log(fruta);
   }
}
mensagem("maça")*/

// 6-

// a-

/*const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function quantidadeArray(params) {
   console.log(array.length); 
}
quantidadeArray()*/

// b-

/*let verdadeiro = "par"
let falso = "impar"

function numero(n1) {
    if (n1 %2 ===0) {
        console.log(verdadeiro);
    }else{
        console.log(falso);
    }
}
numero(9)*/

// c-


/*const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function numeroPar() {
    
   for (let i = 0; i < array.length; i++) {

    if (array[i] %2 === 0) {
        console.log( array[i],"par");

    }else{
        
    }
      
    
   }
}
numeroPar()*/

// d-

function numeroPar(array) {
    
   
}  
numeroPar([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])




