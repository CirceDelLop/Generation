const contarCaracteres=(name)=>name.length;
const saludo=(name)=>
{
    return `Hola ${name}, tu nombre tiene ${contarCaracteres(name)} caracteres.`;
}

export{saludo};