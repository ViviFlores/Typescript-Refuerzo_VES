//rafc + tab
export const TiposBasicos = () => {
  //lógica de programación
  //VARIABLES
  //let nombre: string | number  = "Viviana";
  //nombre = 123;
  //CONSTANTES
  const nombre: string = "Viviana";
  const edad: number = 33;
  const donanteOrganos: boolean = true;
  //ARREGLOS
  const lenguajes: string[] = ["TypeScript", "Java", "Python"];
  //agregar elementos en el arreglo
  lenguajes.push("JavaScript");
  
  return (
    <div>
      <h3>Tipos Básicos</h3>
      <span>{nombre}, {edad}, {donanteOrganos ? "Donante" : "No donante"}</span>
      <br/>
      <span>{lenguajes.join(", ")}</span>
    </div>
  )
}

