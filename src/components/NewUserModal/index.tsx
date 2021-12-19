import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useState, useContext } from "react";
import { Save } from "@material-ui/icons";
import Modal from 'react-modal';
import {Multiselect} from 'multiselect-react-dropdown';

import closeImg from '../../assets/close.svg'
import { useUsers } from "../../hooks/useUsers";

interface NewUserModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface Company {
    id: number,
    company: string
}

export function NewUserModal({isOpen, onRequestClose}: NewUserModalProps){
    const {createUser} = useUsers()

    const [selectCompanies, setSelectCompanies] = useState([{id:1, name: "Empresa 1"}, {id:2, name: "Empresa 2"}, {id:3, name: "Empresa 3"}])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [birth_date, setBirth_date] = useState('')
    const [birth_city, setBirth_city] = useState('')
    const [companies, setCompanies] = useState([0])
    

    async function handleCreateNewUser(event: FormEvent){
        event.preventDefault();

        await createUser({ //waits insert in order to close modal
            name,
            email,
            telephone,
            birth_date,
            birth_city,
            companies
        })

        //reset modal values
        setName('')
        setEmail('')
        setTelephone('')
        setBirth_date('')
        setBirth_city('')
        setCompanies([0])

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
            onSubmit={handleCreateNewUser}>
                <h2>Cadastrar novo usuário</h2>

                <input
                placeholder="Nome"
                type="text"
                required
                onChange={event => setName(event.target.value)}/>

                <input
                placeholder="Email"
                type="text"
                required
                onChange={event => setEmail(event.target.value)}/>

                <input
                placeholder="Telefone"
                type="text"
                onChange={event => setTelephone(event.target.value)}/>

                <input
                placeholder="Cidade de nascimento"
                type="text"
                onChange={event => setBirth_city(event.target.value)}/>

                <input 
                placeholder="Data de nascimento"
                type="date"
                onChange={event => setBirth_date(new Date(event.target.value).toISOString().split('T')[0])}/>

                <Multiselect
                    placeholder="Empresas"

                    options={selectCompanies}
                    onSelect={event => {
                        console.log(event)
                        let selected:number[] = []

                        event.map((company:Company) => {
                            selected.push(company.id)
                            setCompanies(selected)
                        })
                    }}
                    onRemove={event => {
                        console.log(event)
                        let selected:number[] = []

                        event.map((company:Company) => {
                            selected.push(company.id)
                            setCompanies(selected)
                        })
                    }}
                    displayValue="name"
                />

                <button type="submit"><Save />Salvar</button>
            </Container>

      </Modal>
    )
}