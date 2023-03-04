import React, { useState } from "react";
import { InputMask } from "../../components/inputs";
import { formataCPF } from "../../utils";
import { Container, FormRegistro } from "./style";
import { ThemeButton } from "../../components/buttons";

export const RegistroPessoa = () => {
  const [valueCPF, setValueCPF] = useState("");
  return (
    <Container>
      <FormRegistro>
        <h1>Preencha os dados abaixo e comece já.</h1>
        <InputMask
          type="text"
          labelText="Nome Completo"
          placeholder="Informe seu nome aqui"
          choseWidth="100vw"
        />
        <InputMask
          type="text"
          labelText="CPF"
          placeholder="000.000.000-00"
          choseWidth="100vw"
          value={valueCPF}
          onChange={(e: any) => {
            setValueCPF(
              formataCPF(e.target.value.replace(/[^\d]/g, "").substring(0, 11))
            );
          }}
        />

        <InputMask
          type="date"
          labelText="Data de nascimento"
          placeholder="00/00/0000"
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
