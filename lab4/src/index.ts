import { Moeda, Cofrinho } from './entidades.ts';
import * as persitencia from './persistencia.ts';

const cofre = new Cofrinho();
cofre.adicionar(new Moeda("Um real", 1));
cofre.adicionar(new Moeda("Cinquenta centavos", 0.5));
cofre.adicionar(new Moeda("Vinte e cinco centavos", 0.25));
try {
    await persitencia.salvarCofrinho(cofre, 'cofre.json');
    console.log('Cofre armazenado com sucesso');
    const cofre2 = await persitencia.lerCofrinho('cofre.json');
    console.log(cofre2.calcularTotal());
} catch (error) {
    console.log('Falha de processamento');
    console.log((error as Error).message);
}
console.log('Fim do programa');
