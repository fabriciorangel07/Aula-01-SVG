
let cliente = false

let resp = cliente ? (idade > 18 ? 'R$ 3,00' : 'R$1,50') : 'R$ 10,00'

if (cliente === true){
    if (idade > 18){
        resp = 'R$ 3,00'
    }else{
        resp = 'R$1,50'
    }
}else{
    resp = 'R$ 10,00'
}

let testPi = Math.PI > 4 ? "sim" : "Não"
console.log(`Pi é maior que 4? ${testPi}`)

function parOuImpar (n){
    return n = n%2 === 0 ? "é par" : "é ímpar"

}

console.log(`O número 1 ${parOuImpar(1)}`)