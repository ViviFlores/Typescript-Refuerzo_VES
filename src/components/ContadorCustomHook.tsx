import { useCounter } from "../hooks/useCounter";

export const ContadorCustomHook = () => {

    //custom hook para manejar el contador
    const {contador, gestionarContador} = useCounter();
    
    return (
        <div>
            <h3>
                Contador Custom Hook: <small> {contador} </small>
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

