let funcao = function (a,b){
    return a + b
}

let soma = funcao(1,3)
console.log(soma)

let vetor1 = [function multi(a,b){return a* b}, funcao]

console.log(vetor1[0](2,3))

obj = {}
obj.oi = function ola(){
    return 'Olá galera do DSM!'
}
console.log(obj.oi())

function rect (base, altura){
    let area = base * altura

    if(area > 10){
        console.log(`Valor acima de 10: ${area}`)
    }else{
        return area
    }
}

console.log(rect(2,2))