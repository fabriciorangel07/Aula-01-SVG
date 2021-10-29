
function tempo(){
    this.contador = 0

    setInterval(function(){
        this.contador++
        console.log(this.contador)

    }.bind(this), 1000)
}

new tempo

function tempo2(){
    this.contador = 0
    const self = this
    let teste = setInterval(function(){
        self.contador++
        console.log(self.contador)
        if(self.contador == 10){
            clearInterval(teste)
        }
    }, 1000)
}

new tempo2


let soma = function(a){
    return 2 + a
}



somaArrow = (a) =>{
    return 2 + a
}

console.log(somaArrow(2))

hello = () => 'Hello world!!!'
hello = _ => 'Hello world!!!'

console.log(hello)

function tempo2(){
    this.contador = 0
    const self = this
    let teste = setInterval(()=>{
        self.contador++
        console.log(self.contador)
        if(self.contador == 10){
            clearInterval(teste)
        }
    }, 1000)
}

new tempo2


sub = (x, y) => {return x-y}
som = (x, y) => {return x+y}

resultado = (a, b, operacao = sub) =>{
    console.log(operacao(a,b))
}

resultado(3,4)
resultado(3,4, som)
resultado(3,4,(x,y) => x*y)