import React, { useEffect, useState } from "react";
import { Container, ContainerContas } from "./style";
import { CardProfile } from "../../components/card_profile";
import { CardContas } from "../../components/card_conta";
import { ThemeButton } from "../../components/buttons";
import { Header } from "../../components/header";
import { CardExtrato } from "../../components/card_extrato";
import { useParams } from "react-router-dom";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";

export const MovimentacaoExtrato = () => {
  const navi = useNavigate();
  const [contas, setConta] = useState<any>({
    limiteSaqueDiario: "5000.00",
    idPessoa: 1,
    tipoConta: 12,
    idConta: 1,
    apelido: null,
    transacoes: [
      {
        idTransacao: 1,
        valor: "500.00",
        dataTransacao: "2023-03-04T20:24:49.656910Z",
        tipo: "Depósito",
        idConta: 1,
      },
      {
        idTransacao: 2,
        valor: "500.00",
        dataTransacao: "2023-03-04T20:24:51.154961Z",
        tipo: "Depósito",
        idConta: 1,
      },
      {
        idTransacao: 3,
        valor: "-44.00",
        dataTransacao: "2023-03-04T20:25:09.974431Z",
        tipo: "Saque",
        idConta: 1,
      },
      {
        idTransacao: 4,
        valor: "-44.00",
        dataTransacao: "2023-03-04T20:25:10.826271Z",
        tipo: "Saque",
        idConta: 1,
      },
      {
        idTransacao: 5,
        valor: "-44.00",
        dataTransacao: "2023-03-04T20:25:11.166650Z",
        tipo: "Saque",
        idConta: 1,
      },
      {
        idTransacao: 6,
        valor: "-44.00",
        dataTransacao: "2023-03-04T20:25:11.687513Z",
        tipo: "Saque",
        idConta: 1,
      },
    ],
  });
  const { idConta } = useParams();
  console.log(idConta);

  useEffect(() => {
    api
      .get(`contas/${idConta}`)
      .then((res) => {
        setConta(res.data);
      })
      .catch((res) => {
        console.log(res);
        setConta({
          limiteSaqueDiario: "5000.00",
          idPessoa: 1,
          tipoConta: 12,
          idConta: 1,
          apelido: null,
          transacoes: [
            {
              idTransacao: 1,
              valor: "500.00",
              dataTransacao: "2023-03-04T20:24:49.656910Z",
              tipo: "Depósito",
              idConta: 1,
            },
            {
              idTransacao: 2,
              valor: "500.00",
              dataTransacao: "2023-03-04T20:24:51.154961Z",
              tipo: "Depósito",
              idConta: 1,
            },
            {
              idTransacao: 3,
              valor: "-44.00",
              dataTransacao: "2023-03-04T20:25:09.974431Z",
              tipo: "Saque",
              idConta: 1,
            },
            {
              idTransacao: 4,
              valor: "-44.00",
              dataTransacao: "2023-03-04T20:25:10.826271Z",
              tipo: "Saque",
              idConta: 1,
            },
            {
              idTransacao: 5,
              valor: "-44.00",
              dataTransacao: "2023-03-04T20:25:11.166650Z",
              tipo: "Saque",
              idConta: 1,
            },
            {
              idTransacao: 6,
              valor: "-44.00",
              dataTransacao: "2023-03-04T20:25:11.687513Z",
              tipo: "Saque",
              idConta: 1,
            },
          ],
        });
      });
  }, []);

  return (
    <Container>
      <CardContas id={contas.idConta} apelido={contas.apelido} />
      <ContainerContas>
        {contas.transacoes.map((conta: any) => {
          return (
            <CardExtrato
              key={conta.idTransacao}
              dataTransacao={conta.dataTransacao}
              tipo={conta.tipo}
              valor={conta.valor}
            />
          );
        })}
      </ContainerContas>
      <ThemeButton
        backGroundColor={"var(--whiteFixed)"}
        color={"var(--grey0)"}
        size={"auto"}
        borderColor={"var(--grey0)"}
        handleClick={() => {
          navi(-1);
        }}
      >
        Voltar
      </ThemeButton>
    </Container>
  );
};
