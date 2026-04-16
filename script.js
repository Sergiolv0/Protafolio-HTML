
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

//document.getElementById("formulario-contacto")
//.addEventListener("click",function(e){
// console.log("Holaa Hicieron clicl en el formulario");
//})


document.getElementById("formulario-contacto")
.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("escucho un evento submit");
    console.log(nombre.value);
    console.log(correo.value);
    console.log(mensaje.value);
    Swal.fire({
        title: "Te registraste correctamente!",
        text: "Tus datos se registraron bien!",
        icon: "success"
        });
})

