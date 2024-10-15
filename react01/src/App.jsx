import './App.css'
import { Cards } from './assets/pages/cards/cards';
import { Footer } from './assets/pages/footer/footer';
import { Navbar } from './assets/pages/header/navbar';

function App() {
    /*Crean un componente para el Header
    Crear un componenete para mis cards: dentro crear 6 tarjetas
    Crear un componente para el Footer*/
    const myJSX = (
        <>
            <Navbar />
            <Cards />
            <Footer />
        </>
    );
    return myJSX;
}

export default App