const prompt = require("prompt-sync")()

const numeros = []

console.log("Informe os números ou 0 para sair.")
do {
    const x = Number(prompt("Número: "))

    if (x == 0) {
        break
    }
    numeros.push(x)
} while (true)

let contador = 0

console.log("\nPares da lista")
console.log("-".repeat(25))

for (let i = 0; i < numeros.length; i = i + 1) {
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i])
        contador = contador + 1
    }
}

console.log("-".repeat(25))
console.log(`${contador} pares`)

