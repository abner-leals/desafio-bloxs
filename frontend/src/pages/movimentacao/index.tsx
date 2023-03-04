import React from "react";
import { ModalGenerico } from "../../components/modal";
import { InputMask } from "../../components/inputs";
import { ThemeButton } from "../../components/buttons";
import { Container, ContainerBotoes } from "./style";
interface Props {
  open: boolean;
  setOpen: any;
  tipo: string;
}
export const Movimentacao = ({ tipo, open, setOpen }: Props) => {
  return (
    <ModalGenerico open={open} setOpen={setOpen}>
      <Container>
        <h3>Informe o valor</h3>
        <InputMask choseWidth="auto" placeholder={tipo} />
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
              console.log("Botão auto");
            }}
          >
            Confirmar
          </ThemeButton>
        </ContainerBotoes>
      </Container>
    </ModalGenerico>
  );
};
