import React, { useState } from "react";
import { InputMask } from "../../components/inputs";
import { formataCPF } from "../../utils";
import { Container, FormRegistro } from "./style";
import { ThemeButton } from "../../components/buttons";

export const RegistroConta = () => {
  return (
    <Container>
      <FormRegistro>
        <h1>Preencha os dados abaixo e comece já.</h1>
        <InputMask
          type="Text"
          labelText="Apelido da Conta"
          placeholder="Informe o apelido aqui"
          choseWidth="100vw"
          maxLength={10}
        />
        <InputMask
          type="number"
          labelText="Limite de saque diario *"
          placeholder="Informe o limite aqui"
          choseWidth="100vw"
        />
        <InputMask
          type="number"
          labelText="Tipo de Conta *"
          placeholder="Tipo da conta - Somente o Numero"
          choseWidth="100vw"
        />

        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            console.log("Botão auto");
          }}
        >
          Enviar
        </ThemeButton>
      </FormRegistro>
    </Container>
  );
};
