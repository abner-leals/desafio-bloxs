import React from "react";
import { Container, ContainerContas } from "./style";
import { CardProfile } from "../../components/card_profile";
import { CardContas } from "../../components/card_conta";
import { ThemeButton } from "../../components/buttons";
import { Header } from "../../components/header";

interface Props {
  user: any;
}

export const DashboardPessoa = ({ user }: Props) => {
  return (
    <Container>
      <Header />
      <CardProfile
        cpf={user.cpf}
        dataNascimento={user.dataNascimento}
        nome={user.nome}
      />
      <ContainerContas>
        {user.contas.map((conta: any) => {
          return <CardContas id={conta.idConta} apelido={conta.apelido} />;
        })}
      </ContainerContas>
    </Container>
  );
};
