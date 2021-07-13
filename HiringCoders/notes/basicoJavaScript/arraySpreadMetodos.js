//array

const alunasGama =['paula', 'maria', 'estela']
console.log(alunasGama[2])

//operador spread (...)

const alunasXp = [...alunasGama,'Isa']
console.log(alunasXp)

//metodos de iteração

// for (let i = 0; i < alunasXp.length; i++){
//     console.log(alunasXp)
// }

//metodo show
//MAP

alunasXp.map(aluna => console.log(aluna))

//Filter
const numeros = [25,16,65,78,49,72]

const numerosImpares = numeros.filter(numeros => numeros % 2 != 0)
console.log(numerosImpares)

const numerosOrdenados = numeros.sort()
console.log(numerosOrdenados)
const numerosOrdenadosDecrescente = numeros.sort((a,b) => (b-a))
console.log(numerosOrdenadosDecrescente)

//Reduce - reduz o array ao resultado de uma operação matemática

const soma = numeros.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
},5)
console.log(soma) //,5 = 310