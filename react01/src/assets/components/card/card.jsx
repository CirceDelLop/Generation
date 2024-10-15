export const Card=(props)=>//props=properties=propiedades 
{
    let counter=1;

    const incrementHandle=()=>
    {
        console.log(++counter)
    }
    return (
        <div>
            <p>
                {props.title}
            </p>

            <p>
                Piezas: <span>{counter}</span>
            </p>

            <p>
                Número máximo de piezas: <span>{props.stock}</span>
            </p>

            <button >-</button>
            <button onClick={incrementHandle}>+</button>
        </div>
    );
};