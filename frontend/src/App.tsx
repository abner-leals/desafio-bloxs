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
import { CadastroConta } from "./pages/cadastro_conta";
import { Login } from "./pages/inicial";
import { Route, Routes, BrowserRouter, useRoutes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPessoa />} />
        <Route path="/dashboard-conta/:idConta" element={<DashboardConta />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>

//       <Routes>
//         <Route path=":id" element={<UserProfile />} />
//         <Route path="me" element={<OwnUserProfile />} />
//       </Routes>
//     </div>
//   );
// }
export default App;
