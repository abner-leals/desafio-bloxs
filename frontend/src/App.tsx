import { useState } from "react";
import { CardContas } from "./components/card_conta";
import { CardProfile } from "./components/card_profile";
import { ModalGenerico } from "./components/modal";
import { DashboardPessoa } from "./pages/dashboard";
import { DashboardConta } from "./pages/dashboard_conta";
import { PaginaAcesso } from "./pages/inicial/acesso";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";
import "./App.css";
import { RegistroPessoa } from "./pages/cadastro_pessoa";
import { RegistroConta } from "./pages/cadastro_conta";
function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <PaginaAcesso />
    </div>
  );
}

export default App;
