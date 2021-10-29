// função this e bind

const NPC = {
    saudacao: 'Olá aventureiro!!!',
    oi(){
        console.log(this.saudacao)
    }
}

NPC.oi()

let oi2 = NPC.oi.bind(NPC)

oi2()