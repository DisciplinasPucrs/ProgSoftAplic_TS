class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    area() {
        return Math.PI * this.raio ** 2;
    }

    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
}

export default Circulo;
