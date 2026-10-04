class Moeda {
    #valor: number;
    #nome: string;

    constructor(nome:string, valor:number) {
        this.#nome = nome;
        this.#valor = valor;
    }

    get valor() {
        return this.#valor;
    }

    get nome() {
        return this.#nome;
    }
}

class Cofrinho {
    #moedas: Moeda[] = [];

    adicionar(m:Moeda) {
        this.#moedas.push(m);
    }

    calcularTotal() {
        return this.#moedas.reduce((somatorio, moeda) => somatorio + moeda.valor, 0);
    }

    serializar() {
        //return JSON.stringify(this.#moedas); //não funciona, pois a classe Moeda tem atributos privados
        return JSON.stringify(this.#moedas.map(m => ({nome: m.nome, valor: m.valor})));
    }
}

const cofre = new Cofrinho();
const m1 = new Moeda("Um Real", 1);
console.log(m1);
cofre.adicionar(m1);
cofre.adicionar(new Moeda("50 Centavos", 0.5));
console.log(cofre.calcularTotal());
console.log(cofre.serializar());