class atacar{
    constructor(tipo, ataque){
        this.tipo = tipo
        this.ataque = ataque
    }
    escrever(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let nomepersonagem = "lorde"
let idade = 34
let classe = "Médico"
let tipoAtaque = "a sua inteligência, mas não foi suficiente e morreu"

if (classe === "Mago"){
    tipoAtaque = "magia"
}else if (classe === "Guerreiro" ){
    tipoAtaque = "espada"
}else if(classe === "Monge"){
    tipoAtaque = "artes marciais"
}else if(classe === "Ninja"){
    tipoAtaque = "shuriken"
}

let personagem1 = new atacar(classe, tipoAtaque)

personagem1.escrever()