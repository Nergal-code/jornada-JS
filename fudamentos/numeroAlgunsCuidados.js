console.log(7 / 0) // Gera Infinty
console.log("10" / 2) // É possível 😱
console.log('3' + 2) // Concatena pois a String tem preferência. A mesma coisa acontece para o inverso das ordens pois o sinal de '+' tem sentido na concatenação de Strings.
console.log(2 - '3') // Irá fazer a subtração pois, mesmo com preferência, o sinal não faz sentido. Então o sinal de '-' irá substrair.
console.log("10.2" / 2) // Gera um NaN
console.log("Show!" * 2) // Retorna NaN
console.log(0.1 + 0.7) // Não é 100% preciso
console.log((10.5002).toFixed(2))