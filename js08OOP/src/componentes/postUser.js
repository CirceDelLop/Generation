const postUser=async (newUser)=>
    {
        const url="https://formsubmit.co/ajax/circe_dellop@outlook.com";
        const options={
            method: "POST",
            headers: {"Content.Type":"application/json"},
            body: JSON.stringify(newUser)};//Conversión del mobjeto a JSON
    
        try
        {
            const response=await fetch(url,options);
            const registeredUser=await response.json();
            console.table(registeredUser);
            alert("Felicidades, el registro a sido exitoso");
        }
        catch(error)
        {
            console.warn(error);
        }
    }

export{postUser};