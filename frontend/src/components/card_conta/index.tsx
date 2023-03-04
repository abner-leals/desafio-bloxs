import React from "react";
import { CardStyled } from "./style";
import { useNavigate } from "react-router-dom";
interface Props {
  id: string | number;
  apelido?: string;
}
export const CardContas = ({ id, apelido }: Props) => {
  const navigate = useNavigate();
  return (
    <CardStyled
      onClick={() => {
        console.log("clicou oard");
        navigate(`/dashboar-conta/${id}`);
      }}
    >
      <p>Clique para visualizar o saldo</p>
      <h3>Número da Conta - [ {id} ]</h3>
      {apelido && (
        <div>
          <p className="apelido"> Apelido - {apelido} </p>
        </div>
      )}{" "}
    </CardStyled>
  );
};
