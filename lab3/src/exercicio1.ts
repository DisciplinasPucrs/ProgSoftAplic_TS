class Circulo {
    #raio: number = 1;
    #pontox: number = 0;
    #pontoy: number = 0;

    constructor(r: number = 1, x: number = 0, y: number = 0) {
        this.#raio = r;
        this.#pontox = x;
        this.#pontoy = y;
    }

    get raio() {
        return this.#raio;
    }

    get pontox() {
        return this.#pontox;
    }

    get pontoy() {
        return this.#pontoy;
    }

    calcularArea() {
        return Math.PI * this.#raio**2;
    }

    calcularCircunferencia() {
        return 2 * Math.PI * this.#raio;
    }
}

const c = new Circulo();
console.log(c.raio);
console.log(c.calcularArea());
console.log(c.calcularCircunferencia());
