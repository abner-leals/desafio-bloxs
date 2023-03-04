import React, { useState } from "react";
import { CardStyled } from "./style";
import { ThemeButton } from "../buttons";
import { Link } from "react-router-dom";
import { ModalGenerico } from "../modal";
import { CadastroConta } from "../../pages/cadastro_conta";
interface Props {
  cpf: any;
  nome: string;
  dataNascimento: string;
}
export const CardProfile = ({ cpf, nome, dataNascimento }: Props) => {
  const data = new Date(dataNascimento);
  const [open, setOpen] = useState(false);
  dataNascimento = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return (
    <CardStyled>
      <ModalGenerico open={open} setOpen={setOpen}>
        <CadastroConta />
      </ModalGenerico>
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
          setOpen(true);
        }}
      >
        Nova Conta
      </ThemeButton>
    </CardStyled>
  );
};
