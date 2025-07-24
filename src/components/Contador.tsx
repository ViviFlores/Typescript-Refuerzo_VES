import { useState } from "react";

export const Contador = () => {
    //hook useState para manejar el estad del contador para cambiar valores o modificar
    const [contador, setContador] = useState<number>(0);
    //función para cambiar el valor del contador
    const gestionarContador = (numero: number): void => {
        ///llamar la función setContador para actualiza el estado
        setContador(contador + numero);
    };

    return (
        <div>
            <h3>
                Contador: <small> {contador} </small>
            </h3>
            <button className="btn btn-primary"
                onClick={() => gestionarContador(1)}>
                +1
            </button>
            &nbsp;
            <button className="btn btn-primary"
                onClick={() => gestionarContador(-1)}>
                -1
            </button>
        </div>
    );
};

