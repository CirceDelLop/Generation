/*La desestructuración en JavaScript es una característica que permite extraer valores de arreglos u objetos y asignarlos a variables de manera más directa y legible. Es muy útil para trabajar con datos complejos como objetos anidados o arrays largos.*/
let a=10;
let b=5;

//Cambiar el valor de a->b y el valor de b->a
let temporal=a;
a=b;
b=temporal;

//Aplicando la desestructuración
let valueA=10
let valueB=5;
[valueA,valueB]=[valueB,valueA];

//Teniendo el siguiente array ["Steve","Tessa","Copito","Tibio"], asginar el valor Steve a la varible ivanna y Tessa a la variable serch
const [ivanna,serch,,eli]=["Steve","Tessa","Copito","Tibio"];
console.log(ivanna,serch,eli);
console.log({ivanna,serch,eli});

//Aplicando la desestructuración a objetos
const datosSteve=
{
    name:"Steve",
    age:"7",
    color:["amarillo","naranja"],
    owner:"Ivana",
    type:
    {
        commonName:"Gecko Leopardo",
        habitat:"Desierto"
    }
}
//Imprimir el nombre y edad de Steve
const {name:nombre,age,type:{commonName}}=datosSteve;//Se renombra name por nombre, en type se hace una desestructuración dentro de otra
console.log(`<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">${commonName} ${age}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`)

const useStatePerzonalizado=(valorInicial)=>
{
    //Otras instrucciones
    let valorActual;
    const setValue=(newValue)=>
    {
        //Renderizar componente
    }
    return [valorActual,setValue];
}

const [state,setState]=useStatePerzonalizado(5);