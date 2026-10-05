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

    *[Symbol.iterator]() {
        for (const moeda of this.#moedas) {
            yield moeda;
        }
    }
    
}

export { Moeda, Cofrinho };
