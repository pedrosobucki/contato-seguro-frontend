import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import {NewTransactionModal} from './components/NewTransactionModal/index';
import {UsersProvider } from "./hooks/useUsers";
import { NewUserModal } from "./components/NewUserModal";

export function App() {

  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)

  function handleOpenNewUserModal(){
    setIsNewUserModalOpen(true)
    console.log('open')

  }

  function handleCloseNewUserModal(){
    setIsNewUserModalOpen(false)
    console.log('close')

  }

  return (
    <UsersProvider>
      <Header />

      <Dashboard onOpenNewUserModal={handleOpenNewUserModal}/>

      <NewUserModal
        isOpen={isNewUserModalOpen}
        onRequestClose={handleCloseNewUserModal}
      />

      <GlobalStyle />
    </UsersProvider>
  );
}