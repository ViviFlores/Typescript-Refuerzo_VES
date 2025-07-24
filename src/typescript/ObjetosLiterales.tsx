//rafc + tab o enter

interface Persona {
    nombre: string;
    edad: number;
    telefono: string;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    ciudad: string;
    casaNumero: number;
}

export const ObjetosLiterales = () => {
    //CREAR UN OBJETO
    const persona: Persona = {
        nombre: "Viviana",
        edad: 33,
        telefono: "0965266595",
        direccion: {
            pais: "Ecuador",
            ciudad: "Quito",
            casaNumero: 654
        }
    }

    //ACCESO A PROPIEDADES DEL OBJETO
    persona.telefono = "0965245856";

    //NO SE PUEDE INSTANCIAR UNA INTERFACE
    //const objPersona = new persona();

    return (
        <div>
            <h3>Objetos Literales</h3>
            {JSON.stringify(persona)}
        </div>
    )
}
