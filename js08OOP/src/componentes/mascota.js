/**El nombre de las clases(plantillas) debe ser con UpperCamelCase
 * Se recomienda que el nombre sea un sustantivo.
 * Encapsulamiento: La encapsulación ayuda a proteger la integridad de los datos y asegura que un objeto mantenga su estado interno consistente. Al limitar el acceso directo a los datos internos de un objeto, se reduce la posibilidad de que estos datos sean modificados de manera incorrecta o que se produzcan efectos secundarios no deseados.*/

//Declaración de la clase Mascota
class Mascota
{
    //Atributo encapsulado (como buena practica se encapsulan todos los atributos)
    #especie;
    //Se crea el método constructor y nos ayuda a instanciar un objeto
    constructor(nombreMascota,edadMascota,especie)
    {
        this.name=nombreMascota;
        this.edad=edadMascota;
        this.#especie=especie;
        console.log(this);
        console.log(`Soy ${this.name}, tengo vida, ja, ja, ja, tengo ${this.edad} años, soy de la especie ${this.#especie}`);
    }

    //Leer y escribir a los atributos encapsulados se usan los métodos setters y getters
    //Leer
    get especie()
    {
        return this.#especie;
    }

    //Escribir/Editar
    set especie(newEspecie)
    {
        this.#especie=newEspecie;
    }

    #metodoEncapsulado(){}
    
    //Metodo público
    saluda(comida)
    {
        return `Hola, soy ${this.name} y estoy comiendo ${comida.toUpperCase()}`;
    }
}

/**Herencia: mecanismo que permite a un objeto basarse en otro objeto existente para heredar propiedades y métodos. Esto permite la reutilización de código y la creación 
de relaciones entre objetos, lo que facilita la organización y la estructura del código. Para heredar en la declaración de la clase se usa la palabra extends*/
class MascotaReptil extends Mascota
{
    constructor(nombre,edad)
    {
        super(nombre,edad,"reptil");//Accede al constructor de la clase padre/super clase
    }

    cambiarPiel()
    {
        return `Soy ${this.name} y estoy cambiando de piel. No veas`;
    }
}

export{Mascota,MascotaReptil};//Exportación nombrada
