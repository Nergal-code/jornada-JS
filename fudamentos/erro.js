function tratarErroELancar(erro) {
    throw new Error('...')
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
        
    } catch (e) {
        tratarErroELancar(e)

    } finally { // vai sempre rodar mesmo se o código tiver erros
        console.log('final')

    }
}

const obj = { nome: 'Carlos' }
imprimirNomeGritando(obj)