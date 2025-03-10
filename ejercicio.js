let nombre = "     mArIA De LoS angELes       "; //Maria de los Angeles
nombre = nombre.trim();
console.log(nombre);
nombre = nombre.split(" ");
console.log(nombre);
let nombreCorregido = ""
let listaPalabrasNombre = []
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

  listaPalabrasNombre.push(nombreFinal)
  console.log(listaPalabrasNombre);

//acumular las palabras
  // nombreCorregido += nombreFinal + " "

}

console.log(listaPalabrasNombre);

nombreCorregido = listaPalabrasNombre.toLocaleString().replaceAll(",", " ")
// nombre = nombreCorregido.trim()
console.log(nombreCorregido);


//-----------------------------------


let fechaNacimiento = "5/1/2025" // >> "2025-10-03" "AAAA-MM-DD"
// Separamos los valores
let fecha = fechaNacimiento.split("/")
// fecha.length()
console.log(fecha);
// Añadimos un 0 delante si solo tiene un digito
for ( let i = 0; i < 2; i++) {
    if ( fecha[i].length == 1 ) {
        fecha[i] = "0" + fecha [i]
    }

}

fecha = fecha[2]+"-"+fecha[1]+"-"+fecha[0]
console.log(fecha)


//---------------------------------------


// ANAGRAMAS
// Dos palabras son anagramas si utilizan
// las mismas letras en orden diferente. Por ejemplo:
// amor ramo

const palabra1 = "amor"
const palabra2 = "roma"
const palabra3 = "patata"

// Obtener esta salida
// Las palabras "amor" y "ramo" son anagramas
// Las palabras "amor" y "patata" no son anagramas

let caracteres1 = palabra1.split("")
console.log(caracteres1);
caracteres1 = caracteres1.sort().join()
console.log(caracteres1);

let caracteres2 = palabra2.split("")
console.log(caracteres2);
caracteres2 = caracteres2.sort().join()
console.log(caracteres2);

// let resultado = 
console.log((caracteres1 == caracteres2))


// for( let i = 0; i < caracteres1.length; i++ ) {
    if(caracteres1 == caracteres2) {
        console.log("Las palabras " + palabra1 + " y " + palabra2 + " son anagramas");
    } else {
        console.log("Las palabras " + palabra1 + " y " + palabra2 + "no son anagramas");
    }
// }
