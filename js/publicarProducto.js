// const producto1 = {
//     nombre: "remera VueJs",
//     precio: 1500,
//     talle: "L",
// }

// function Producto(nombre,precio,talle){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.talle = talle;
// }


// const producto2 = new Producto("AngularJs",1500,"M")
// const producto3 = new Producto("ReactJs", 1500, "XL")


// console.log(producto2);
// console.log(producto3);

// let ingresoProducto = prompt("Ingresa el nombre del producto a vender");
// let ingresoPrecio = parseInt(prompt("Ingresa el precio del producto a vender"));
// let ingresoTalle = prompt("Ingresa el talle del producto a vender");

// const producto4 = new Producto(ingresoProducto,ingresoPrecio,ingresoTalle);

// console.log(producto4);


// function VenderProducto(){
//     this.nombre = prompt("Ingrese nombre del producto a publicar.");
//     this.precio = parseInt(prompt("Ingrese precio del producto a publicar."));
//     this.talle = prompt("Ingrese talle del producto a publicar.");
//     while( this.nombre === "" && this.precio === "" && this.talle === ""){
//         this.nombre = prompt("Ingrese nombre del producto a publicar.");
//         this.precio = parseInt(prompt("Ingrese precio del producto a publicar."));
//         this.talle = prompt("Ingrese talle del producto a publicar.");
//     }
//     alert(`Futuro Web Developer ${nombre} ${apellido} a la vista. \nBienvenido !!!`);
// }
// VenderProducto();
// console.log(VenderProducto());
function Producto(nombre,precio,talle){

    let productitos = {

        nombre : nombre,
        precio : precio,
        talle : talle,
    }

 

    productitos.nombre = prompt('ingrese el nombre del producto'),
    productitos.precio = prompt('ingresa el precio del producto'),
    productitos.talle =  prompt('ingresa el talle del producto')


    while(productitos.nombre === "" && productitos.precio === "" && productitos.talle === ""){
        alert('completa la informacion del producto.');
        productitos.nombre = prompt('ingrese el nombre del producto'),
        productitos.precio = prompt('ingresa el precio del producto'),
        productitos.talle =  prompt('ingresa el talle del producto')
    }

    console.log(productitos);

}

console.log(Producto());