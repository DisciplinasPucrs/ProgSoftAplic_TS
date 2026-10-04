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

    valorMenorMoeda() {
        return this.#moedas.reduce((menor, moeda) => moeda.valor < menor ? moeda.valor : menor, Infinity);
    }

    menorMoeda() {
        return this.#moedas.reduce((menor, moeda) => moeda.valor < menor.valor ? moeda : menor, this.#moedas[0]!);
    }

    calcularFrequencia() {
        return this.#moedas.reduce(
            (tabela, moeda) => tabela.set(moeda.nome, (tabela.get(moeda.nome)||0) + 1),
            new Map<string,number>()
        );
    }
}

const cofre = new Cofrinho();
cofre.adicionar(new Moeda("Um Real", 1));
cofre.adicionar(new Moeda("50 Centavos", 0.5));
console.log(cofre.calcularTotal());
console.log(cofre.valorMenorMoeda());
console.log(cofre.menorMoeda());
console.log(cofre.calcularFrequencia());
