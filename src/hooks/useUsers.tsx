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
    birth_date: Date,
    birth_city: string,
    companies: string
}

interface UserInput {
    name: string,
    email: string,
    telephone: string,
    birth_date: Date,
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

        const response = await axios.post('/user/create', userInput)
        const {user} = response.data;

        setUsers([
            ...users,
            user
        ])
    
    }

    return (<UsersContext.Provider value={{users, createUser}}>
        {children}
    </UsersContext.Provider>)
}

export function useUsers(){
    const context = useContext(UsersContext)

    return context
}