// par nome / valor
const saudacao = 'Opa' // Contexto léxico 1.

/*
* O JS irá procurar a referência por todo o código caso a varíavel não seja encontrada dentro de seu contexto léxico (escopo).
* Posto isto, não é possível criar a mesma variável com o mesmo nome dentro do mesmo contexto léxico.
*/
function exec() {
    const saudacao = 'Faaala' // Contexto léxico 2.
    return saudacao
}


// Em JS nós podemos ter uma estrutura de dados com aninhamento. O mesmo vale para funções e classes.
const cliente = {
    nome: "Carlos",
    idade: 25,
    peso: 82,
    endereco: {
        rua: "-----------",
        numero: 300
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)