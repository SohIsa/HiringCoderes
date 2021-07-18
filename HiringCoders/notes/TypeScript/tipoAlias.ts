type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNasc: Date;
}

// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: "isa",
    sobrenome: "alves",
    dataNasc: new Date()
}, {
    nome: 'asi',
    sobrenome: 'guerra',
    dataNasc: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log('nome do funcionário: ', funcionario.nome)
    }
}

// nulos ou opcionais
let altura:number | null = 1.6
altura = null;  // se n for por aquele |null seria necessário mexer em tsconfig

type Contato = {
    nome: string;
    telefone: string;
    telefone2?: string;     // ? tipo a mesmas coisa la de cima
}
const contato: Contato = {
    nome: "isa",
    telefone: '465465464',
}

//Type Assertion
//const input = document.getElementById("id") as HTMLInputElement;   //as HTMLInputElement; faz com q o ts aceite o input e value uma vez q sabemos existe um value no html
//or
const input = <HTMLInputElement>document.getElementById("id");
console.log(input.value);