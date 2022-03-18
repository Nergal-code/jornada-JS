function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitio: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(3, 5))
console.log(area(2))
console.log(area())
console.log(area(3, 5, 7 , 20))
console.log(area(5, 5))