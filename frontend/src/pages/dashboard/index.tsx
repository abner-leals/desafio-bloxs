import React from "react";
import { Container, ContainerContas } from "./style";
import { CardProfile } from "../../components/card_profile";
import { CardContas } from "../../components/card_conta";
import { ThemeButton } from "../../components/buttons";
import { Header } from "../../components/header";
const pessoa = {
  idPessoa: 5,
  contas: [],
  username: "051.080.005-78",
  cpf: "051.080.005-78",
  nome: "Anderson Silva",
  dataNascimento: "25/01/2005",
};

export const DashboardPessoa = () => {
  let user: any = localStorage.getItem("@usuario");
  if (!user) {
    user = pessoa;
  }
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
