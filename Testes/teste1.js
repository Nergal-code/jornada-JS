let stringPadrao = 'Carlos'
const stringArrow = concatenacao => 'Meu nome é ' + stringPadrao
const stringArrow2 = () => 'Meu nome é ' + stringPadrao
console.log(stringArrow());
console.log(stringArrow2());

const conteAte10 = 10

let contar = (contarAte) => {
    for (i = 0; i <= contarAte; i++) {
        console.log(i);
    }
}

console.log(contar(conteAte10));


function vamosContarAte10 (conteAte) {
    for (i = 0; i <= conteAte; i++) {
        console.log(i);
    }
}

vamosContarAte10(conteAte10)