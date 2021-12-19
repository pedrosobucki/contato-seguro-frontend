import {createContext, useState, useEffect, ReactNode, useContext} from 'react'
import {api} from '../services/api'

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    ammount: number,
    createdAt: Date
}

type Transactioninput = Omit<Transaction, 'id'>

interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionsContextData{
    transactions: Transaction[],
    createTransaction: (transaction: Transactioninput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({children} : TransactionsProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() =>{
        
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))

    }, [])

    async function createTransaction(transactionInput : Transactioninput){

        const response = await api.post('/transactions', transactionInput)
        const {transaction} = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])
    
    }

    return (<TransactionsContext.Provider value={{transactions, createTransaction}}>
        {children}
    </TransactionsContext.Provider>)
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context
}