import { useEffect, useState } from "react";

export const ComponenteUseEffect = () => {
    //hook useState para manejar el estado de una variable booleana
    const [valor, setValor] = useState<boolean>(false);

    //función para cambiar el valor de la variable booleana
    const cambiarValor = (): void => {
        setValor(!valor);
    }

    //hook useEffect para manejar efectos secundarios en componentes funcionales
    useEffect(() => {
        //código que se ejecuta al montar el componente
        console.log("Desde el useEffect");
    }, [valor]); //lista de dependencias

    return (
        <div>
            <h3>Hook - UseEffect</h3>
            <button onClick={cambiarValor}>Cambiar Valor</button>
        </div>
    )
}
