import React from "react";
import { Cabecalho } from "./style";
import { ThemeButton } from "../buttons";

export const Header = () => {
  return (
    <Cabecalho>
      <ThemeButton
        backGroundColor={"var(--whiteFixed)"}
        color={"var(--grey0)"}
        size={"auto"}
        borderColor={"var(--grey0)"}
        handleClick={() => {
          console.log("Botão auto");
        }}
      >
        Sair
      </ThemeButton>
    </Cabecalho>
  );
};
