/*
Dado un número:
const numero = 12

Indicar si es primo o no
    -- Si lo es: "El numero X es primo"
    -- Si no lo es: "El numero X no es primo"

Un numero primo es un número entero que solo es divisible por si mismo y por la unidad

*/
const numero = 13
for (let i = 1 ; numero >= i ; i++ ){
    let division = numero/i
    if (division != numero){
        console.log("No es primo")
    } else {
        console.log("Es primo")
    }

}