
const datosUsuario=(url)=>{
    fetch(url)
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((datos)=>{
            //Asegúrate de que los datos existen antes de acceder a ellos
                document.getElementById("tabla").innerHTML=`<thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo electrónico</th>
                        <th scope="col">Foto</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td id="id0"></td>
                        <td id="nombre0"></td>
                        <td id="apellido0"></td>
                        <td id="email0"></td>
                        <td id="foto0"></td>
                    </tr>
                    
                    <tr>
                        <th scope="row"></th>
                        <td id="id1"></td>
                        <td id="nombre1"></td>
                        <td id="apellido1"></td>
                        <td id="email1"></td>
                        <td id="foto1"></td>
                    </tr>
                
                    <tr>
                        <th scope="row"></th>
                        <td id="id2"></td>
                        <td id="nombre2"></td>
                        <td id="apellido2"></td>
                        <td id="email2"></td>
                        <td id="foto2"></td>
                    </tr>

                    <tr>
                        <th scope="row" id="fila"></th>
                        <td id="id3"></td>
                        <td id="nombre3"></td>
                        <td id="apellido3"></td>
                        <td id="email3"></td>
                        <td id="foto3"></td>
                    </tr>
                    
                    <tr>
                        <th scope="row"></th>
                        <td id="id4"></td>
                        <td id="nombre4"></td>
                        <td id="apellido4"></td>
                        <td id="email4"></td>
                        <td id="foto4"></td>
                    </tr>
                
                    <tr>
                        <th scope="row"></th>
                        <td id="id5"></td>
                        <td id="nombre5"></td>
                        <td id="apellido5"></td>
                        <td id="email5"></td>
                        <td id="foto5"></td>
                    </tr>
                </tbody>`

                for (let i = 0; i < Math.min(6, datos.data.length); i++) {
                    document.getElementById(`id${i}`).textContent=datos.data[i].id;
                    document.getElementById(`nombre${i}`).textContent=datos.data[i].first_name;
                    document.getElementById(`apellido${i}`).textContent=datos.data[i].last_name;
                    document.getElementById(`email${i}`).textContent=datos.data[i].email;
                    document.getElementById(`foto${i}`).innerHTML=`<img src="${datos.data[i].avatar}" alt="">`;
                }
        })
        .catch((error) => console.error('Error fetching data:', error))
        .finally(() => console.log("He terminado"));
};

//Llama a la función para obtener los datos
const mostrarPag1=()=>//Se crea la función para mostrar el spinner de cargando en lo que se muestra la información al dar click en el boton 1
{
    datosUsuario("https://reqres.in/api/users?delay=3&page=1");
    document.getElementById("tabla").innerHTML=`<div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`
}

const mostrarPag2=()=>//Se crea la función para mostrar el spinner de cargando en lo que se muestra la información al dar click en el boton 2
{
    datosUsuario("https://reqres.in/api/users?delay=3&page=2");
    document.getElementById("tabla").innerHTML=`<div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`
}

mostrarPag1();//Se llama la función mostrarPag1 para que no sea necesario dar click en un botón para comenzar a cagar los datos