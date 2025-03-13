// CONTAR SEGUNDOS

const preguntaSegundos = 7275

// A dias : B horas : C minutos : D segundos

// PISTA:

const num = 4.75
console.log(parseInt(num));

let horasDia = 24
let segundosDia = 86400
let minutosHora = 60
let segundosMinuto = 60
let segundosHora = 3600

let horas = parseInt(( preguntaSegundos / 60 ) / 60 )
let horasS = parseInt(horas * segundosHora)
let segundosR = preguntaSegundos - horasS
let minutos = parseInt((preguntaSegundos - (horas * segundosHora))/60)
let segundos = parseInt((preguntaSegundos - (horas * segundosHora)))

// console.log(diasR);
console.log(horasS);
console.log(horas);
console.log(minutos);
console.log(segundos);
console.log(horasDia * segundosHora);


