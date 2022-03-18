function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade) // Ele entende que o this é referente à Pessoa porque o this funciona denrto do contexto léxico.
    }, 1000)
}

new Pessoa