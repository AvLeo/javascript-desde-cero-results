function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
    let contador = 0;
    for (let i = 0; i < phrase.length; i++) {
        if(phrase[i] === 'a' || phrase[i] === 'e' || phrase[i] === 'i' || phrase[i] === 'o' || phrase[i] === 'u'){
            contador++
        }else if(phrase[i] === 'A' || phrase[i] === 'E' || phrase[i] === 'I' || phrase[i] === 'O' || phrase[i] === 'U'){
            contador++
        }
    }
    return contador
}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
// Tu código:👇
    let aux = divisor
    while(aux <= dividendo){
        if(dividendo % aux === 0) return aux
        aux++
    }
}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
    for (let i = 0; i <= 100; i++) {
        if(x === i) return "El numero X es: " + i
    }
}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
    let contador = 0;
    for (let i = 0; i <= num; i++) {
        contador += i;
    }
    return contador
}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a decimal
// tu código:👇
    let rBinario = num.split("").reverse()
    let aux = 0;
    let decimal = 0;
    while(aux < rBinario.length){
        decimal += rBinario[aux] * 2 **aux
        aux++
    }
    return decimal
}

function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇
    if (n <= 1) return n;

    return Fibonacci(n-1) + Fibonacci(n-2);
}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
    for (let i = 2; i < numero; i++) {
        if(numero % 2 === 0) return numero + " no es primo."
    }
    return numero + " es primo."
}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
    let rCadena = cadena.split("").reverse()
    return rCadena.join('')
}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}