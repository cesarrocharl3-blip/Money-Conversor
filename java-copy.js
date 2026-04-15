
const button = document.querySelector(".button1")
//const input = document.querySelector(".input1")

// toFixed(2) deixa com 2 casas decimais

const selectToConvert = document.querySelector(".c1")
const selectConvert = document.querySelector(".c2")


function convertValue() {

    const inputValue = document.querySelector(".input1").value
    const valorToConvert = document.querySelector(".coin2")
    const valorConvert = document.querySelector(".coins2")
    const dolarToday = 5.20
    const euroToday = 5.90
    const libraToday = 6.50
    const pesoToday = 0.006
    const bitcoinToday = 300000

    // ====== PRIMEIRO SELECT: MOEDA DE ORIGEM ======
    // Variável intermediária que vai guardar o valor sempre em Reais
    let valorEmReal = inputValue;

    if (selectToConvert.value == "dolar1") {
        valorToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        })

            .format(inputValue)
        valorEmReal = inputValue * dolarToday // Lado esquerdo SEMPRE MULTIPLICA
    }
    if (selectToConvert.value == "real1") {
        valorToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

            .format(inputValue)
        valorEmReal = inputValue * 1
    }
    if (selectToConvert.value == "euro1") {
        valorToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        })

            .format(inputValue)
        valorEmReal = inputValue * euroToday
    }
    if (selectToConvert.value == "libra1") {
        valorToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        })

            .format(inputValue)
        valorEmReal = inputValue * libraToday
    }
    if (selectToConvert.value == "peso1") {
        valorToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        })

            .format(inputValue)
        valorEmReal = inputValue * pesoToday
    }
    if (selectToConvert.value == "bitcoin1") {
        valorToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC", minimumFractionDigits: 7
        })
            .format(inputValue)

        valorEmReal = inputValue * bitcoinToday
    }

    // ====== SEGUNDO SELECT: MOEDA DE DESTINO ======
    if (selectConvert.value == "dolar2") {
        valorConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        })

            .format(valorEmReal / dolarToday) // Lado direito SEMPRE DIVIDE
    }
    if (selectConvert.value == "real2") {
        valorConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

            .format(valorEmReal) // Real / 1
    }
    if (selectConvert.value == "euro2") {
        valorConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        })

            .format(valorEmReal / euroToday)
    }
    if (selectConvert.value == "libra2") {
        valorConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        })

            .format(valorEmReal / libraToday)
    }
    if (selectConvert.value == "peso2") {
        valorConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        })

            .format(valorEmReal / pesoToday)
    }
    if (selectConvert.value == "bitcoin2") {
        valorConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC", minimumFractionDigits: 7
        })

            .format(valorEmReal / bitcoinToday)
    }
}

function change2() {
    const coinsName = document.querySelector(".coins1")
    const coinsImg = document.querySelector(".coins")

    if (selectConvert.value == "dolar2") {
        coinsName.innerHTML = "US$ Dólar Americano"
        coinsImg.src = "./assets/dolar4.png"
    }

    if (selectConvert.value == "euro2") {
        coinsName.innerHTML = "€ Euro"
        coinsImg.src = "./assets/euro4.png"
    }

    if (selectConvert.value == "real2") {
        coinsName.innerHTML = "R$ Real Brasileiro"
        coinsImg.src = "./assets/real4.png"
    }

    if (selectConvert.value == "libra2") {
        coinsName.innerHTML = "£ Libra Esterlina"
        coinsImg.src = "./assets/libra4.png"
    }

    if (selectConvert.value == "peso2") {
        coinsName.innerHTML = "$ Peso Argentino"
        coinsImg.src = "./assets/pesos4.png"
    }

    if (selectConvert.value == "bitcoin2") {
        coinsName.innerHTML = "₿ Bitcoin"
        coinsImg.src = "./assets/bitcoin4.png"
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
        coinImg.src = "./assets/dolar4.png"
    }

    if (selectToConvert.value == "euro1") {
        coinName.innerHTML = "€ Euro"
        coinImg.src = "./assets/euro4.png"
    }

    if (selectToConvert.value == "real1") {
        coinName.innerHTML = "R$ Real Brasileiro"
        coinImg.src = "./assets/real4.png"
    }

    if (selectToConvert.value == "libra1") {
        coinName.innerHTML = "£ Libra Esterlina"
        coinImg.src = "./assets/libra4.png"
    }

    if (selectToConvert.value == "peso1") {
        coinName.innerHTML = "$ Peso Argentino"
        coinImg.src = "./assets/pesos4.png"
    }

    if (selectToConvert.value == "bitcoin1") {
        coinName.innerHTML = "₿ Bitcoin"
        coinImg.src = "./assets/bitcoin4.png"
    }

    convertValue()
}

selectConvert.addEventListener("change", change2)

button.addEventListener("click", convertValue)

selectToConvert.addEventListener("change", change1)