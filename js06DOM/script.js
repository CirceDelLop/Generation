console.log("Sesión JS06 - DOM");
/**Las principales diferencias entre innerHTML y textContent son:
  Contenido interpretado:
     innerHTML: Inserta y retorna el contenido HTML, interpretando 
      las etiquetas y creando elementos.
     textContent: Inserta y retorna solo el texto, sin interpretar 
      ni procesar etiquetas HTML.       
  Seguridad:
     innerHTML: Es vulnerable a ataques XSS si no se valida 
      adecuadamente el contenido.
     textContent: Es más seguro, ya que trata todo el contenido 
      como texto, sin ejecutar código HTML o scripts.
  Rendimiento:
    innerHTML: Puede ser más lento si el contenido HTML tiene que ser reanalizado o renderizado.
    textContent: Es más rápido ya que solo maneja texto plano.*/

/**Cambiar el contenido de un elemento HTML por medio de su ID*/
const changeElementID=(idName,newMessage)=>
{
  const refElement=document.getElementById(idName);
  console.log(refElement);

  refElement.textContent=newMessage;//Se usa cuando solo se quiere obtener el texto
  refElement.innerHTML=newMessage;//Se usa cuando quieres leer con todo y etiquetas
}

changeElementID("title","JS 06 Document Object Model (DOM)");

//Modificar el texto de h2 a "Get in loser we're going shopping!"
changeElementID("subtitle","Get in loser we're going shopping!");//<em></em>Etiqueta semantica para poner texto en cursiva

/**Modificar elemento por su tag (etiqueta HTML)*/
const changeElementsByTagName=()=>
{
  // Obteniendo la referencia de los <li></li>
  const listItems = document.getElementsByTagName("li");
  console.log( listItems );
    
  for (let index=0; index<listItems.length; index++)
  {    
    listItems[index].textContent = `Soy el índice ${index} `;
  }
}

changeElementsByTagName();

const changeElementsByQuerySelector=()=>
{
  //const element=document.querySelector("img");
  const element=document.querySelector("#logo");
  console.log(element.src);//Lee la ruta de la imagen
  console.log(element.alt);//Lee la descripción de la imagen
  element.src="gatoLentes.jpg";
  element.alt="Gato Copito Antonio tomándose una foto";
}

changeElementsByQuerySelector();

//Propiedades de visualización
/*display: none (quitar elemento del DOM)
visibility: hidden (ocultar el elemento)*/
const displayNone=()=>
{
  const element=document.querySelector("#subtitle");
  element.style.display="none";
  //element.style.display="inline";//mostrar inline/block
}

const hiddenElement=()=>
{
  const element=document.querySelector("#secondListItem");//Oculta el elemento omitiendo espacio que ocuparia
  element.style.visibility="hidden";//Oculta el elemento respentando el espacio que ocuparia
  //element.style.visibility="visible";//Muestra el elemento
}

displayNone();
hiddenElement();