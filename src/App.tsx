import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import {NewTransactionModal} from './components/NewTransactionModal/index';
import {TransactionsProvider } from "./hooks/useTransactions";
import {UsersProvider } from "./hooks/useUsers";

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
      <Header onOpenNewTransactionModal={handleOpenNewUserModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewUserModalOpen}
        onRequestClose={handleCloseNewUserModal}
      />

      <GlobalStyle />
    </UsersProvider>
  );
}