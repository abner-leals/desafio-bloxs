import { useEffect, useState } from "react";
import { Container, ContainerOpcoes, ContainerSaldo } from "./style";
import { ThemeButton } from "../../components/buttons";
import { Movimentacao } from "../movimentacao";
import { api } from "../../services";
import { useNavigate, useParams } from "react-router-dom";

export const DashboardConta = () => {
  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState("");
  const [conta, setConta] = useState<any>();
  const { idConta } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`contas/${idConta}`)
      .then((res) => {
        setConta(res.data);
      })
      .catch((res) => {
        console.log(res);
        setConta({ saldo: "saldo indefinido" });
      });
    setConta(50);
  }, []);

  return (
    <Container id="ancora">
      <ContainerSaldo>
        <h1>{`Saldo R$ ${conta?.saldo}`}</h1>
      </ContainerSaldo>
      <ContainerOpcoes>
        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            setTipo(`contas/${idConta}/deposito/`);
            setOpen(true);
          }}
        >
          Depositar
        </ThemeButton>

        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            setTipo(`contas/${idConta}/saque/`);
            setOpen(true);
          }}
        >
          Sacar
        </ThemeButton>
        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            console.log("Bloqueado");
          }}
        >
          Bloquear
        </ThemeButton>

        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            navigate(`dashboard-conta/extrato/${idConta}/`);
          }}
        >
          Extrato
        </ThemeButton>
      </ContainerOpcoes>
      <div className="button">
        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            console.log("Botão auto");
          }}
        >
          Voltar
        </ThemeButton>
        <Movimentacao tipo={tipo} open={open} setOpen={setOpen}></Movimentacao>
      </div>
    </Container>
  );
};
