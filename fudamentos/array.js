const valores = [7.7, 6.2, 8.1]
console.log(valores)
console.log(valores[2])
console.log(valores[0])
console.log(valores[3])

valores[3] = 9.0
console.log(valores[3])

console.log(valores.length)
console.log(valores.push({id: 3}, null, false, 'Carlos'))

console.log(valores)

console.log(valores.pop())
console.log(valores)

console.log(delete valores[0])
console.log(valores)

console.log(typeof valores)

/*

[ 7.7, 6.2, 8.1 ]
8.1
7.7
undefined
9
4
8
[ 7.7, 6.2, 8.1, 9, { id: 3 }, null, false, 'Carlos' ]
Carlos
[ 7.7, 6.2, 8.1, 9, { id: 3 }, null, false ]
true
[ <1 empty item>, 6.2, 8.1, 9, { id: 3 }, null, false ]
object

*/