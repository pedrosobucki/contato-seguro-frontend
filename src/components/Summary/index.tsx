import { Container } from "./styles";
import { useContext } from "react";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){
    const {transactions} = useTransactions()

    const sumarry = transactions.reduce((acc, transaction) =>{

        if(transaction.type === 'deposit'){
            acc.deposit += transaction.ammount
            acc.total += transaction.ammount
        }else{
            acc.withdraw += transaction.ammount
            acc.total -= transaction.ammount
        }

        return acc

    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumarry.deposit)
                }</strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Outcome" />
                </header>
                <strong>-{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumarry.withdraw)
                }</strong>
            </div>

            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>${
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumarry.total)
                }</strong>
            </div>
        </Container>
    )
}