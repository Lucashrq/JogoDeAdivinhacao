var num_aleatorio = Math.floor(Math.random() * 1000) + 1
var contador = 0
 
function verificar_palpite () {

    contador++
    var num1 = document.getElementById("advinhar").value
    var num_inteiro = parseInt(num1, 10)
    var mensagem_div = document.getElementById("mensagem")

    if(!isNaN(num_inteiro)) {
        if(num_inteiro > num_aleatorio) {
            var saida = "Seu palpite: " + num1 + " é maior que o número sorteado!"
        } else if(num_inteiro < num_aleatorio) {
            var saida = "Seu palpite: " + num1 + " é menor que o número sorteado!"
        } else {
            var saida = "Seu palpite: " + num1 + " é igual ao número sorteado! Você acertou!"
        }
    } else {
        window.alert("Insira um número inteiro!")
    }

    var paragrafo = document.createElement("p")
    paragrafo.textContent = saida
    mensagem_div.appendChild(paragrafo)
}

document.getElementById("verificar").addEventListener("click", verificar_palpite)
