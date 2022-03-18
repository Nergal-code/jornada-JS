let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Retorno implicito caso a função só tenha 1 argumento
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' 
ola = _ => 'Olá' // possui sim um param
console.log(ola())