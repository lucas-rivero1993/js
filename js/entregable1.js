function solicitarNombre(){
    alert("Bienvenidos a FrontendStore\nLa mejor tienda para Devs.");
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    while(nombre === ""){
        nombre = prompt("Ingrese su nombre");
        apellido = prompt("Ingrese su apellido");
    }
    alert(`Futuro Web Developer ${nombre} ${apellido} a la vista. \nBienvenido !!!`);
}

function listadoProductos(){
    let producto;
    do{
        producto = parseInt(prompt("Nuestros productos : \n1)Remeras\n2)Pantalones\n3)Camperas\n4)Camisas\n5)Calzado"))
    }while(producto !=1 && producto !=2 && producto !=3 && producto !=4 && producto !=5)
    switch(producto){
        case 1:
            return "Remeras";
        case 2: 
            return "Pantalones";
        case 3: 
            return "Camperas";
        case 4:
            return "Camisas";
        case 5:
            return "Calzado"
    }
}

function validarPrecio(producto){
    if(producto === "Remeras"){
        return 1500;
    }else if(producto === "Pantalones"){
        return 2500;
    }else if(producto === "Camperas"){
        return 4000;
    }else if(producto === "Camisas"){
        return 3600;
    }else{
        return 5500;
    }
};

function cobrar(producto, precio){
    alert(`Usted esta por comprar ${productoElegido} a tan solo ${precioProducto} $`)
    alert(`Muchas gracias por tu compra !!!`)
};

solicitarNombre();
let productoElegido = listadoProductos();
let precioProducto = validarPrecio(productoElegido);
cobrar(productoElegido, precioProducto);