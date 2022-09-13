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

const productosVenta = ["remera", "pantalon", "camisa", "calzado"];

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

const ul = document.getElementById('ul-principal');

for (const producto of productosVenta) {
    let li = document.createElement('li')
    li.innerText= producto;
    ul.append(li)
}
