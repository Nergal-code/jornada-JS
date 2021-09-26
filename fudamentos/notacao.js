console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Bola"
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // Torna ele público para outros contextos léxicos.
    this.exec = function() {
        console.log("Exec....")
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2)
console.log(obj3)
//console.log(obj2.exec())
obj2.exec()