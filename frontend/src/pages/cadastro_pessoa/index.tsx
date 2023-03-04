import { useState } from "react";
import { InputMask } from "../../components/inputs";
import { formataCPF } from "../../utils";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";

import { ThemeButton } from "../../components/buttons";

import { ModalAviso } from "../../components/modal_aviso";
import { useNavigate } from "react-router-dom";
import { Container, Form, FormContainer } from "./style";

export const RegistroPessoa = () => {
  const [valueCPF, setValueCPF] = useState("");

  const history = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    titleSucess: "",
    messageSucess: [""],
  });
  const [buttonContent, setButtonContent] = useState({
    active: true,
    text: "Pagina Principal",
    onClick: () => {
      history("/");
    },
  });

  const formSchema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório"),
    cpf: yup.string().required("Campo Obrigatório"),
    dataNascimento: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: any) => {
    console.log(data);
    api
      .post("pessoas/", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("@usuario", JSON.stringify(res.data));
        history("/");
      })
      .catch((err) => {
        setModalContent({
          title: "Error!",
          titleSucess: "Houve um erro na conexão, verifique  e tente novamente",
          messageSucess: [err.response.data.message],
        });
        setOpen(true);
      });
  };

  return (
    <>
      <ModalAviso
        modal={modalContent}
        open={open}
        setOpen={setOpen}
        button={buttonContent}
      />
      <Container>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <h3>Preencha os dados abaixo e comece já.</h3>
            <InputMask
              type="Text"
              labelText="Nome"
              choseWidth="100vw"
              fieldContext={register("nome")}
              error={String(errors.nome?.message)}
              className={"userInput"}
            />
            <InputMask
              type="text"
              labelText="CPF"
              placeholder="000.000.000-00"
              choseWidth="100vw"
              value={valueCPF}
              onChange={(e: any) => {
                setValueCPF(
                  formataCPF(
                    e.target.value.replace(/[^\d]/g, "").substring(0, 11)
                  )
                );
              }}
              fieldContext={register("cpf")}
              error={String(errors.cpf?.message)}
              className={"userInput"}
            />
            <InputMask
              type="date"
              min="1"
              step="any"
              labelText="Limite de saque diario *"
              placeholder="Informe o limite aqui"
              choseWidth="100vw"
              fieldContext={register("dataNascimento")}
              error={String(errors.dataNascimento?.message)}
            />

            <ThemeButton
              backGroundColor={"var(--brand1)"}
              color={"var(--whiteFixed)"}
              size={"big50"}
              borderColor={"var(--brand1)"}
              type="submit"
            >
              Enviar
            </ThemeButton>
          </Form>
          <div className="registerLink"></div>
        </FormContainer>
      </Container>
    </>
  );
};
