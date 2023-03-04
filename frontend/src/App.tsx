import { DashboardPessoa } from "./pages/dashboard";
import { DashboardConta } from "./pages/dashboard_conta";
import { GlobalStyle } from "./styles/global";
import "./App.css";
import { Login } from "./pages/inicial";
import { Route, Routes, BrowserRouter, useRoutes } from "react-router-dom";
import { MovimentacaoExtrato } from "./pages/movimentacao_extrato";
import { RegistroPessoa } from "./pages/cadastro_pessoa";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistroPessoa />} />
        <Route path="/dashboard" element={<DashboardPessoa />} />
        <Route path="/dashboard-conta/:idConta" element={<DashboardConta />} />
        <Route
          path="/dashboard-conta/extrato/:idConta"
          element={<MovimentacaoExtrato />}
        />
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
