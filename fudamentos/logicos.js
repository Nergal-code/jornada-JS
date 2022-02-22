function compras(trabalho1, trabalho2) {
    const comprarSorvetes = trabalho1 || trabalho2 // Se o primeiro for verdadeiro, ele irá ignorar o valor do segundo
    const comprarTv50 = trabalho1 && trabalho2 // Os dois precisam ser verdadeiros
    
//    const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvetes

    return { comprarSorvetes, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))