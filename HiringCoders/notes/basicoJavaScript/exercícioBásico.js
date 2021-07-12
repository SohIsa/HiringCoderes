//Exercícios

//FizzBuzz
//Divisível por 3 = Fizz
//Divisível por 5 = Buzz
//Se não for número = Não é um número
//Se não for divisível nem por 3 ou 5 = Entrada

let resultado = fizzBuzz(2);
console.log(resultado)

function fizzBuzz(entrada){
    if (typeof entrada !== "number")
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return ("FizzBuzz");
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    else
        return entrada
}

//Reverse a string

let newString = '';

function reverseAString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
}

let result = reverseAString('Salam')

//Convert Celsius to Fahrenheit

function convertToFahrenheit(value) {
    return value * 1.8 + 32
}

let resu = convertToFahrenheit(100)
console.log(`o valor em Fahrenheit é ${resu}`)