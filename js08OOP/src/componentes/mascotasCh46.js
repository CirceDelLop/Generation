import {Mascota,MascotaReptil} from "./mascota.js";

const jugarConMascotas=()=>
{
    const tessa=new Mascota("Tessa",10,"Canino");//Instancia una clase
    //console.log(typeof tessa);
    //console.log(tessa.name,tessa.edad);

    //Instancia a CopitoAntonio, asignar la referencia a una variable
    const copitoAntonio=new Mascota("Copito Antonio",1,"Felino");
    console.log(copitoAntonio.name);

    //Cambiar el valor de un atributo
    copitoAntonio.name="Copito Antonio Arrollo Leyva";
    console.log(copitoAntonio.name);

    //Agregar atributo edad, inicializar el atributo al instanciar la clase e imprimir el valor de la edad con console.log
    const blacky=new Mascota("Blaky",2,"Canino");
    console.log(blacky.edad);

    console.table([tessa,copitoAntonio,blacky]);

    //Mostrar los atributos encapsulados
    console.log(tessa.especie);//undefined: da este resultado ya que no existe dicho atributo
    //console.log(tessa.#especie);//No se puede acceder a atributos encapsulados
    tessa.especie="Canis lupus familiaris";
    console.log(tessa.especie);

    console.log(tessa.saluda("croquetas"));
    console.log(copitoAntonio.saluda("pollito y jamón del caro"));

    //Crear el objeto Steve
    const steve=new MascotaReptil("Steve",7);
    console.log(steve.saluda("Gusanos"));
    console.log(steve.cambiarPiel());
}

export{jugarConMascotas};