import { area, circunferencia as circ } from './circulo_funcoes.ts';
import Circulo from './circulo_classe.ts';

console.log(area(10));
console.log(circ(10));

const circulo = new Circulo(10);
console.log(circulo.area());
console.log(circulo.circunferencia());
