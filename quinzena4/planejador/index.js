
function criarTarefa() {
    let inputTarefa = document.getElementById("tarefa")
    let tarefa = inputTarefa.value
    
    let diaSemana = document.getElementById("dias-semana")
    let dia = diaSemana.value
    
    
    let select = document.getElementById(dia)

    select.innerHTML += `<li>${inputTarefa.value}</li>`
    inputTarefa.value = " "

    if (tarefa == "") {
        alert("Preencha o campo de tarefa")
        
    }
}
function riscarTexto() {
    let valor = document.getElementById("listaTarefas")
    let lista = valor.value
    

    lista.innerHTML += `<s>${valor.value}</s>`
    inputTarefa.value = " "
}
riscarTexto();
