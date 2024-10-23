import { Link } from 'react-router-dom';
import './navbar.css'

const estiloArial=
    {
        fontFamily:"Arial", 
        color:"yellow"
    }

const estiloCourier=
{
    fontFamily:"Courier New, monospace", 
    color:"cyan"
}

//Suponer que se hace una petición fetch
const myJson='{"fontFamily":"Times New Roman","color":"red"}';
//Convertir JSON a Object
const myObjStyle=JSON.parse(myJson);

const Navbar=()=>
    {
        const isArial=true;
        /* let estiloAAplicar;

        if(isArial)
        {
            estiloAAplicar=estiloArial;
        }
        else
        {
            estiloAAplicar=estiloCourier;
        } */

        return (
            <>
                <nav className="navbar">
                    {/*Logo*/}
                    <div className="logo">
                        <img src="/img/ninja.png" alt="Logo Ninja" />
                    </div>
                    {/*Opciones del menú*/}
                    <ul className="nav-links" style={myObjStyle||estiloArial}>
                        <li>
                            <Link to="/">Home</Link>
                            {/* <a href='/'>Home</a> */}
                        </li>
                        
                        <li>
                            <Link to="pagina/about">About</Link>
                            {/* <a href='/pagina/about'>About</a> */}
                        </li>
                        
                        <li>
                            <Link to="/pagina/contacto">Contacto</Link>
                            {/* <a href='/pagina/contacto'>Contact</a> */}
                        </li>
                    </ul>
                </nav>
            </>
        );
    };

export {Navbar};