import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Cards } from './assets/pages/cards/cards';
import { Footer } from './assets/pages/footer/footer';
import { Navbar } from './assets/pages/header/navbar';
import { About } from './assets/pages/about/about';
import { Contact } from './assets/pages/contact/contact';
import { NotFound } from './assets/pages/notFound/notFound';

function App() {
    /*Crean un componente para el Header
    Crear un componenete para mis cards: dentro crear 6 tarjetas
    Crear un componente para el Footer*/
    const myJSX = (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Cards />} />
                    <Route path='/pagina/about' element={<About />} />
                    <Route path='/pagina/contacto' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
    return myJSX;
}

export default App