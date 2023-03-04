import React, { Dispatch, SetStateAction } from "react";
import { ModalGenerico } from "../modal";
import { InputMask } from "../inputs";
import { ThemeButton } from "../buttons";
import { Container, ContainerBotoes } from "./style";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modal: { title: string; titleSucess: string; messageSucess: string[] };
  button?: {
    active: boolean;
    text: string;
    onClick: () => void;
  };
}
export const ModalAviso = ({ modal, open, setOpen, button }: Props) => {
  return (
    <ModalGenerico open={open} setOpen={setOpen}>
      <Container>
        {modal && (
          <>
            <div className="titleSucessContainer">
              <p className="titleSucess">{modal.title}</p>
              <button onClick={() => setOpen(false)}>X</button>
            </div>
            <p className="titleSucess">{modal.titleSucess} </p>
            <div className="message">
              {modal.messageSucess.map((msg) => {
                return <p className="messageSucess">{msg}</p>;
              })}
            </div>
          </>
        )}
        {button?.active && (
          <ThemeButton
            backGroundColor={"var(--brand1)"}
            color={"var(--whiteFixed)"}
            size={"medium50"}
            borderColor={"var(--brand1)"}
            handleClick={button.onClick}
          >
            {button.text}
          </ThemeButton>
        )}
      </Container>
    </ModalGenerico>
  );
};
