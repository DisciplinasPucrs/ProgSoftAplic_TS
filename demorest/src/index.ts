import { type PostDTO_Request, type PostDTO_Response } from './postdto.ts';

const urlBase = 'https://jsonplaceholder.typicode.com';
//GET https://jsonplaceholder.typicode.com/posts
try {
    const resposta = await fetch(`${urlBase}/posts`);
    if (resposta.ok) {
        console.log(`GET status:${resposta.status}`);
        const dados = await resposta.json() as PostDTO_Response[];
        console.log(dados);
    } else {
        console.error(`GET status:${resposta.status}`);
        console.error(`GET statusText:${resposta.statusText}`);
    }
} catch (error) {
    console.error('Falha de requisição');
    console.error(error);
}
//GET https://jsonplaceholder.typicode.com/posts/1
try {
    const resposta = await fetch(`${urlBase}/posts/1`);
    if (resposta.ok) {
        console.log(`GET status:${resposta.status}`);
        const dados = await resposta.json() as PostDTO_Response;
        console.log(dados);
    } else {
        console.error(`GET status:${resposta.status}`);
        console.error(`GET statusText:${resposta.statusText}`);
    }
} catch (error) {
    console.error('Falha de requisição');
    console.error(error);
}
//POST https://jsonplaceholder.typicode.com/posts
try {
    const obj: PostDTO_Request = {
        title: 'teste',
        body: 'Um teste de envio',
        userId: 1,
    };
    const resposta = await fetch(`${urlBase}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(obj),
    });
    if (resposta.ok) {
        console.log(`POST status:${resposta.status}`);
        console.log(`Location: ${resposta.headers.get('Location')}`);
        const dados = await resposta.json() as PostDTO_Response;
        console.log(dados);
    } else {
        console.error(`POST status:${resposta.status}`);
        console.error(`POST statusText:${resposta.statusText}`);
    }
} catch (error) {
    console.error('Falha de requisição');
    console.error(error);
}
