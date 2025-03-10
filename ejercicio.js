//------------------------------------------
// Arreglo de strings en este caso un nombre compuesto

let nombre = "     mArIA De LoS angELes       "; //Maria de los Angeles
nombre = nombre.trim();
console.log(nombre);
nombre = nombre.split(" ");
console.log(nombre);
let nombreCorregido = "";
let listaPalabrasNombre = [];
// let listaPalabrasNombre = Array()

for (let i = 0; i < nombre.length; i++) {
  //obtener la inicial y pasarla a mayúsculas
  let inicial = nombre[i].at(0).toLocaleUpperCase();
  console.log(inicial);
  //obtenemos el resto de las letras y los pasamos a minusculas
  let restoNombre = nombre[i].slice(1).toLocaleLowerCase();
  console.log(restoNombre);
  //vamos a reconstruir el nombre
  let nombreFinal = inicial + restoNombre;
  console.log(nombreFinal);
  if (
    nombreFinal == "De" ||
    nombreFinal == "Los" ||
    nombreFinal == "Las" ||
    nombreFinal == "El" ||
    nombreFinal == "La"
  ) {
    nombreFinal = nombreFinal.toLocaleLowerCase();
    console.log(nombreFinal);
  }
  console.log(nombreFinal);

  listaPalabrasNombre.push(nombreFinal);
  console.log(listaPalabrasNombre);

  //acumular las palabras
  // nombreCorregido += nombreFinal + " "
}

console.log(listaPalabrasNombre);

nombreCorregido = listaPalabrasNombre.toLocaleString().replaceAll(",", " ");
// nombre = nombreCorregido.trim()
console.log(nombreCorregido);

//------------------------------------------
// Arreglo y ordenación de fechas

let fechaNacimiento = "5/1/2025"; // >> "2025-10-03" "AAAA-MM-DD"
// Separamos los valores
let fecha = fechaNacimiento.split("/");
// fecha.length()
console.log(fecha);
// Añadimos un 0 delante si solo tiene un digito
for (let i = 0; i < 2; i++) {
  if (fecha[i].length == 1) {
    fecha[i] = "0" + fecha[i];
  }
}

fecha = fecha[2] + "-" + fecha[1] + "-" + fecha[0];
console.log(fecha);

//------------------------------------------
// ANAGRAMAS
// Dos palabras son anagramas si utilizan
// las mismas letras en orden diferente. Por ejemplo:
// amor ramo
// // Obtener esta salida
// Las palabras "amor" y "ramo" son anagramas
// Las palabras "amor" y "patata" no son anagramas

const palabra1 = "amor";
const palabra2 = "roma";
const palabra3 = "patata";
const palabra4 = "mora";

let caracteres01 = palabra1.split("").sort().join();
console.log(caracteres01);
let caracteres02 = palabra2.split("").sort().join();
console.log(caracteres01);
let caracteres03 = palabra3.split("").sort().join();
console.log(caracteres01);
let caracteres04 = palabra4.split("").sort().join();
console.log(caracteres01);

// divido la palabra en los caracteres, se crea un array
let caracteres1 = palabra1.split("");
console.log(caracteres1);
// ordeno los caracteres dentro del array
caracteres1 = caracteres1.sort();
console.log(caracteres1);
// uno los caracteres para poder comparar los strings
caracteres1 = caracteres1.join();
console.log(caracteres1);

let caracteres2 = palabra3.split("");
console.log(caracteres2);
caracteres2 = caracteres2.sort();
console.log(caracteres2);
caracteres2 = caracteres2.join();
console.log(caracteres2);

// valido que la comparación es correcta
// console.log(caracteres1 == caracteres2);

// realizo la comparación de los strings con los caracteres ordenados
if (caracteres1 == caracteres2) {
  //si es correcto muestro el mensaje de OK
  console.log("Las palabras " + palabra1 + " y " + palabra2 + " son anagramas");
  console.log(`Las palabras ${palabra1} y ${palabra2} son anagramas`);
} else {
  //si no es correcto muestro el mensaje de KO
  console.log(
    "Las palabras " + palabra1 + " y " + palabra3 + " no son anagramas"
  );
  console.log(`Las palabras ${palabra1} y ${palabra3} no son anagramas`);
}

//------------------------------------------
// PALINDROMOS
// Averiguar si un texto es un palindromo
// -- ignorar los espacios
// -- ignorar mayusculas/minusculas
// -- ignorar tildes

let string = "dabale arroz a la zorra el abad";

// metodo Ferran
let stringLimpio =string.split(" ").join("")
console.log(stringLimpio);
let stringInvertido = stringLimpio.split("").reverse().join("")
console.log(stringInvertido);
// hasta aquí

let frase1 = string.split(" ");
console.log(frase1);
frase1 = frase1.join();
console.log(frase1);
frase1 = frase1.replaceAll(",", "");
console.log(frase1);
frase1 = frase1.split("");
console.log(frase1);
frase1 = frase1.join();
console.log(frase1);

// convertimos en un array separando por " "
let fraseInvertida = string.split(" ");
console.log(fraseInvertida);
// unimos las palabras en un string
fraseInvertida = fraseInvertida.join();
console.log(fraseInvertida);
// sustituimos las "," por "" así obtenemos la cadena de caracteres toda seguida
fraseInvertida = fraseInvertida.replaceAll(",", "");
console.log(fraseInvertida);
// separamos los caracteres en un array
fraseInvertida = fraseInvertida.split("");
console.log(fraseInvertida);
// invertimos los caracteres
fraseInvertida = fraseInvertida.reverse();
console.log(fraseInvertida);
// invertimos los caracteres
fraseInvertida = fraseInvertida.join();
console.log(fraseInvertida);

// realizo la comparación de los strings, el original y el invertido
if (frase1 == fraseInvertida) {
  //si es correcto muestro el mensaje de OK
  console.log(`La frase "${string}" es un palindromo`);
} else {
  //si no es correcto muestro el mensaje de KO
  console.log(`La frase "${string}" no es un palindromo`);
}

//------------------------------------------
// TRADUCTOR DE DIAS
//

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

const days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const diaElegido = "Martes" // Tuesday

for (i =  0; i < dias.length; i++ ) {
    console.log(dias[i]);
    if (diaElegido == dias[i]){
        console.log("OK");
        console.log(days[i]);
        break
    } 
}

console.log(days[dias.indexOf(diaElegido)])