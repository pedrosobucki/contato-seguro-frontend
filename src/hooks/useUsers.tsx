import axios from 'axios'
import {createContext, useState, useEffect, ReactNode, useContext} from 'react'
//import {api} from '../services/api'

const api = axios.create({
    baseURL: `http://localhost:8080/api/`
})

interface User {
    id_user: number,
    name: string,
    email: string,
    telephone: string,
    birth_date: string,
    birth_city: string,
    companies: string
}

interface UserInput {
    name: string,
    email: string,
    telephone: string,
    birth_date: string,
    birth_city: string,
    companies: number[]
}

//type UserInput = Omit<User, 'id_users' | 'companies'>

interface UsersProviderProps{
    children: ReactNode
}

interface UsersContextData{
    users: User[],
    createUser: (user: UserInput) => Promise<void>
}

export const UsersContext = createContext<UsersContextData>(
    {} as UsersContextData
)

export function UsersProvider({children} : UsersProviderProps){

    const [users, setUsers] = useState<User[]>([])

    useEffect(() =>{
        
        // mock api
        // api.get('users')
        //     .then(response => setUsers(response.data.users))

        api.get('user')
            .then(response => setUsers(response.data))


    }, [])

    async function createUser(userInput : UserInput){

        api.post('/user/create', userInput).then(response =>{

            const user = response.data;

            //console.log(response.data)

            console.log(user)

            setUsers([
                ...users,
                user
            ])

        })
        

        //console.log(JSON.stringify(userInput))
        //console.log(userInput.birth_date.toISOString().split('T')[0])
    
    }

    return (<UsersContext.Provider value={{users, createUser}}>
        {children}
    </UsersContext.Provider>)
}

export function useUsers(){
    const context = useContext(UsersContext)

    return context
}