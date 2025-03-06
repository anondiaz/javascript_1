/* Variables javascript */
var numero = 12
console.log(numero, typeof(numero))
numero = 5.5
console.log(numero, typeof(numero))
numero = "uno"
console.log(numero, typeof(numero))
numero= "5.5"
console.log(numero, typeof(numero))
numero = '12'
// console.log(numero, typeof(numero))

let num1 = 1 // let es una variable que se acaba en el código, var es global
let num2 = 2
let n1
const PI = 3.14159  // Se usa const para incializar constantes
 // PI = 6.28  // Esto da error ya que es una constante, 
console.log(PI) // es eso, una constante, no se puede cambiar

// Variable tipo boolean
let llueve = true // false
if  (llueve) {
    // console.log(num1) esto fallará porque no se ha inicializado la variable del tipo let
    let num1 = 100
    console.log("Está lloviendo, coge el paraguas!")
    console.log(num1)
    console.log(numero)
    numero = 45000
} else {
    console.log("No te preocupes, no está lloviendo")
}
console.log(num1)
console.log(numero)
texto = "hola" // no crear variables así, 
let = texto =  "adios"

let diaSemana = "jueves" // Forma recomendada de escribir una variables con JS (CamelCase)
let dia_alternativo = "viernes"  // Forma recomendada de escribir una variables con python (snake_case)

if (diaSemana == "sabado") {
    console.log("Estamos de fin de semana")
} else if (diaSemana == "domingo") {
    console.log("Estamos de fin de semana")
} else if (diaSemana == "jueves") {
    console.log("Dia de paella")
} else {
     console.log("No es ni sabado, ni jueves, ni domingo")
}

//else {
//     console.log("Toca clase")
// }

num2 = 0

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)


    