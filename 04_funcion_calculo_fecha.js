// Vamos a tener dos fechas
// Una sera la de nacimiento de la persona "13-03-2000"
// La fecha de referencia "13-03-2025"
// Mostrar la edad de la persona en la fecha de referencia

// function fecha (fechaNacimiento, fechaReferencia) {
    
//     // resto la cantidad de años -1
//     // en el ultimo año hay que tener en cuenta el mes y el dia en el que estamos o de referencia
//     // resto la cantidad de meses sabiendo que el máximo son 12 meses del año -1
//     // cuento la cantidad de meses de la fecha de Referencia
//     // resto o cuento la cantidad de dias desde el dia 1 del mes

//     console.log()
//     return ()
// }

const fechaNacimiento = "13-03-2000"
const fechaReferencia1 = "13-03-2025"
const fechaReferencia2 = "12-02-2025"
const fechaReferencia3 = "11-04-2025"

const fechaReferencia = fechaReferencia1

let diaNacimiento = parseInt(fechaNacimiento.split("-")[0])
let diaReferencia = parseInt(fechaReferencia.split("-")[0])
let diferenciadias = diaReferencia - diaNacimiento

let mesNacimiento = parseInt(fechaNacimiento.split("-")[1])
let mesReferencia = parseInt(fechaReferencia.split("-")[1]) - 1
let diferenciaMeses = mesReferencia - mesNacimiento

let anoNacimiento = parseInt(fechaNacimiento.split("-")[2])
let anoReferencia = parseInt(fechaReferencia.split("-")[2]) - 1
let diferenciaAnos = anoReferencia - anoNacimiento

if (diferenciadias == 0) {
    console.log(diferenciaDias);
    diferenciaMeses++
}
console.log(diferenciaMeses);

if (diferenciaMeses == 0) {
    console.log(diferenciaMeses);
    diferenciaAnos++
}
console.log(diferenciaAnos);





