function Producto(nombre,precio,talle){

    let productoPublicado = [];

    let productitos = {

        nombre : nombre,
        precio : precio,
        talle : talle,
    }

    productitos.nombre = prompt('Ingrese el nombre del producto a publicar.'),
    productitos.precio = prompt('Ingrese el precio del producto a publicar.'),
    productitos.talle =  prompt('Ingrese el talle del producto a publicar.')


    while(productitos.nombre === "" && productitos.precio === "" && productitos.talle === ""){
        alert('Completa la informacion del producto a publicar.');
        productitos.nombre = prompt('Ingrese el nombre del producto a publicar.'),
        productitos.precio = prompt('Ingrese el precio del producto a publicar.'),
        productitos.talle =  prompt('Ingrese el talle del producto a publicar.')
    }
    alert(`El producto ${productitos.nombre} tendra un precio de ${productitos.precio} y hay stocken en talle ${productitos.talle}`);
    alert(`Te informamos que cobramos un 15% de interes en la publicación de productos.`);

    productoPublicado.push(productitos);

    console.log(productitos);
    console.log(productoPublicado);

    let precioConIva = productoPublicado.map(producto =>{
        return {
            nombre: productitos.nombre,
            precio: productitos.precio * 1.25,
            talle: productitos.talle
        };
    });

    console.log(precioConIva);
}

console.log(Producto());