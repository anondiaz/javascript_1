let diaSemana = "matres"

switch (diaSemana) {
    case "lunes" :
    case "martes" :
    case "miercoles" :
    case "jueves" :
    case "viernes" :
        console.log(diaSemana, "No es festivo");
        break
    case "sabado" :
    case "domingo" :
        console.log(diaSemana, "Es fin de semana");
        break
    default :
    console.log(diaSemana, "Dia desconocido");
}