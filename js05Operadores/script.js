console.log("Sesión JS05 - Operadores");
// Tipos de operadores
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
const categorias = [
  "Aritméticos", 
  "Asignación", 
  "Comparación", 
  "Lógicos",
  "Incremento y decremento",
  "Ternarios"
];

const listItems = categorias.map((categoria)=>`<li> ${categoria} </li>`);
const refCategorias=document.getElementById("categorias");
const stringListItems=listItems.join("");
refCategorias.innerHTML=stringListItems;

//Opéradores aritméticos
/*adición +
  multiplicación *
  substracción -
  división /
  resto %
  exponencial **  - Math.pow(2, 3)   2**3*/
//Hacen una conversión implicita
console.log("3"*"3");
console.log("5"-4);
console.log("10"/2);
console.log("20"%4);

// Saber si 3 números terminan con el mis dígito. Ejemplo 1098, 78,  8  -> true 77,  6, 23  -> false
const verificarUltimoDigitoUsandoString=(numA,numB,numC)=>
{
    //Se convierte a string la información de las variables num
    const strNumA=String(numA);
    const strNumB=String(numB);
    const strNumC=String(numC);
    
    //Se toma el ultimo caracter de los string strNum
    const lastDigitNumA=strNumA[strNumA.length-1];
    const lastDigitNumB=strNumB[strNumB.length-1];
    const lastDigitNumC=strNumC[strNumC.length-1];

    const result=lastDigitNumA===lastDigitNumB && lastDigitNumA===lastDigitNumC;

    return result;
}

//Función para verificar el ultimo digito usando residuo
const verificarUltimoDigitoUsandoResiduo=(numA,numB,numC)=>
{
    const lastDigitNumA=numA%10;
    const lastDigitNumB=numB%10;
    const lastDigitNumC=numC%10;

    const result=lastDigitNumA===lastDigitNumB && lastDigitNumA===lastDigitNumC;

    return result;
}

console.log("Verificar ultimo digito con string");
console.log(verificarUltimoDigitoUsandoString(1098,78,8));
console.log(verificarUltimoDigitoUsandoString(77,6,23));
console.log("Verificar ultimo digito con modulo (%)");
console.log(verificarUltimoDigitoUsandoResiduo(1098,78,8));
console.log(verificarUltimoDigitoUsandoResiduo(77,6,23));

// Saber si un año es bisiesto, verificar solo si es divisible entre 4. Ejemplo: 2024 fue bisiesto, febrero tuvo 29 días. 2023 no fue bisiesto, 2020 fue bisiesto
/*const isLeapYear=(year)=>
{
    const years=year%4;

    return years===0;;
}*/
const isLeapYear=(year)=>year%4===0;

console.log("Año bisiesto:");
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
console.log(isLeapYear(2020));

//Ejercicios para aplicar la presedencia de los operadores:
console.log("Precedencia de operadores");
console.log(3*2/2);//3*2=6/2=3
console.log(3/2*2);//3/2=1.5*2=3
console.log(2*4/2**3);//2*4=8/2**3=8/8=1
console.log(3**2**3);//2**3=8=>3**8=6561
console.log(20/4+3*(2+3)-4**2);//20/4+3*(5)-4**2=5+15-16=4

//Uso de rest parameters "(...nomVariable)". Siempre debe ir al final de todos los parametros
/* const verificarUltimoDigitoDeVariosNumeros=(nombre,...numeros)=>
{
    console.log(nombre,numeros);
}

console.log(verificarUltimoDigitoDeVariosNumeros("Circe",2,22));
console.log(verificarUltimoDigitoDeVariosNumeros("Circe",2,22,52));
console.log(verificarUltimoDigitoDeVariosNumeros("Circe",2,22,52,44)); */

//Operadores de asignación
/*Asigna un valor a su operador izquierdo basándose en el valor de su operando derecho:
signación =
Operadores abreviados ( compuestos ):
  op1 += op2  -> op1 = op1 + op2
  op1 -= op2  -> op1 = op1 - op2
  op1 *= op2  -> op1 = op1 * op2*/

let age=16;
//Agregar 4 a la variable age y almacenar el resultado en 'age': age=age+4
age+=4;//16+4=20
age*=2/2+3;//20*=1+3=20*4=80
age-=40/2*3;//80-=20*3=>80-60=20

//Operadores unarios
//Solo actuan sobre un operando
//Negación unaria
let edad=-age;//-20
let almaEdad=-edad;//20

//Suma unaria
let dinero=-100;
let pago=+dinero;
console.log(dinero,pago);

const money="100.5";
//Formas de convertir un número en string(expresado con número entre comillas) a numerico
/*const amount=parseInt(money)+500;
const amount=parseFloat(money)+500;
const amount=Number(money)+500;*/
const amount=+money+500;//El string money lo convierte a númerico
console.log(amount);

// Diferencias entre usar Number() y parseInt()
// - Number convierte enteros y decimales
// - parseInt convierte solo la parte entera
console.log( parseInt("10.456")); // 10
// - Number devuelve NaN si la cadena contiene algún caracter no numérico
// - parseInt convierte los enteros hasta encontrar una caracter no numérico
//       Si la entrada no comienza con un valor numérico, devuelve NaN
console.log( parseInt("10-25") ); // 10
console.log( Number("10-25") ); // NaN

console.log( Number( true ) ); // 1
console.log( Number( false ) ); // 0
console.log( parseInt( true ) ); // NaN

//Conversión a booleano
// En la conversión de boolean los siguientes valores son false: "", 0, null, undefined
console.log( Boolean(1) ); //true
console.log( Boolean(1000) ); //true
console.log( Boolean(-1000) ); //true
console.log( Boolean("Ya mero nos vamos a comer, me duele la cabeza") ); // true
console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true por que hay un espacio

// Number
// [] -> 0 , [30] -> 30, [30,33] -> NaN, false -> 0, true -> 1
console.log(Number([]),Number([30]),Number([30,33]));//Se retorna 0,30,NaN

// String
// [] -> "" , [12,2] -> "12,2", function(){} -> "funtion(){}", {} -> [object, object]
console.log(String([],String([12,2])));//Se retorna "","12,2"
console.log(String({name:"Sergio",job:"Instructor"}));//Se retorna [object,objetc]

//Forma correcta para convertir un objeto a string
console.log(JSON.stringify({name:"Sergio",job:"Instructor"}));//Se retorna {"name":"Sergio","job":"Instructor"}

//Operador de incremento y decremento en unidad
/*Operador de post-incremento|post-decremento (valor++|valor--): Primero se devuelve el valor y despues se incrementa/decrementa*/
let x = 10;
x++; // x = x + 1;
console.log( x ); // 11

/*Operador de pre-incremento|pre-decremento(++valor|--valor): Primero se incrementa/decrementa y despues de devuelve el valor*/
let y = 30;
++y; // y = y + 1;
console.log( y ); // 31

//Ejemplos de como funciona
let valorA=10;
let valorB=10;
console.log(valorA++);
console.log(++valorB);