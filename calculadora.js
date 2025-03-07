let num1 = 5
let num2 = 3
let operacion = "+"
if (operacion == "/"){
    console.log(num1, operacion, num2, "=", num1/num2);
}else if (operacion == "*") {
    console.log(num1, operacion, num2, "=", num1*num2);
}else if (operacion == "+") {
    console.log(num1, operacion, num2, "=", num1+num2);
}else if (operacion == "-") {
    console.log(num1, operacion, num2, "=", num1-num2);
}else {
    console.log("No hay un operando valido");   
}


/* Operaciones matematicas:
+ sumar
- restar
* multiplicar
/ dividir
** elevar a un exponente
mod = % el resto de la división (modulo)
+= suma el valor a la variable
+= resta el valor a la variable
++ para incrementar el valor de la variable en 1
-- para decrementar el valor de la variable en 1


*/

operacion = "**"
console.log(num1, operacion, num2, "=", num1**num2);

operacion = "mod"
console.log(num1, operacion, num2, "=", num1%num2);

let num3 = 7
num3 = num3+1
num3 += 1
num3++
num3 -= 1
num3--

console.log(num3);

let num4 = 25
num4 = num4**0.5 // para hacer una raiz cuadrada

console.log(num4);
operacion = "+"

switch (operacion) { // si operacion coincide con el simbolo accede al case

    case "+" :
        console.log(num1, operacion, num2, "=", num1+num2);
        break
    case "-" :
        console.log(num1, operacion, num2, "=", num1-num2);
        break
    case "*" :
        console.log(num1, operacion, num2, "=", num1*num2);
        break
    case "/" :
        console.log(num1, operacion, num2, "=", num1/num2);
        break
}

