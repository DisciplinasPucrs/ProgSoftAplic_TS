import axios from 'axios';
import type { AxiosError } from 'axios';
import type { PostDTO_Response } from './postdto.ts';

const urlBase = 'https://jsonplaceholder.typicode.com';
const api = axios.create({
    baseURL: urlBase,
    timeout: 5000,
});
//GET https://jsonplaceholder.typicode.com/posts/1
try {
    const resposta = await api.get<PostDTO_Response>('/posts/1');
    console.log(`GET status:${resposta.status}`);
    const dados = resposta.data;
    console.log(dados);
} catch (error) {
    if (axios.isAxiosError(error)) {
        console.error('Falha de requisição');
        console.error(`Código:${(error as AxiosError).code}`);
        console.error(`GET status:${(error as AxiosError).status}`);
        console.error(`GET statusText:${(error as AxiosError).response?.statusText}`);
    } else {
        console.error(error);
    }
}
