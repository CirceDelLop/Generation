import './footer.css';

const Footer=()=>
    {
        return (
            <>
                <footer className="footer">
                    <p className='nombre'>
                        Circe Delgadillo
                    </p>
                    
                    <ul className='links'>
                        <li>
                            <a className='link' href="https://github.com/CirceDelLop" target="_blank">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </footer>
            </>
        );
    };

export{Footer};