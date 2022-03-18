const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x -y
}) // Ele começou a usar a função passada no terceiro parametro. Substituindo a função soma passada como padrão.

imprimirResultado(3, 4, (x, y) => x * y) // Mesma coisa de cima só que com arrow function.

const pessoa = {
    falar: function () {
        console.log('Opa');
    }
}

pessoa.falar()