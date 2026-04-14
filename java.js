
const button = document.querySelector(".button1")
//const input = document.querySelector(".input1")

// toFixed(2) deixa com 2 casas decimais

const selectToConvert = document.querySelector(".c1")
const selectConvert = document.querySelector(".c2")


function convertValue() {
    // PASSO 1: Pegar o valor que o usuário digitou na tela
    const inputValue = document.querySelector(".input1").value


    // PASSO 2: Achar ONDE vamos escrever a resposta no HTML.
    // Usamos o querySelector para achar a 'classe' certa, e guardamos na memória.
    // Aqui nós AINDA NÃO formatamos nada, só avisamos "ei JS, olhe para a coin2 e a coins2".
    const valorToConvert = document.querySelector(".coin2")
    const valorConvert = document.querySelector(".coins2")


    // PASSO 3: Fazer a conta
    const dolarToday = 5.20
    const euroToday = 5.90
    const libraToday = 6.50
    const pesoToday = 0.006
    const bitcoinToday = 300000

    // PASSO 5: Adicionando as outras opções de conversão
    if (selectConvert.value == "dolar2") {
        valorConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (selectConvert.value == "euro2") {
        valorConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (selectConvert.value == "real2") {
        valorConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }

    if (selectConvert.value == "libra2") {
        valorConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }

    if (selectConvert.value == "peso2") {
        valorConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValue / pesoToday)
    }

    if (selectConvert.value == "bitcoin2") {
        valorConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 7
        }).format(inputValue / bitcoinToday)
    }

    // PASSO 4: Colocar os resultados NA TELA (.innerHTML) com formatação.
    // Aqui juntamos quem vai receber o texto (valorToConvert.innerHTML) com a ferramenta que formata para dinheiro (new Intl.NumberFormat).


}

function change2() {
    const coinsName = document.querySelector(".coins1")
    const coinsImg = document.querySelector(".coins")

    if (selectConvert.value == "dolar2") {
        coinsName.innerHTML = "US$ Dólar Americano"
        coinsImg.src = "./assets/dolar 4.png"
    }

    if (selectConvert.value == "euro2") {
        coinsName.innerHTML = "€ Euro"
        coinsImg.src = "./assets/euro 4.png"
    }

    if (selectConvert.value == "real2") {
        coinsName.innerHTML = "R$ Real Brasileiro"
        coinsImg.src = "./assets/real 4.png"
    }

    if (selectConvert.value == "libra2") {
        coinsName.innerHTML = "£ Libra Esterlina"
        coinsImg.src = "./assets/libra 4.png"
    }

    if (selectConvert.value == "peso2") {
        coinsName.innerHTML = "$ Peso Argentino"
        coinsImg.src = "./assets/pesos 4.png"
    }

    if (selectConvert.value == "bitcoin2") {
        coinsName.innerHTML = "₿ Bitcoin"
        coinsImg.src = "./assets/bitcoin 4.png"
    }

    // Essa função são das imagens, esse código chama a função de conversão NUMÉRICA sempre que trocar a 
    // moeda no SELECT para atualizar o valor na mesma hora!
    convertValue()
}

function change1() {
    const coinName = document.querySelector(".coin1")
    const coinImg = document.querySelector(".coin")

    if (selectToConvert.value == "dolar1") {
        coinName.innerHTML = "US$ Dólar Americano"
        coinImg.src = "./assets/dolar 4.png"
    }

    if (selectToConvert.value == "euro1") {
        coinName.innerHTML = "€ Euro"
        coinImg.src = "./assets/euro 4.png"
    }

    if (selectToConvert.value == "real1") {
        coinName.innerHTML = "R$ Real Brasileiro"
        coinImg.src = "./assets/real 4.png"
    }

    if (selectToConvert.value == "libra1") {
        coinName.innerHTML = "£ Libra Esterlina"
        coinImg.src = "./assets/libra 4.png"
    }

    if (selectToConvert.value == "peso1") {
        coinName.innerHTML = "$ Peso Argentino"
        coinImg.src = "./assets/pesos 4.png"
    }

    if (selectToConvert.value == "bitcoin1") {
        coinName.innerHTML = "₿ Bitcoin"
        coinImg.src = "./assets/bitcoin 4.png"
    }

    convertValue()
}

selectConvert.addEventListener("change", change2)

button.addEventListener("click", convertValue)

selectToConvert.addEventListener("change", change1)