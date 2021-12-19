import { useContext } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

import editImage from "../../assets/edit.png"
import deleteImage from "../../assets/delete.png"

export function TransactionsTable(){

    const {users} = useUsers()
    console.log(users)

    const {transactions} = useTransactions()
    console.log(transactions)

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
                    {/* {transactions.map(transaction => (

                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.ammount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR')
                                .format(new Date(transaction.createdAt))}
                            </td>
                        </tr>

                        )
                    )} */}
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
                                <button><img src={deleteImage}></img></button>
                            </td>
                        </tr>

                        )
                    )}
                    {/* <tr>
                        <td>Peter</td>
                        <td>peter@email.com</td>
                        <td>(51)99999-9999</td>
                        <td>12/07/1997</td>
                        <td>Porto Alegre</td>
                        <td>Empresa1, Empresa2</td>
                        <td>
                            <button><img src={editImage}></img></button>
                            <button><img src={deleteImage}></img></button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </Container>
    )
}