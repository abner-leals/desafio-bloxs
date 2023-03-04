import React from "react";
import { CardStyled } from "./style";
interface Props {
  id: string | number;
  apelido?: string;
}
export const CardContas = ({ id, apelido }: Props) => {
  return (
    <CardStyled>
      <p>Clique para visualizar o saldo</p>
      <h3>Número da Conta - [ {id} ]</h3>
      {apelido && (
        <div>
          <p className="apelido"> Apelido - {apelido} </p>
        </div>
      )}{" "}
      {/* se hover */}
    </CardStyled>
  );
};
