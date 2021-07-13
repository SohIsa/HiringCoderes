//objetos - coleção de informações

const pessoa = {
    nome: "Isa",
    idade: 27,
    cidade: "Nazaré da Mata"
}

//notação de ponto
console.log(pessoa.nome)

//notação de colchetes
console.log(pessoa['idade'])

//Como DESESTRUTURAR objetos

const {nome, idade, cidade} = pessoa
console.log(cidade)

const filmes = [
    {
        id: 1,
        titulo: "Us",
        descricao: "terror",
    },
    {
        id: 2,
        titulo: "Corra",
        descricao: "credo"
    }
]

const [{id, titulo, descricao}] = filmes
filmes.map(filmes => console.log(filmes.descricao))