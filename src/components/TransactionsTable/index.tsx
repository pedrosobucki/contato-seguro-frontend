import { useContext } from "react";
import { useUsers } from "../../hooks/useUsers";
import { Container } from "./styles";

import editImage from "../../assets/edit.png"
import deleteImage from "../../assets/delete.png"

export function TransactionsTable(){

    const {users,deleteUser} = useUsers()
    console.log(users)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Nascimento</th>
                        <th>Cidade</th>
                        <th>Empresas</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => (

                        <tr key={user.id_user}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.telephone}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR')
                                .format(new Date(user.birth_date))}
                            </td>
                            <td>{user.birth_city}</td>
                            <td>{user.companies}</td>
                            <td>
                                <button><img src={editImage}></img></button>
                                <button><img src={deleteImage} onClick={() => deleteUser(user.id_user)}></img></button>
                            </td>
                        </tr>

                        )
                    )}
                </tbody>
            </table>
        </Container>
    )
}