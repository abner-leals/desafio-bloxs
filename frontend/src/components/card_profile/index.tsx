import React from "react";
import { CardStyled } from "./style";
import { ThemeButton } from "../buttons";
interface Props {
  cpf: any;
  nome: string;
  dataNascimento: string;
}
export const CardProfile = ({ cpf, nome, dataNascimento }: Props) => {
  const data = new Date(dataNascimento);
  dataNascimento = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return (
    <CardStyled>
      <p>Meu Dados</p>
      <h3>Nome - [ {nome} ]</h3>
      <div>
        Usuário - <p> {cpf}</p>
      </div>
      <div>
        Nascimento - <p> {dataNascimento.replace(/.{0,4}$/, "****")}</p>
      </div>

      <ThemeButton
        backGroundColor={"var(--whiteFixed)"}
        color={"var(--grey0)"}
        size={"auto"}
        borderColor={"var(--grey0)"}
        handleClick={() => {
          console.log("Botão auto");
        }}
      >
        Nova Conta
      </ThemeButton>
    </CardStyled>
  );
};
