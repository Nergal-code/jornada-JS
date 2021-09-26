let valor // Não inicializada
console.log(valor)
// console.log(valor2) Da erro pois essa variável não foi nem definida ainda.

valor = null
console.log(valor)

const prod = {}
console.log(prod.preco)
console.log(prod)

prod.preco = 2.5
console.log(prod)

prod.preco = undefined
console.log(!!prod.preco)
//delete prod.preco

console.log(prod)

prod.preco = null
console.log(!!prod.preco)
console.log(prod)