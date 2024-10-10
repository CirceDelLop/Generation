const datosSteve=
    {
        nombre:"Steve",
        tipo:"reptil",
        edad: 7,
        colores: ["amarillo","naranja"],
        cambioPiel:function()
            {
                return `Me llamo ${this.nombre}, tengo ${this.edad} años y me toca cambiar de ropita`;//This da la refrencia de donde se encuentra el objeto
            },
        alimento:
            {
                verduras:["Zanahorias","Lechuga"],
                insectos:["Gusanos","Hormigas"]
            }
    };

const datosTibio=
    {
        nombre:"Tibio",
        tipo:"Felino",
        edad:5,
        colores:["Gris","Café"],
        alimento:
            {
                croquetas:["Seco/Humedo"]
            },
        cambioPiel: function()
            {
                return `Me llamo ${this.nombre} y no cambio de piel, pero si de pelaje.`;
            }
    };

const mostrarEnConsolaASteve=()=>
{
    //Usar el objeto datosSteve
    console.log("Nombre de la mascota: ",datosSteve["nombre"]);
    console.log("Tipo de mascota: ",datosSteve["tipo"]);
    console.log("Edad de la mascota: ",datosSteve.edad);

    //Mostrar los alimentos de tipo verduras que come Steve
    console.log("Alimentos de tipo verduras: ",datosSteve.alimento.verduras);
    console.log("Alimentos de tipo verduras: ",datosSteve["alimento"]["verduras"]);
    //Invocar la función cambioPiel de Steve
    console.log("Invocando la función: ",datosSteve.cambioPiel());
    console.log("Invocando la función: ",datosSteve["cambioPiel"]());

    //Cambiar el valor de un atributo
    datosSteve.nombre="Steve el macho";
    datosSteve["nombre"]="Steve el macho";

    console.log("Invocando la función: ",datosSteve.cambioPiel());
};

export{mostrarEnConsolaASteve};
