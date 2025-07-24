//rafc + tab o enter
export const Funciones = () => {

    //Función return
    const sumar = (): number => {
        return 1 + 3;
    }

    //Función void
    const mensaje = (): void => {
        console.log("Hola, segundo sistemas");
    }

    //Funciones con parámetros
    const restar = (num1: number, num2: number): number => {
        return num1 - num2;
    }

    return (
        <div>
            <h3>Funciones</h3>
            <span>El resultado de la suma es: {sumar()} </span>
            <br/>
            <span>El resultado de la resta es: {restar(5, 2)} </span>
            <br />
            <button onClick={mensaje}>Mensaje</button>
        </div>
    )
}
