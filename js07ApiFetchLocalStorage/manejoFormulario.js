//Obtener referencia del formulario
//const registrer=document.getElementById("register-form");
//const register=document.querySelector("#register-form");
const register=document.forms["register-form"];//Solo sirve para formularios

/** AddEventListener permite agregar funciones que se ejecutarán en respuesta a un evento específico que ocurre aun elemento del DOM.
 * register.addEventListener( type  , fncCallback );
 * Con addEvenListener podemos manejar interacciones del usuario como clics, cambios de teclado, movimientos del mouse, entre otros.*/

const isValid = ( newUser ) =>
{
    let valid = true;
    if( newUser.password.length <8 || newUser.password.length>51)
    {
       alert("La longitud del password debe ser mayor a 8");
       valid = false;
    } 
    else if(!newUser.checkbox)
    {
        alert("Debes aceptar los términos y condiciones");
        valid=false;
    }

    return valid;
}

const postUser=async (newUser)=>
{
    const url="http://awc-demo.us-east-1.elasticbeanstalk.com/api/v1/users";
    const options={
        method: "POST",
        headers: {"Content.Type":"application/json"},
        body: JSON.stringify(newUser)};//Conversión del mobjeto a JSON

    try
    {
        const response=await fetch(url,options);
        const registeredUser=await response.json();
        console.table(registeredUser);
        alert("Felicidades, el registro a sido exitoso");
    }
    catch(error)
    {
        console.warn(error);
    }
}

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

//EJERCICIO: Se tienen dos páginas de usuarios, al solicitar que se visualice, tarda en cargar, en el tiempo que tarda en cargar, se debe mostrar un mensaje o spiner que indique que esta cargando
