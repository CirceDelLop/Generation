/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/
const rest = (a,b) => a-b; //Función flecha anonima que retorna el resultado de a-b, Si solo se tiene un parametro, se puede omitir los parentensis
console.log(rest(4,7));

/*Realizar una arrow function que saque el área de un rectangulo (a,b) y otra que saque el área de un cuadrado (a) */
const areaRectangulo = (ladoA,ladoB) => ladoA*ladoB;
const areaCuadrado = lado => lado*4;
//teplate literals ` ` (backtick) en conjunto con la interpolación ${}
const message = `El área del rectángulo es ${areaRectangulo(5,8)} y del cuadrado ${areaCuadrado(8)}`;

console.log(message);

/*
 Investigar:
  - Parámetros por defecto ( default parameters)
  - Parámetros rest (rest parameters)
*/
/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */
/** imprimir en consola */
const imprimirEnConsola = mensaje => console.log( mensaje );
/** imprimir en alert */
const imprimirEnAlert = mensaje => alert(mensaje);
//Imprimir en un paragraph en el HTML usando la API DOM
const imprimirEnParagraph = message => document.getElementById("message").innerHTML=message;

/**Función que imprime en consola, alert o pargraph*/
const imprimirMensaje = (mensaje,tipoSalida) => {
    if(tipoSalida==="consola")
    {
        imprimirEnConsola(mensaje);
    }else if(tipoSalida==="alert")
    {
        imprimirEnAlert(mensaje);
    }else if(tipoSalida==="paragraph")
    {
        imprimirEnParagraph(mensaje);
    }else
    {
        console.error("La salida especificada no existe : "+tipoSalida);
    }
}

imprimirMensaje("Función que imprime en consola, alert o paragraph","paragraph");

/**Imprimir mensaje usando callbacks. fnCallBack es otra función creada*/
const imprimeConCallBacks = (mensaje,fnCallBack) => fnCallBack(mensaje);

imprimeConCallBacks("CallBack",imprimirEnConsola);//Se llama la referencia de la función imprimirEnConsola, NO se ponen los parentesis

//Realizar una función que pueda ejecutar operaciones matemáticas, inicialmente va a funcionar con suma y resta. La función "ejecutarOperacion" recibe como parámetros: valorA, valorB y fnCallBackOperacion (función de callback con la operación a realizar)
//La función "ejecutarOperación" debe realizar lo siguiente: Enviar mensaje de bienvenida, realizar la operación y mostrar el resultado en la consola

const suma = (a,b) => (a+b);
const resta = (a,b) => (a-b);

const ejecutarOperacion = (a,b,fnCallBackOperacion) =>
{
    console.log("Bienvenida a Ch46");
    const resultado = fnCallBackOperacion(a,b);
    console.log(`Resultado: ${resultado}`);
};

ejecutarOperacion(4,6,suma);
ejecutarOperacion(10,4,resta);
ejecutarOperacion(11,6,(a,b)=>a/b);//División
ejecutarOperacion(2,6,(a,b)=>a**b);//Potencia
ejecutarOperacion(11,6,(a,b)=>a%b);//Residuo

/**Cambiar atuendo
 * Realizar 3 funciones de cambio de atuendo:
 * -Función cambiarRapido(atuendo)
 *  Enviar mensaje a la consola que indique que el atuendo(nombre) se cambia en 2 dos minutos
 * -Función cambiarConAccesorios(atuendo)
 *  Enviar mensaje a la consola que indique que el atuendo(nombre) se cambia en 5 minutos e inlcuye accesorios
 * -Función cambiarComplejo(atuendo)
 *  Enviar mensaje a la consola que indique que el atuendo(nombre) se cambia en 10 minutos  e incluye accesorios y muchos detalles.
 * Generar una función principal(cambiarAtuendo) que reciba como parámetros:
 * >nombre
 * >atuendo: ropa
 * >fnCallBack: Función para cambiar el atuendo
 * Invocar la función cambiarAtuendo con los 3 tipos de atuendo: rapido, accesorios y complejo 
 */

const cambiarRapido = (atuendo) => `${atuendo} y se cambiará en 2 minutos con accesorios`;
const cambiarConAccesorios = (atuendo) => `${atuendo} y se cambiará en 5 minutos con accesorios`;
const cambiarComplejo = (atuendo) => `${atuendo} y se cambiará en 10 minutos con accesorios`;

const cambiarAtuendo = (nombre,atuendo,fnCallBackCambiarAtuendo) => 
{
    const atuendoTernurin = fnCallBackCambiarAtuendo(atuendo);
    console.log(`${nombre} tendrá un atuendo de ${atuendoTernurin}`);
}

cambiarAtuendo("Pistacho","Doctor",cambiarRapido);
cambiarAtuendo("Pistacho","Chef",cambiarConAccesorios);
cambiarAtuendo("Pistacho","Astronauta",cambiarComplejo);