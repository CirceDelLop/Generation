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