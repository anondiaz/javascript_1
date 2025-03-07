/*
Dado un número:
const numero = 12

Indicar si es primo o no
    -- Si lo es: "El numero X es primo"
    -- Si no lo es: "El numero X no es primo"

Un numero primo es un número entero que solo es divisible por si mismo y por la unidad
El primer número primo es 2
Todos las numeros pares son divisibles entre 2 y no son primos salvo 2 ya que cumple las condiciones

*/
const numero = 3527 // Establecemos el numero a evaluar
let esPrimo = true // Establecemos el valor por defecto de la variable $esPrimo en "true", de esta forma si en el bucle no sucede nada ya tenemos el valor correcto
                   // De otra forma sería una variable vacia y no obtendriamos el resultado esperado
for (let i = 2 ; i < numero ; i++ ){ // Definimos la forma de actuar del bucle, establecemos $i en "2" ya que es el primer numero primo y no es necesario comprobar 0 ni 1
                                     // Ejecutaremos el bucle mientras $numero sea mayor que $i, el bucle acabará cuando $i sea $numero - 1
                                     // En cada pasada aumentaremos el valor de $i en 1
    if (numero % i == 0){ // Ponemos un condicional para evaluar lo siguiente, si $numero mod $i es igual a 0.
                                                       // Lo que buscamos con esto es que se realicen todas las divisiones de $numero entre 2 y el $numero - 1
        console.log(`El numero ${numero} no es primo`) // Si en algún momento esa división da 0 sabemos que no es un numero primo ya que se habrá dividido por 
        esPrimo = false                                // algún número entre 2 y $numero - 1 y no cumple la condición para ser un número primo
                                                       // En ese caso sacamos el mensaje e introducimos "false" en la variable $esPrimo
        break                                          // Salimos del if con el break y pasamos al siguiente valor de $i hasta que lleguemos al máximo, esto del break quiero preguntarlo
    }                                                  // Se realizarán todas las divisiones hasta finalizar y si ha habido algún positivo tendremos "false" en la variable $esPrimo
}                                                      // Cuando no se cumple la condición en ninguna operacion $esPrimo sigue siendo "true"
if (esPrimo) {                                      // Si al finalizar el bucle la variable $esPrimo, tiene "true" significa que el numero es primo
    console.log( `El numero ${numero} es primo`);   // y entonces se ejecuta el siguiente código indicando que $numero es primo
}                                                   // Si $esPrimo es "false" no entramos en el condicional y no se ejecuta el código y finaliza el programa
                                                    //