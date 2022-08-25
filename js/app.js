let edad = parseInt(prompt("Ingresa tu edad"));

for(let i=0; i < 3; i++){
    if(edad >= 18){
        console.log(alert ("Tenes edad para adquirir nuestros servicios."));
        break;
    }else{
        console.log(alert("Tenes que ser mayor de edad para alquilar nuestros servicios."));
        break;
    }
}

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

for(let i=0; i < 1; i++){
    console.log(alert("Hola " + nombre + " " + apellido));
}