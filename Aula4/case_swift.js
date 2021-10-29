
let num1 = 10, num2 = 7
let op = '**'

switch(op){
    case '+':
        console.log(`A soma dos números é: ${num1 + num2}`)
        break

    case '-':
        console.log(`A subtração dos número é: ${num1 - num2}`)
        break

    case '/':
        console.log(`A divisão dos números é: ${num1 / num2}`)
        break

    case '*':
        console.log(`A multiplicação dos números é: ${num1 * num2}`)
        break
    
    default:
        console.log("Não é uma operação valida")
}