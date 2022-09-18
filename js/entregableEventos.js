const productos = [
    {
        nombre: "remera1",
        talle: "L",
        precio: 1500,
        id: 1
    },
    {
        nombre: "remera2",
        talle: "M",
        precio: 1500,
        id: 2
    },
    {
        nombre: "remera3",
        talle: "S",
        precio: 1500,
        id: 3
    },
    {
        nombre: "remera4",
        talle: "XL",
        precio: 1500,
        id: 4
    },
    {
        nombre: "remera5",
        talle: "L",
        precio: 1500,
        id: 5
    },
    {
        nombre: "remera6",
        talle: "M",
        precio: 1500,
        id: 6
    }
];

const containerDiv = document.querySelector('.container');
const carritoDiv = document.querySelector('.carrito');

let carrito = [];

function crearCards(){
    productos.forEach(producto=>{
        containerDiv.innerHTML += `<div class="containerDiv">
        <img src="./img/1.jpg" alt="Imagen del producto" class="camisa__imagen">
        <h4>${producto.nombre}</h4>
        <p>$${producto.precio}</p>
        <button class="btnCarrito" id="btn-agregar${producto.id}">Agregar producto</button>
        </div>`
    })
    agregarFunctionAlBoton();
}

function agregarFunctionAlBoton(){
    productos.forEach(producto=>{
        document.querySelector(`#btn-agregar${producto.id}`).addEventListener("click",()=>{
            agregarAlCarrito(producto);
        })
    })
}

function agregarAlCarrito(producto){
    let existe = carrito.some(prod=>prod.id === producto.id);
    if(existe===false){
        producto.cantidad = 1;
        carrito.push(producto);
    }
    else{
        let prodFind = carrito.find(prod=> prod.id===producto.id)
        prodFind.cantidad++;
    }
    console.log(carrito);
}



crearCards();
agregarFunctionAlBoton();