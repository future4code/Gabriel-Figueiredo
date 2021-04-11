/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


   console.log("Bem vindo ao jogo de Blackjack!")


    let retorno = confirm ("Quer iniciar uma nova rodada?")
    
    if(retorno == true){
       console.log("Vamos iniciar uma nova rodada!")
    }else{
       console.log("O jogo acabou!")
    }
    
    const usuario = comprarCarta()
    const usuario2 = comprarCarta()
    const computador = comprarCarta()
    const computador2 = comprarCarta()
    
    valorUsuario = []
    valorComputador = []
   valorUsuario.push(usuario.valor, usuario2.valor)
   valorComputador.push(computador.valor, computador2.valor)

   

   console.log(usuario.texto);
   console.log(usuario.valor);
   console.log(usuario2.texto);
   console.log(usuario2.valor);
   console.log(computador.texto);
   console.log(computador.valor);
   console.log(computador2.texto);
   console.log(computador2.valor);

   
   
    if (usuario.valor + usuario2.valor === 22) {
       
      const usuario = comprarCarta()
      const usuario2 = comprarCarta() 
         }else if(computador.valor + computador2.valor === 22) {
            
            const computador = comprarCarta()
            const computador2 = comprarCarta()  
      }
   let totalUsuario = valorUsuario[0] + valorUsuario[1]
   console.log("Usuario:",totalUsuario);
   let totalComputador = valorComputador[0] + valorComputador[1]
   console.log("Computador",totalComputador);
   

    
    
    if (totalUsuario > totalComputador) {
       console.log("Usuario vencedor");
    }else if(totalUsuario < totalComputador){
       console.log("Computador vencedor");
    }else{
      console.log("Empataram");
    }
    
    
    



