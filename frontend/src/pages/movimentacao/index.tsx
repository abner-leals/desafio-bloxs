import React, { useState } from "react";
import { ModalGenerico } from "../../components/modal";
import { InputMask } from "../../components/inputs";
import { ThemeButton } from "../../components/buttons";
import { Container, ContainerBotoes } from "./style";
import { api } from "../../services";
interface Props {
  open: boolean;
  setOpen: any;
  tipo: string;
}
export const Movimentacao = ({ tipo, open, setOpen }: Props) => {
  const [valor, setvalor] = useState("");
  return (
    <ModalGenerico open={open} setOpen={setOpen}>
      <Container>
        <h3>Informe o valor</h3>
        <InputMask
          choseWidth="auto"
          placeholder={tipo}
          value={valor}
          onChange={(e) => {
            setvalor(e.target.value);
          }}
        />
        <ContainerBotoes>
          <ThemeButton
            backGroundColor={"var(--whiteFixed)"}
            color={"var(--grey0)"}
            size={"auto"}
            borderColor={"var(--grey0)"}
            handleClick={() => {
              setOpen(false);
            }}
          >
            Sair
          </ThemeButton>
          <ThemeButton
            backGroundColor={"var(--whiteFixed)"}
            color={"var(--grey0)"}
            size={"auto"}
            borderColor={"var(--grey0)"}
            handleClick={() => {
              api.patch(tipo, { valor });
            }}
          >
            Confirmar
          </ThemeButton>
        </ContainerBotoes>
      </Container>
    </ModalGenerico>
  );
};
