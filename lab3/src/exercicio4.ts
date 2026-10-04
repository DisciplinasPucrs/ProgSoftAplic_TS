abstract class Cliente {
    #nome:string;

    constructor(nome:string) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }

    abstract get mensalidade():number;
}

class ClienteFisico extends Cliente {
    #idade:number;
    #salario:number;

    constructor(nome:string, idade:number, salario:number) {
        super(nome);
        this.#idade = idade;
        this.#salario = salario;
    }

    get idade() {
        return this.#idade;
    }

    set idade(valor) {
        this.#idade = valor;
    }

    get salario() {
        return this.#salario;
    }

    set salario(valor) {
        this.#salario = valor;
    }

    get mensalidade() {
        if (this.#idade < 60) return this.#salario * 0.1;
        else return this.#salario * 0.15;
    }
}

class ClienteJuridico extends Cliente {
    #mensalidade:number;

    constructor(nome:string, mensalidade:number) {
        super(nome);
        this.#mensalidade = mensalidade;
    }

    get mensalidade() {
        return this.#mensalidade;
    }

    set mensalidade(valor) {
        this.#mensalidade = valor;
    }
}

class CadastroClientes {
    #clientes: Cliente[] = [];

    adicionar(cliente:Cliente) {
        this.#clientes.push(cliente);
    }

    listar():string {
        return this.#clientes.map(cliente => `${cliente.nome} - R$ ${cliente.mensalidade.toFixed(2)}`).join("\n");
    }
}

const cadastro = new CadastroClientes();
const cliente1 = new ClienteFisico("João", 30, 3000);
const cliente2 = new ClienteFisico("Maria", 65, 4000);
const cliente3 = new ClienteJuridico("Empresa X", 5000);
cadastro.adicionar(cliente1);
cadastro.adicionar(cliente2);
cadastro.adicionar(cliente3);
console.log(cadastro.listar());
