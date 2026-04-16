let edad = 30;
const esMayorEdad = true;
const nombre = "Sergio Rodrigo";
const precio = 99.99;

console.log(nombre, precio, edad);

edad += 5;

console.log(edad);
console.log("suma: ", 5 + 5 );

//&& || !

if(edad >= 18){
    console.log("Mayor de Edad");
}else{
    console.log("Menor de Edad");
}

const frutas = ["Manzana", "Pera", "Naranja", "Fresa"];
frutas.map((fruta)=>{
    console.log(fruta);
});