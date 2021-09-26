let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
console.log("")

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)
console.log("")

isAtivo = 0
console.log(!!isAtivo)
console.log(!isAtivo)
console.log("")

console.log("Os Verdadeiros são:")
console.log(!!'Texto')
console.log(!!' ')
console.log(!!1)
console.log(!!-1)
console.log(!!33)
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log("//////////////////")

console.log("Os Falsos são:")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log("Para finalizar...")
console.log(!!('' || null || undefined || " "))

const nome = "Carlos"
console.log(nome || "Desconhecido")