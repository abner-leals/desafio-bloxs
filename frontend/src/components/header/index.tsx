import React from "react";
import { Cabecalho } from "./style";
import { ThemeButton } from "../buttons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Cabecalho>
      <ThemeButton
        backGroundColor={"var(--whiteFixed)"}
        color={"var(--grey0)"}
        size={"auto"}
        borderColor={"var(--grey0)"}
        handleClick={() => {
          localStorage.removeItem("@usuario");
          navigate("/");
        }}
      >
        Sair
      </ThemeButton>
    </Cabecalho>
  );
};
