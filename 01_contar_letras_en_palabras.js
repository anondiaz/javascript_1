let palabra = "caracola";
let letra = "a";
let cantidad = 0;
for (caracter of palabra) {
  console.log(caracter);
  if (caracter == letra) {
    cantidad++;
  }
}

if (cantidad == 0) {
    console.log(`En la palabra "${palabra}" no aparece la letra "${letra}"`);
} else if (cantidad == 1) {
    console.log(`En la palabra "${palabra}" la letra "${letra}" aparece ${cantidad} vez`);
}else if (cantidad > 1){
    console.log(`En la palabra "${palabra}" la letra "${letra}" aparece ${cantidad} veces`);
}
