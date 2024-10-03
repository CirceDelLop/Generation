// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/**Función que recibe una temperatura y retorna un mensaje de acuerdo a la temperatura
 * temperaturaIdeal=24º;
 * temperaturaTemplado=20 a 23;
 * temperaturaFria=menor o igual a 19
 * temperaturaCalida=25 a 30
 * temperaturaCalurosa=mayor o igual a 31
*/

const temperatura=35;

const evaluarTemperatura = (gradosCelcius) => 
{
    let mensaje="";
    if(gradosCelcius===24)
        mensaje=`Temperatura de ${gradosCelcius} es ideal`;
    else if(gradosCelcius>=20 && gradosCelcius<=23)
        mensaje=`Temperatura de ${gradosCelcius} es templada`;
    else if(gradosCelcius<=19)
        mensaje=`Temperatura de ${gradosCelcius} es fria`;
    else if(gradosCelcius>=25 && gradosCelcius<=30)
        mensaje=`Temperatura de ${gradosCelcius} es calida`;
    else if(gradosCelcius>=31)
        mensaje=`Temperatura de ${gradosCelcius} es calurosa`;
    else
        mensaje=`Temperatura de ${gradosCelcius} no se puede evaluar`;
    
    return mensaje;
}

console.log(evaluarTemperatura(22));
console.log(evaluarTemperatura(24));
console.log(evaluarTemperatura(15));
console.log(evaluarTemperatura(27));
console.log(evaluarTemperatura(33));

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/
/**
 * Función que evalue si se ha pagado una tarjeta de crédito
 * Parámetro de entrada: booleano que indique si se ha pagado la tarjeta de crédito
 */
const pagoEfectuado = ( esPagadoTC  ) => {
    let mensaje = "";
    if ( esPagadoTC )
        mensaje = "Se ha pagado la tarjeta de crédito";
    else
        mensaje = "No se ha pagado, se te cobrará intereses";
    return mensaje;
}

const pagoEfectuadoConOperadorTernario=(esPagadoTC)=>esPagadoTC===true?"TC pagada" : "Pagarás intereses";

console.log(pagoEfectuado(true));
console.log(pagoEfectuado(false));
console.log(pagoEfectuadoConOperadorTernario(true));
console.log(pagoEfectuadoConOperadorTernario(false));

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.
 Para comparar la condicional switch usa el operador estricto ===
 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }
*/
/**Evaluar un nombre, d acuerdo al nombre enviar diferente saludo*/
const saludarPersona = ( nombre ) =>
{
    let mensaje = "";
    switch( nombre)
    {
        case "serch":
            mensaje = "Qué transita por tus venas, aparte de colesterol y chocolate? 🍫🍩";
            break;
        case "ranfi":
            mensaje = "gurs nais 🧟‍♀️";
            break;
        case "sari":
            mensaje = "Hola pelona 👩‍🦲";
            break;
        case "lizbeth":
            mensaje = "Ola 🌊";
            break;
        case "azul":
            mensaje = "Regresemos al 2014 Holiwis";
            break;
        default:
            mensaje="No podemos procesar un saludo para "+nombre;
    }
    return mensaje;
}

console.log(saludarPersona("serch"));
console.log(saludarPersona("ranfi"));
console.log(saludarPersona("sari"));

// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/
