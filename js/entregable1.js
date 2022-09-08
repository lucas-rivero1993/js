// function solicitarNombre(){
//     alert("Bienvenidos a FrontendStore\nLa mejor tienda para Devs.");
//     let nombre = prompt("Ingrese su nombre");
//     let apellido = prompt("Ingrese su apellido");
//     while(nombre === ""){
//         nombre = prompt("Ingrese su nombre");
//         apellido = prompt("Ingrese su apellido");
//     }
//     alert(`Futuro Web Developer ${nombre} ${apellido} a la vista. \nBienvenido !!!`);
// }

// function listadoProductos(){
//     let producto;
//     do{
//         producto = parseInt(prompt("Nuestros productos : \n1)Remeras\n2)Pantalones\n3)Camperas\n4)Camisas\n5)Calzado"))
//     }while(producto !=1 && producto !=2 && producto !=3 && producto !=4 && producto !=5)
//     switch(producto){
//         case 1:
//             return "Remeras";
//         case 2: 
//             return "Pantalones";
//         case 3: 
//             return "Camperas";
//         case 4:
//             return "Camisas";
//         case 5:
//             return "Calzado"
//     }
// }

// function validarPrecio(producto){
//     if(producto === "Remeras"){
//         return 1500;
//     }else if(producto === "Pantalones"){
//         return 2500;
//     }else if(producto === "Camperas"){
//         return 4000;
//     }else if(producto === "Camisas"){
//         return 3600;
//     }else{
//         return 5500;
//     }
// };

// function cobrar(producto, precio){
//     alert(`Usted esta por comprar ${productoElegido} a tan solo ${precioProducto} $`)
//     alert(`Muchas gracias por tu compra !!!`)
// };

// solicitarNombre();
// let productoElegido = listadoProductos();
// let precioProducto = validarPrecio(productoElegido);
// cobrar(productoElegido, precioProducto);

function solicitarNombre() {
    alert("Bienvenidos a FrontendStore\nLa mejor tienda para Devs.");
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    while (nombre === "" && apellido === "") {
        nombre = prompt("Ingrese su nombre");
        apellido = prompt("Ingrese su apellido");
    }
    alert(`Futuro Web Developer ${nombre} ${apellido} a la vista. \nBienvenido !!!`);
}

solicitarNombre();

const productosDisponibles = [
    { nombre: "Remera", precio: 1500 },
    { nombre: "Pantalon", precio: 2000 },
    { nombre: "Camisa", precio: 2500 },
    { nombre: "Calzado", precio: 3000 },
];

let carrito = [];

let seleccion = prompt('Desea comprar algun producto?')

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor responde si queres comprar o no.")
    seleccion = prompt("Desea comprar alguno de nuestros productos?")
}

if (seleccion === "si") {
    alert("Ahora te compartiremos la lista de los productos disponibles")

    let todosLosProductos = productosDisponibles.map(producto => `El producto ${producto.nombre} tiene un valor  de ${producto.precio}\n`);

    alert(todosLosProductos.join(""));
} else if (seleccion == "no") {
    alert("Gracias por pasar, hasta la proxima ! ")
}

while (seleccion != "no") {
    let producto = prompt("Agrega al carrito el producto que gustes.")
    let precio = 0

    if (producto === "remera" || producto === "pantalon" || producto === "camisa" || producto === "calzado") {
        switch (producto) {
            case "remera":
                precio = 1500
                break
            case "pantalon":
                precio = 2000
                break
            case "camisa":
                precio = 2500
                break
            case "calzado":
                precio = 3000
                break
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades queres?"))

        carrito.push({ producto, unidades, precio })
    } else {
        alert("No tenemos ese producto.")
    }

    seleccion = prompt("Queres agregar mas productos?")

    while (seleccion === "no") {
        alert("Gracias por la compra.")
        carrito.forEach(carritoFinal => console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades} total a pagar ${carritoFinal.unidades * carritoFinal.precio}`))
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total a pagar por su compra es : ${total}`);
console.log(`El total a pagar por su compra es : ${total}`);