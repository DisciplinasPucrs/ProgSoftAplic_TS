import * as fs from 'node:fs';
import { readFile } from 'node:fs/promises';

//Função síncrona para escrita de arquivos
const obj = {
    nome: 'john doe',
    idade: 22
};
const json = JSON.stringify(obj);
try {
    fs.writeFileSync('dados.json', json);
} catch (error) {
    console.error('Falha de escrita no arquivo');
    console.error((error as Error).name);
    console.error((error as Error).message);
}

//Função assíncrona para leitura de arquivos via callback
console.log('leitura asíncrona via callback');
fs.readFile('dados.json','utf-8', (err,data) => {
    if (err) {
        console.error('Falha de leitura no arquivo');
        console.error((err as Error).name);
        console.error((err as Error).message);
    } else {
        try {
            const obj = JSON.parse(data);
            console.log(obj);
        } catch (error) {
            console.error('Falha na desserialização');
            console.error((error as Error).name);
            console.error((error as Error).message);
        }
    }
});
console.log('fim');

//Função assíncrona para leitura de arquivos via promise
console.log('leitura asíncrona via promise');
readFile('dados.json','utf-8')
    .then(dados => {
        const obj = JSON.parse(dados);
        console.log(obj);
    })
    .catch(error => {
        console.error('Falha de processamento');
        console.error((error as Error).name);
        console.error((error as Error).message);
    })
console.log('fim');

//Função assíncrona para leitura de arquivos via async/await
async function lerArquivo() {
    console.log('leitura asíncrona via async/await');
    try {
        const dados = await readFile('dados.json', 'utf-8');
        const obj = JSON.parse(dados);
        console.log(obj);
    } catch (error) {
        console.error('Falha de processamento');
        console.error((error as Error).name);
        console.error((error as Error).message);
    }
    console.log('fim');
}
await lerArquivo();
