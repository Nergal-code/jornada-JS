const cliente = {
    nome: "Carlos",
    idade: 25,
    peso: 82,
    endereco: {
        rua: "-----------",
        numero: 300
    }
}

const { nome, idade } = cliente
console.log(nome, idade)

const { nome: n, idade: i} = cliente
console.log(n, i)

const { sobrenome, bemHumorado = true } = cliente
console.log(sobrenome, bemHumorado)

const { endereco: { rua, numero, teste } } = cliente
console.log(rua, numero, teste)