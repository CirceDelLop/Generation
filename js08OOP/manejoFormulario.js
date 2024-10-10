import {saludo} from "./src/componentes/saludo.js";
import {isValid} from "./src/componentes/userValidation.js";
import {postUser} from "./src/componentes/postUser.js";
import {mostrarEnConsolaASteve} from "./src/componentes/objetos.js";
import {jugarConMascotas} from "./src/componentes/mascotasCh46.js";

const register=document.forms["register-form"];//Solo sirve para formularios

// register.addEventListener( "submit" , ()=> {} );
register.addEventListener("submit", (event)=>
{
    event.preventDefault();
    console.log( event ); 
    console.log("Atendiendo al formulario");
    // Leer los inputs del formulario
    const newUser=
    {
        firstName: register.elements["firstName"].value,
        lastName: register.elements["lastName"].value,
        email: register.elements["email"].value,
        password: register.elements["password"].value,
        checkbox: register.elements["gridCheck"].checked
        
    }

    console.table(newUser);

    if(isValid(newUser))
    {
        postUser(newUser);//Enviar datos al servidor
    }
});

console.log(saludo("burrito"));
//mostrarEnConsolaASteve();
jugarConMascotas();