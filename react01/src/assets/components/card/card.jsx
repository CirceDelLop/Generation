/*Un componente en React se renderiza bajo ciertas condiciones:
 -Cambio en las props: Si las props que recibe el componente cambian, este se vuelve a renderizar.
 -Cambio de estado (useState): Si el estado del componente cambia, este se vuelve a renderizar.
 -Cambio en el componente Parent: Si un parent se renderiza, los child también lo harán.
 Sintaxis de useState:
    const [estado, setEstado] = useState(valorInicial);
 - estado: Es el valor actual del estado.
 - setEstado: Es la función que se usa para actualizar el valor del estado.
 - valorInicial: Es el valor inicial que se le asigna al estado.
 Reglas de uso de useState:
 -useState solo se puede usar dentro de componentes funcionales
 -No se puede usar condicionalmente o en loops.
 -El valor del estado se mantiene entre renderizados del componente*/

import { Box, Button, ButtonGroup, Typography} from "@mui/material";
import { useState } from "react";

//export const Card=(props)=>//props=properties=propiedades 
export const Card=({title,stock})=>
{
    const [counter, setCounter] = useState(0);//Es una desestructuración

    const incrementHandle=()=>
    {
        console.log("Valor antes de renderizar" , {counter})
        setCounter(counter+1)
    }

    const decrementHandle=()=>
    {
        console.log("Valor antes de renderizar" , {counter})
        setCounter(counter-1)
    }
    return (
        <Box textAlign="center" sx={{color:"whitesmoke",bgcolor:"#333",borderRadius:2,p:2,"&:hover":{bgcolor:"primary.dark"}}}>
            <Typography variant="h5" component={"p"}>
                {title}{/* {props.title} */}
            </Typography>

            <Typography variant="p" component={"p"}>
                Piezas: 
                <Typography variant="span">
                    {counter}
                </Typography>
            </Typography>

            <Typography variant="p" component={"p"}>
                Número máximo de piezas: 
                <Typography variant="span">
                    {stock}{/*{props.stock}*/}
                </Typography>
            </Typography>

            <Button  disabled={counter<=0} onClick={decrementHandle} variant="contained" sx={{mx:1,bgcolor:"#6b0202","&:hover":{bgcolor:"#0000"}}}>-</Button>
            
            <Button disabled={counter>=stock}  onClick={incrementHandle} variant="contained" sx={{mx:1,bgcolor:"#6b0202","&:hover":{bgcolor:"#0000"}}}>+</Button>
        </Box>
    );
};