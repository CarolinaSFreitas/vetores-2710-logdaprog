const prompt = require("prompt-sync")()

// declara os vetores
const nomes = []
const notas = []

let continua

do {
    const x = prompt("Nome do aluno: ")
    const y = Number(prompt("Nota do aluno: "))

    // adiciona aos vetores
    nomes.push(x)
    notas.push(y)

    continua = prompt("Continua (S/N): ").toUpperCase()
} while (continua == "S")

console.log("\nLista de Aprovados")
console.log("-".repeat(30))

for (let i = 0; i < nomes.length; i = i + 1) {
    if (notas(i) >= 7) {
        console.log(`${nomes(i)} - ${notas(i)}`)
    }
}

console.log("\nLista de Reprovados")
console.log("-".repeat(30))

for (let i = 0; i < nomes.length; i = i + 1) {
    if (notas(i) < 7) {
        console.log(`${nomes(i)} - ${notas(i)}`)
    }
}