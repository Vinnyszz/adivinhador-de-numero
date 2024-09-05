let statusNumber = document.getElementById('statusNumber')
let pickedNumber = null
let attempts = 0
let userNumber = null
const startBtn = document.getElementById('startBtn')
const tryCount = document.getElementById('tryCount')
const tryButton = document.getElementById('tryBtn')
const min = document.getElementById('minNumber')
const max = document.getElementById('maxNumber')



// Função para inicializar o jogo
function initialize() {
    statusNumber.dataset.status = '1'
    statusNumber.innerText = 'Sem número gerado, clique no "Gerar número"'
    tryCount.innerText = ''
    attempts = 0
    tryButton.disabled = true // Deixa o botão de chute desativado
    // Limpa os campos de entrada
    userNumber.value = null
    min.value = null 
    max.value = null 
}

// Função para gerar um número aleatorio em um intervalo
function genNumber(min, max) {
    min = Math.ceil(min) // Inclue o valor minimo nas possibilidades 
    max = Math.floor(max) // Inclue o valor maximo nas possibilidades
    if (min >= max) {
        alert('O número mínimo deve ser menor que o número máximo.');
        return null; // Retorna null se o intervalo for inválido
    }
    statusNumber.dataset.status = '2'
    tryButton.disabled = false
    return Math.floor(Math.random() * (max - min) + min)
}

// Função para ver se está abaixo ou acima do número sorteado
function verifiyProximity(userGuess) {
    if (userGuess < pickedNumber) {
        alert('Chute muito baixo')
    } else {
        alert('Chute muito alto')
    }
}

// Função para verificar o chute do usuário
function userTry () {
    userNumber = document.getElementById('userNumber')
    // Converte o valor do input para um número
    const userGuess = Number(userNumber.value)

    // Contar número de tentativas
    attempts += 1
    tryCount.innerText = 'Tentativas: ' + attempts

    if (userGuess === pickedNumber) {
        alert(`Parabéns, você acertou o número sorteado, com ${attempts} tentativas!`)
        userNumber.value = null
    } else {
        alert('Número Incorreto, tente novamente!')
        verifiyProximity(userGuess)
        userNumber.value = null
    }
}

// main
const sortNumber = document.getElementById('genNumber')
sortNumber.addEventListener('click', function() {
    pickedNumber = genNumber(min.value, max.value)
    if (pickedNumber !== null) {
        statusNumber.dataset.status = 2
        statusNumber.innerText = `Número sorteado entre ${min.value} e ${max.value}! Tente acertar:`
    } else {
        alert('Entre com um intervalo válido.')
        min.value = null 
        max.value = null 
    }

})

tryButton.addEventListener('click', userTry)

// Botão de inicializar/reiniciar o jogo
startBtn.addEventListener('click', initialize)
