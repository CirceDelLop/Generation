console.log("Arreglos");
/**
 *  Los arreglos en JavaScript son una estructura de datos utilizada 
 * para almacenar múltiples valores en una sola variable. Cada valor 
 * dentro del arreglo se llama elemento y se accede a través de su 
 * índice (comenzando desde 0).
 */
//Crear un arreglo usando corchetes (brackets)
//Recomendación: El nombre de las variables se usa en plural
let juguetes=[];
const autos=[];

//Forma para saber si es un OBJETO
console.log(typeof juguetes);//Object
console.log(typeof autos);//Object
console.log( typeof {name:"sergio", job: "instructor"} ); // Object
//Forma correcta para saber si es un ARREGLO
console.log(Array.isArray(juguetes)); //True
console.log(Array.isArray(autos));//True
console.log(Array.isArray({name:"sergio", job: "instructor"}));//False

juguetes=30;
console.log(Array.isArray(juguetes)); //False
console.log(typeof juguetes);//Number

//Otra forma de crear arreglos es usar el constructor de Array
const apellidos=new Array();//Instanciar la clase array (crea objetos usando la clase array)

//Para identificar las diferencias entre las dos formas de declarar un arreglo
const numeros = [9]; // [9]
const numbers = new Array(9); // [ , , , , , , , , ]
console.log( numeros );
console.log( numbers );

//Acceder a los elementos
const nombres=["Estefany","América","Karen","lorena"];//Los arrays son zero index (el primer elemento es índice cero)
console.log(nombres[0]);
console.log(nombres[2]);

//Modificar un elemento del arrelgo
console.log(nombres);//"Estefany","América","Karen","lorena"
nombres[2]="Andrea";
console.log(nombres);//"Estefany","América","Andrea","lorena"

//El dato string es un dato inmutable
let nombreMascota="Steve";
console.log(nombreMascota[1]);//t
console.log(nombreMascota);//Steve
nombreMascota[1]="x";//No se cambia, ya que es un tipo de dato string y es inmutable
console.log(nombreMascota);//Steve

//Obtener el número de elementos de un arreglo: propiedad length
console.log(nombres.length);//4
console.log([1,2,3].length);//3

//El ultimo elemento del arreglo se puede obtener con [nameArray.length -1]
console.log(nombres[nombres.length-1]);

const cohortes=["Ch46","Ch47","Ch48"];

//Obtener el nombre de la última cohorte
console.log(cohortes[cohortes.length-1]);//Ch48

//Si se trata de acceder a un elemento que no existe, devuelve "undefined"
console.log(cohortes[10]);//Undefined

//***Métodos comunes de los arreglos***
/**Index Of: Retorna el primer índice en que se puede encontrar un elemento en el arreglo. Si el elemento buscado no se encuentra, retorna "-1". La busqueda la realiza con "estrictamente igual"*/
console.log(nombres);
console.log(nombres.indexOf("Andrea"));//2
console.log(nombres.indexOf("Karina"));//-1

//Agregar nombres al arreglo nombres
nombres[nombres.length]="Sara";
console.log(nombres);

nombres[nombres.length]="Sara";
console.log(nombres);

console.log(nombres.indexOf("Sara"));//4

//El segundo argumento de indexOf indica a partir de índice comienza a buscar
console.log(nombres.indexOf("Sara", 5));//5

/**Push(): Añade elementos al final de un arreglo*/
const frutas=["Piña","Manzana","Pera"];
console.log(frutas);

//Agregar frutas al final del arreglo "frutas"
frutas.push("Cereza","Durazno");
console.log(frutas);

/**Unshift: Añade elementos al inicio de un arreglo*/
//Agregar frutas al inicio del arreglo "frutas"
frutas.unshift("Sandia","Fresa");
console.log(frutas);

/**Pop: Retorna y elimina el ultimo elemento de un arreglo*/
//Eliminar el ultimo elemento del arreglo "frutas"
console.log(frutas.pop());
console.log(frutas);

/**Shift: Retorna y elimina el primer elemento de un arreglo*/
//Eliminar el primer elemento del arreglo "frutas"
console.log(frutas.shift());
console.log(frutas);

/**Splice: Elimina elementos de un arreglo y retorna los elementos eliminados y modfica el arreglo original. Es posible añadir nuevos elementos en la posición donde se encontraban los elementos eliminador*/
//Eliminar dos elementos del arreglo "frutas"
console.log(frutas.splice(2,2));//Primer argumento indica el índice donde comienza a buscar y el sgundo argumento indica cuantos elementos se van a eliminar
console.log(frutas);

//Eliminar un elemento del arreglo "frutas" y en su lugar, agregar dos elementos
console.log(frutas.splice(1,1,"Kiwi","Coco"));//A partir del argumento 3, se indican los elementos a agregarse en la posicion(es) de donde se elimaron los elementos
console.log(frutas);

//Agregar un elemento entre los elementos en el índice 1 y 2
console.log(frutas.splice(2,0,"Banana"));//Se grega un elemento en el índice 2, indicado en el primer argumento
console.log(frutas);

/**Ejercicio: Ir a martes de frutas y verduras y comenzar con cesta vacía, posteriormente comprar coco, despúes banana, despúes la piña (colocarla entre coco y banana), despúes fresa (colocarlo despúes de la banana, despúes sandía (ponerla al inicio, antes de coco)*/
const cesta=[];
console.log("Ejercicio");
cesta.push("Coco");
cesta.push("Banana");
cesta.splice(1,0,"Piña");
cesta.push("Fresa");
cesta.unshift("Sandía");
console.log(cesta);

/**PEPS/FIFO/QUEUE: Primeras en Entrer son las Primera en Salir/First in, First Out/Colas
 * Usos: 
 *  -Colas de impresión: Se imprimen los trabajos en el orden que fueron recibidos
 *  -Buffer de datos: Transmisión de audio y video
 *  -Manejo de solicitudes en servidores*/
const queue=[];
queue.push("Elemento 1");
queue.push("Elemento 2");
queue.shift();//Se retorna "Elemento 1" y se elimina del arreglo "queue"

/**UEPS/LIFO/Stack:Utimas Entradas, Primera Salidas/Last In, Fist Out/Pila
 * Usos:
 *  -Llamadas a funciones recursivas (pila de ejecusión)
 *  -Deshacer/Rehacer acciones en aplicaciones*/
const stack=[];
stack.push("Plato 1");
stack.push("Plato 2");
stack.push("Plato 3");
stack.pop();//Se retorna "Plato 3" y se elimina del arreglo "stack"

/**Pase de datos de los objetos es por referencia
 *  El pase de datos por referencia significa que, en lugar de pasar una copia del valor a una función o ariable, se pasa una referencia a la ubicación en memoria de los datos originales. Esto implica que cualquier cambio realizado a los datos dentro de la función afectará directamente al valor original.*/
const colores=["Amarillo","Verde","Azul"];
const tema=colores;//Se pasa la referencia del arreglo en colores a tema. Cualquier modificación en tema, ocurrirá en colores

function agregarColor(array)
{
    array.push("Magenta");
}
agregarColor(tema);
console.log(colores);
console.log(tema);

//Para copiar y clonar un arreglo a uno nuevo se usa el método "slice()"
const coloresPreferidos=colores.slice();//Crea un nuevo objeto
coloresPreferidos.pop();
coloresPreferidos.pop();
coloresPreferidos.pop();
console.log(coloresPreferidos);
console.log(colores);

//***Iterar arreglos***
const names=["Sari","Estefany","Circe","Ranfi"];
//Ciclo for: Regularmente, se usa cuando se conoce la cantidad de iteraciones que se necesitan
for(let index=0;index<names.length;index++)
{
    console.log(names[index]);
}

//Ciclo while: Regularmente, se usa cuando no se conoce la cantidad de iteraciones que se necesitan
/*let counter=0;
while(confirm("¿Deseas continua?"))
{
    counter++;
    console.log("Número de veces que has confirmado: "+counter);
}
console.log("Se ha terminado el ciclo while");*/

const animales=["León","Cerdito","Cabra","Pony Salvaje"];
/*Imprimir en la consola el siguiente mensaje "Hola amiguito <nombre del animal>", realizar la iteración usando un ciclo for*/

for(let i=0;i<animales.length;i++)
{
    console.log("Hola amiguito "+animales[i]);
}

let indice=0;
while(indice<animales.length)
{
    const element=animales[indice];
    console.log("Hola amigo "+element);
    indice++;
}

/**For Of: Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object)
    {
        bloque de código
    }*/

for(const animal of animales)
{
    console.log("Hola animalito "+animal);
}

//Breack: Detiene la ejecución de la iteración en curso y termina el ciclo
for(const animal of animales)
{
    if(animal==="Cerdito") break;
    console.log("Hola "+animal);
}

/**For each: Método que se utiliza para iterar colecciones, arreglos. Permite ejecutar una función de callback por cada elemento del arreglo, no tiene retorno de información*/

//Función de callback para usar en un for each
const imprimirDato=(element,index,array)=>console.log(element,index,array);

const saboresHelados=["Cereza","Choco chips","Oreo","Leche quemada","Napolitano"];

saboresHelados.forEach(imprimirDato);
saboresHelados.forEach((helado)=>console.warn("Helado: "+helado));

/**Método map(): Permite tranformar cada elemento de un arreglo/array y devolver un nuevo arreglo/array con los resultados sin modificar el arreglo/array original*/
const categorias=["Skincare","Sueros","Maquillaje","Cremas","Shampoo"];
console.table(categorias);

const listItems=categorias.map((categoria)=>`<li>${categoria}</li>`);
console.table(listItems);

const refCategorias=document.getElementById("categorias");
console.log(refCategorias.innerHTML);

const stringListItems=listItems.join("");
console.log(stringListItems);

refCategorias.innerHTML=stringListItems;

/**Realizar un arreglo de productos, que tenga 5 productos para Geckos
 * Mostrar en la interfaz de usuario los productos.
 * -Se puede mostrar como una <ul>
 * *Forma difícil, pro-max: Mostrar como cards*/
/*const productosGeckos=["Sustrato","Calcio con vitaminas","Gusanos","Agua+","Placa térmica"];
const listItemsGecko=productosGeckos.map((producto)=>`<li>${producto}</li>`);
console.table(listItemsGecko);

const refProductos=document.getElementById("productos");
console.log(refProductos.innerHTML);

const stringListItemsGecko=listItemsGecko.join("");
console.log(stringListItemsGecko);

refProductos.innerHTML=stringListItemsGecko;*/

//Con cards
const productosGeckos=["Sustrato","Calcio con vitaminas","Gusanos","Agua+","Placa térmica"];
const listItemsGecko=productosGeckos.map((producto)=>
    `<div class="col-6 col-md-4 mt-2">
        <div class="card"">
            <div class="card-body">
                <h5 class="card-title">${producto}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>`);

console.table(listItemsGecko);

const refProductos=document.getElementById("productos");
console.log(refProductos.innerHTML);

const stringListItemsGecko=listItemsGecko.join("");
console.log(stringListItemsGecko);

refProductos.innerHTML=stringListItemsGecko;
