//Exercicio 1
function imprimirParesWhile() {
    let inicio = 0;
    const fim = 10;
    while (inicio <= fim) {
        if (inicio % 2 == 0) {
            console.log(inicio);
        }
        inicio++;
    }
}
//imprimirParesWhile();

function imprimirParesFor(inicio: number, fim: number) {
    for (let valor = inicio; valor <= fim; valor++) {
        if (valor % 2 == 0) {
            console.log(valor);
        }
    }
}
//imprimirParesFor(0,10);

//Exercicio 2
function exercicio2() {
    let i = 0;
    while (i != 10) { //loop infinito
        console.log(i);
        i += 0.2;
    }
}
//exercicio2();

//Exercicio 3
function min(x: number, y: number): number {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
//const m = min(10,5);
//console.log(m);

//Exercicio 4
function powrec(x: number, y: number): number {
    if (y == 0) {
        return 1;
    }
    return x * powrec(x, y-1);
}
//console.log(powrec(2,10));

function pow(x: number, y: number) {
    let resultado = 1;
    for (let i = 0; i < y; i++) {
        resultado *= x;
    }
    return resultado;
}
//console.log(pow(2,10));

//Exercicio 5
function toMaiusculaPrimeira(s: string) {
    //return s.charAt(0).toUpperCase() + s.slice(1);
    return s[0].toUpperCase() + s.substring(1);
}
//console.log(toMaiusculaPrimeira('teste'));

//Exercicio 6
function getMax(array: number[]): number {
    let maior = array[0];
    for (let valor of array) {
        console.log(`${valor} > ${maior} = ${valor > maior}`);
        if (valor > maior) {
            maior = valor;
        }
    }
    return maior;
}
//let numeros: number[] = [];
//numeros.length = 5;
//console.log(getMax(numeros)); //problema!!!

//Exercicio 7
function frequencia(array: number[]): Map<number,number> {
    const tabela = new Map<number,number>();
    array.forEach(numero => {
        if (!tabela.has(numero)) {
            tabela.set(numero,1);
        } else {
            const contagemAtual = tabela.get(numero);
            tabela.set(numero, contagemAtual!+1);
        }
    });
    return tabela;
}
//console.log(frequencia([1,2,3,1,2,0]));

function frequenciaV2(array: number[]): Map<number,number> {
    return array.reduce(
        (tabela, numero) => tabela.set(numero, (tabela.get(numero)||0) + 1),
        new Map<number,number>()
    );
}
console.log(frequenciaV2([1,2,3,1,2,0]));
