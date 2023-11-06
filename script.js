var num_aleatorio = Math.floor(Math.random() * 1000) + 1 // Criando variável que irá armazenar um número aleatório para ser adivinhado
var contador = 0 // Inicia-se um contador de tentativas

function verificar_palpite () { // Função responsável por verificar 

    contador++ // Soma um número ao contador
    var num1 = document.getElementById("advinhar").value // Captura o valor colocado no input do HTML e armazena na variável num1
    var num_inteiro = parseInt(num1, 10) // Transforma a variável num1 (string) em um numero inteiro 
    var mensagem_div = document.getElementById("mensagem") // Captura o espaço da div no HTML e armazena na variável mensagem_div

    if(!isNaN(num_inteiro)) { // Nessa estrutura condicional, o código verificar se a variável num_inteiro é um número

        if(num_inteiro > num_aleatorio) { // Será executado se num_inteiro for maior num_aleatorio
            var saida = "Tentativa N° " + contador + " | Seu palpite: " + num1 + " é maior que o número sorteado!"

        } else if(num_inteiro < num_aleatorio) { // Será executado se num_inteiro for menor num_aleatorio
            var saida = "Tentativa N° " + contador + " | Seu palpite: " + num1 + " é menor que o número sorteado!"

        } else { // Será executado se num_inteiro for igual num_aleatorio
            var saida = "Tentativa N° " + contador + " | Seu palpite: " + num1 + " é igual ao número sorteado! Você acertou!"
        }

    } else { // Será executado se o valor inserido no código não for um número
        window.alert("Insira um número inteiro!")
    }

    var paragrafo = document.createElement("p") // Cria um elemento p no HTML e armazena na variável paragrafo
    paragrafo.textContent = saida // Atribui o valor da variável saida (mensagens criadas na estrutura condicional execultada anteriormente)
    mensagem_div.appendChild(paragrafo) // Implementa no HTML o conteudo armazenado na variável paragrafo através da variável mensagem_div
}

document.getElementById("verificar").addEventListener("click", verificar_palpite) // Associa o botão com a função criada anteriormente
