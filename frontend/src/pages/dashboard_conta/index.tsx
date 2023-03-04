import React, { useState } from "react";
import { Container, ContainerOpcoes, ContainerSaldo } from "./style";
import { CardProfile } from "../../components/card_profile";
import { CardContas } from "../../components/card_conta";
import { ThemeButton } from "../../components/buttons";
import { ModalGenerico } from "../../components/modal";
import { Movimentacao } from "../movimentacao";
import { Header } from "../../components/header";

interface Props {
  user: any;
}

export const DashboardConta = () => {
  const [open, setOpen] = useState(true);
  const [tipo, setTipo] = useState("");
  return (
    <Container id="ancora">
      <ContainerSaldo>
        <h1>Saldo</h1>
        <p>valor informado</p>
      </ContainerSaldo>
      <ContainerOpcoes>
        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            console.log("Botão auto");
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
            console.log("Botão auto");
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
            console.log("Botão auto");
          }}
        >
          Transferir
        </ThemeButton>

        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            setTipo("extrato");
            setOpen(true);
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
