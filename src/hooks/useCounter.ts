import { useState } from "react";

//hook personalizado
export const useCounter = () => {
    //hook useState para manejar el estado del contador para cambiar valores o modificar
    const [contador, setContador] = useState<number>(0);
    //función para cambiar el valor del contador
    const gestionarContador = (numero: number): void => {
        ///llamar la función setContador para actualiza el estado
        setContador(contador + numero);
    };

    return {
        contador,
        gestionarContador
    }
}