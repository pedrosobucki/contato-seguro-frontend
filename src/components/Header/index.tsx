import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header( {onOpenNewTransactionModal} : HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="contatoseguro"/>
            </Content>
        </Container>
    )
}