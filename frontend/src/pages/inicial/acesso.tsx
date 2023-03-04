import React, { useState } from "react";
import { Container, ContainerFundo } from "./style";
import { InputMask } from "../../components/inputs";
import { ThemeButton } from "../../components/buttons";
import { formataCPF } from "../../utils";
import { api } from "../../services";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo Obrigatório"),
});

const onSubmitFunction = (data: any) => {
  api.post("/login", data).then((res) => {
    console.log(res);
  });
};

export const PaginaAcesso = () => {
  const [cpf, setCpf] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <ContainerFundo>
      <Container>
        <h1>M$Conta</h1>
        <p>Gerencie as suas contas em um só app, prático e rápido.</p>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h3>Acesse suas contas </h3>
          <InputMask
            type="text"
            labelText="CPF"
            placeholder="000.000.000-00"
            choseWidth={"100vw"}
            value={cpf}
            fieldContext={register("username")}
            onChange={(e: any) => {
              setCpf(
                formataCPF(
                  e.target.value.replace(/[^\d]/g, "").substring(0, 11)
                )
              );
            }}
          />
          <div>
            <ThemeButton
              backGroundColor={"var(--whiteFixed)"}
              color={"var(--grey0)"}
              type="submit"
              size={"auto"}
              borderColor={"var(--grey0)"}
              handleClick={() => {
                console.log("inicio");
              }}
            >
              Acessar
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
              Cadastrar-se
            </ThemeButton>
          </div>
        </form>
      </Container>
    </ContainerFundo>
  );
};
