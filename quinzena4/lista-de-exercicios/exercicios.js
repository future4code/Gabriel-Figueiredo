//Exercício 1

function inverteArray(array) {
   array.reverse()
   return array
  // implemente sua lógica aqui
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
    let elevado = [] 
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
      
         let resultado = array[i] * array[i]
         elevado.push(resultado)
      }     
   }
   return elevado
   // implemente  sua lógica aqui
}

//Exercício 3

function retornaNumerosPares (array) {
   let parArray = []
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         let valor = array[i]
         
         parArray.push(valor)
         
      }
       
   }
   return parArray
   // implemente sua lógica aqui
}

//Exercício 4

function retornaMaiorNumero(array) {
   let numeroMaior = [0]
   for (let i = 1; i < array.length; i++) {
       if (array[i] > numeroMaior) {
          numeroMaior = array[i]
       }
   }
   return numeroMaior
   // implemente sua lógica aqui
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   for (let i = 0; i < array.length; i++) {
      
   }
   return array.length
   // implemente sua lógica aqui
}

//Exercício 6

function retornaExpressoesBooleanas() {
   
   let respostas =[]
   const booleano1 = true
   const booleano2 = false
   const booleano3 = true
   const booleano4 = false
      
   if (booleano1 && booleano2 && !booleano4) {
      respostas.push(true)
   }else{
      respostas.push(false)
   }
   if((booleano1 && booleano2) || (!booleano3)){
      respostas.push(true)
      
   }else{
      respostas.push(false)
   }
   if ((booleano2 || booleano3) && (booleano4 || booleano1) ){
      respostas.push(true)    
   }else{
      respostas.push(false)
   }
   if (!(booleano2 && booleano3) || !(booleano1 && booleano3) ) {
      respostas.push(true)    
   }else{
      respostas.push(false)
   }
   if (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)) {
      respostas.push(true)   
   }else{
      respostas.push(false)
   }
   
   return respostas
   // implemente sua lógica aqui
}

//Exercício 7
function retornaNNumerosPares(n) {
   let numero = []
   for (let i = 0; i < 9; i++) {
      if (i % 2 === 0) {  
         let pares = i  
         numero.push(pares)
      }    
   }
   return numero
   // implemente sua lógica aqui
}
// Exercício 8

function checaTriangulo(a, b, c) {

      if ((a === b) && (b === c)) {
         return "Equilátero";
      }else if ((a === b) || (b === c) || (a === c)) {
         return "Isósceles";
      }else{
         return "Escaleno";    
      } 
  // implemente sua lógica aqui
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  const numero = {

  } 
  if (num1 > num2) {
     numero.maiorNumero = num1
  }else{
     numero.maiorNumero = num2
  }
if (num2 % num1 === 0) {
   numero.maiorDivisivelporMenor = true
}else{
   numero.maiorDivisivelporMenor = false
}
const resto = num2 - num1
numero.diferenca = resto

return numero
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   const novoArray = []
   novoArray.push(50, 2)
   return novoArray
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   const arrayCrescente = []

   arrayCrescente.push(-40, -1, 2, 5, 5, 10, 13, 20, 49, 70)
   return arrayCrescente
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {

   const filmeFav = {

   }
   filmeFav.nome = "O Diabo Veste Prada"
   filmeFav.ano = 2006
   filmeFav.diretor = "David Frankel"
   filmeFav.atores = ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   
   return filmeFav
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
    
   const filmeFav = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"] 
   }
   
   return `Venha assistir ao filme ${filmeFav.nome}, de ${filmeFav.ano}, dirigido por ${filmeFav.diretor} e estrelado por ${filmeFav.atores[0]}, ${filmeFav.atores[1]}, ${filmeFav.atores[2]}, ${filmeFav.atores[3]}.`
    
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const dadosRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: (2 *(lado1 + lado2)),
      area: (lado1 * lado2)
      
   }
   return dadosRetangulo
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   const novoObjeto = {
      nome: "ANÔNIMO",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }
   return novoObjeto
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A
let arrayMaiorIdade = []
function maioresDe18(arrayDePessoas) {
   
   arrayMaiorIdade = arrayDePessoas.filter((pessoa) => {
   if (pessoa.idade >= 18) {       
        return arrayMaiorIdade.push(pessoa)
        
   }
   
})

return arrayMaiorIdade
   // implemente sua lógica aqui
}

// Exercício 16, letra B
let arrayMenorIdade = []
function menoresDe18(arrayDePessoas) {
   arrayMenorIdade = arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade <= 18) {
        return arrayMenorIdade.push(pessoa) 
         
      }
      
   })
   return arrayMenorIdade 
   // implemente sua lógica aqui
}

// Exercício 17, letra A
let arrayMultiplicar = []
function multiplicaArrayPor2(array) {
   arrayMultiplicar = array.map(numero => {
      return (numero * 2) 
   })
return arrayMultiplicar

   // implemente sua lógica aqui
}

// Exercício 17, letra B
let arrayDeS = []
function multiplicaArrayPor2S(array) {
arrayDeS = array.map(numero => {
   return (numero * 2) .toString()
})
return arrayDeS
  // implemente sua lógica aqui
}

// Exercício 17, letra C
let arrayParImpar = []
function verificaParidade(array) {
   
   arrayParImpar = array.map((numero) => {
      if (numero % 2 === 0) {
         return `${numero} é par`
      }else{
         return `${numero} é ímpar` 
      }
      
   })
   return arrayParImpar
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A
let pessoaPermitida = []
function retornaPessoasAutorizadas() {
   let nomePessoa = [
      { nome: "Paula", idade: 12, altura: 1.8},
      { nome: "João", idade: 20, altura: 1.3},
      { nome: "Pedro", idade: 15, altura: 1.9},
      { nome: "Luciano", idade: 22, altura: 1.8},
      { nome: "Artur", idade: 10, altura: 1.2},
      { nome: "Soter", idade: 70, altura: 1.9}
    ]
    for (let i = 0; i < nomePessoa.length; i++) {
       const pessoa = nomePessoa[i];
       if ((pessoa.altura > 1.5) & (pessoa.idade > 14) & (pessoa.idade < 60)) {
         pessoaPermitida.push(pessoa)  
       } 
    }    
    return pessoaPermitida
   // implemente sua lógica aqui
}


// Exercício 18, letra B
let pessoasNaoAutorizada = []
function retornaPessoasNaoAutorizadas() {
   let nomePessoa = [
      { nome: "Paula", idade: 12, altura: 1.8},
      { nome: "João", idade: 20, altura: 1.3},
      { nome: "Pedro", idade: 15, altura: 1.9},
      { nome: "Luciano", idade: 22, altura: 1.8},
      { nome: "Artur", idade: 10, altura: 1.2},
      { nome: "Soter", idade: 70, altura: 1.9}
    ]
    for (let i = 0; i < nomePessoa.length; i++) {
       const pessoa = nomePessoa[i];
       if ((pessoa.altura < 1.5) || (pessoa.idade < 14) || (pessoa.idade > 60)) {
        pessoasNaoAutorizada.push(pessoa)

       }
       
    }  
    return pessoasNaoAutorizada  
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta() {
   const consultas = [
      { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
      { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
      { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
      { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
      ]
      
  // implemente sua lógica aqui
}

//Exercício 20



function atualizaSaldo() {
   const contas = [
      { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
      { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
      { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
      { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
      { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
      { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]
    contas.forEach(conta => {
       let totalCompras = 0
       conta.compras.forEach((valor ) => {
         totalCompras += valor
       })
       conta.saldoTotal -= totalCompras
    })
    return contas
  // implemente sua lógica aqui
}
