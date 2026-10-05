import * as fs from 'node:fs/promises';
import { Moeda, Cofrinho } from './entidades.ts';

async function salvarCofrinho(cofrinho: Cofrinho, nomeArquivo: string) { 
    const json = JSON.stringify([...cofrinho].map((m) => ({ valor: m.valor, nome: m.nome })));
    return fs.writeFile(nomeArquivo, json);
}

async function lerCofrinho(nomeArquivo: string) {
    const json = await fs.readFile(nomeArquivo, 'utf8');
    const obj = JSON.parse(json) as Moeda[];
    const cofrinho = new Cofrinho();
    obj.forEach((m) => cofrinho.adicionar(new Moeda(m.nome, m.valor)));
    return cofrinho;
}

export { salvarCofrinho, lerCofrinho };
