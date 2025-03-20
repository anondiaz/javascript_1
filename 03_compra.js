const bricksLeche = 3
const precioBrickLeche = 1.25

// console.log(`El importe a pagar es: ${bricksLeche * precioBrickLeche}`);

const articulo = [bricksLeche, precioBrickLeche]

// console.log(`El importe a pagar es: ${articulo[0] * articulo[1]}`);

const articulos = ["leche", "huevos", "sal", "harina", "azucar"]
const cantidades = [2, 1, 1, 3, 1]
const precios = [1.25, 3.25, .9, .78, 1.5]

let totalCompra = 0
console.log(`Has realizado la compra de:`);
for (let i = 0; i < articulos.length; i++) {
    // console.log(articulos[i]);
    // console.log(cantidades[i]);
    // console.log(precios[i]);
    let parcialCompra = (cantidades[i] * precios[i])
    totalCompra += parcialCompra
    let mensaje = `${articulos[i]}: ${cantidades[i]} x ${precios[i]} = ${parcialCompra} €`
    console.log(mensaje);
    
    
}
console.log(`El total de la compra asciende a: ${totalCompra} €`);

let carroCompra = []
let articuloComprado = {}

articuloComprado = {nombreProducto : "leche", cantidad : 2, precio : 1.25}
carroCompra.push(articuloComprado)
console.log(carroCompra);

articuloComprado = {nombreProducto : "huevos", cantidad : 1, precio : 3.25}
carroCompra.push(articuloComprado)
console.log(carroCompra);

articuloComprado = {nombreProducto : "sal", cantidad : 1, precio : .9}
carroCompra.push(articuloComprado)
console.log(carroCompra);

// articuloComprado = {nombreProducto : "harina", cantidad : 3, precio : .78}
// articuloComprado = {nombreProducto : "azucar", cantidad : 1, precio : 1.5}

for (producto of carroCompra) {
    let parcialCompra = producto['cantidad'] * producto['precio']
    let textoCompraParcial = `${producto['nombreProducto']} : ${producto['cantidad']} x ${producto['precio']} = ${parcialCompra} €`
    console.log(textoCompraParcial)

}

