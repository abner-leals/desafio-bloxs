import React from "react";
import { CardStyled } from "./style";

interface Props {
  valor: string;
  dataTransacao: string;
  tipo: string;
}
export const CardExtrato = ({ valor, tipo, dataTransacao }: Props) => {
  return (
    <CardStyled>
      <h3>Valor - [ R$ {valor} ]</h3>
      <h3>Tipo - [ {tipo} ]</h3>
      <h3>Data - [ {new Date(dataTransacao).toLocaleString()}]</h3>
    </CardStyled>
  );
};
