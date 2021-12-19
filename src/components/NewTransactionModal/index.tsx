import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useState, useContext } from "react";
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { api } from "../../services/api";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const {createTransaction} = useTransactions()

    const [title, setTile] = useState('')
    const [ammount, setAmmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')
    

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({ //waits insert in order to close modal
            title,
            ammount,
            category,
            type,
            createdAt: new Date()
        })

        //reset modal values
        setTile('')
        setAmmount(0)
        setCategory('')
        setType('desposit')

        onRequestClose() //close modal
    }

    Modal.setAppElement('#root')

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

            <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close">
                <img src={closeImg} alt="Close modal"/>
            </button>

            <Container
            onSubmit={handleCreateNewTransaction}>
                <h2>Create new transaction</h2>

                <input
                placeholder="Title"
                type="text"
                onChange={event => setTile(event.target.value)}/>

                <input
                placeholder="Value"
                type="number"
                onChange={event => setAmmount(Number(event.target.value))}/>

                <TransactionTypeContainer>
                    <RadioBox
                    type="button"
                    onClick={() => setType('deposit')}
                    isActive={type==='deposit'}
                    activeColor="green">

                        <img src={incomeImg} alt="Deposit" />
                        <span>Deposit</span>

                    </RadioBox>

                    <RadioBox
                    type="button"
                    onClick={() => setType('withdraw')}
                    isActive={type==='withdraw'}
                    activeColor="red">

                        <img src={outcomeImg} alt="Withdraw" />
                        <span>Withdraw</span>

                    </RadioBox>
                </TransactionTypeContainer>

                <input
                placeholder="Category"
                type="text"
                onChange={event => setCategory(event.target.value)}/>

                <button type="submit">Create</button>
            </Container>

      </Modal>
    )
}