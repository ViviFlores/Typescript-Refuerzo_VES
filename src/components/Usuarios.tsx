import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import type { ListaUsuarios, Usuario } from "../interface/interfaceReqRes";

export const Usuarios = () => {
    //hook useState para manejar el estado de los usuarios
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    //hook useEffect para comunicarme con una API
    useEffect(() => {
        //Comunicarme con una API para obtener los usuarios
        reqResApi.get<ListaUsuarios>("/users")//petición GET a la API
            .then(resp => {
                //console.log(resp.data.data);
                //llamar al setUsuarios para actualizar el estado de usuarios
                setUsuarios(resp.data.data);
            })
            .catch(error => console.log(error))
    }, []);

    //función para mostrar de manera dinámica las filas de la tabla
    const itemUsuarios = ({ first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr>
                <td>
                    <img src={avatar}
                        alt={first_name}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 6
                        }} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Lista Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario: Usuario) => itemUsuarios(usuario))
                    }
                </tbody>
            </table>
        </div>
    )
}
