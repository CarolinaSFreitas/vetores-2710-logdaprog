const prompt = require("prompt-sync")()

// declara os vetores produtos e precos

const produtos = []
const precos = []

console.log("Lista de Compras da Semana")
console.log("-".repeat(40))

let continua
let total = 0


do {
    const x = prompt("Produto: ")
    const y = Number(prompt("Preço R$: "))

    // adiciona o nome dos produtos e os preços ao final dos vetores//
    produtos.push(x)
    precos.push(y)

    total = total + y

    continua = prompt("Continua (S/N): ").toUpperCase()
} while (continua == "S")

console.log("-".repeat(40))

// produtos.length retorna o tamanho do vetor
for (let i = 0; i < produtos.length; i = i + 1) {
    console.log(`${produtos[i].padEnd(20)} ${precos[i].toFixed(2).padStart(10)}`)
}

console.log("-".repeat(40))
console.log(`${"Total".padEnd(20)} ${total.toFixed(2).padStart(10)}`)

