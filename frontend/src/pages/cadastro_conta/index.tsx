import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";

import { ThemeButton } from "../../components/buttons";
import { InputMask } from "../../components/inputs";

import { useState } from "react";
import { ModalAviso } from "../../components/modal_aviso";
import { useNavigate } from "react-router-dom";
import { Container, Form, FormContainer } from "./style";

export const CadastroConta = () => {
  const history = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    titleSucess: "",
    messageSucess: [""],
  });
  const [buttonContent, setButtonContent] = useState({
    active: false,
    text: "",
    onClick: () => {},
  });

  const formSchema = yup.object().shape({
    limiteSaqueDiario: yup.string().required("Campo Obrigatório"),
    tipoConta: yup.string().required("Campo Obrigatório"),
    apelido: yup.string(),
    idPessoa: yup.string(),
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
      .post("contas/", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("@usuario", JSON.stringify(res.data));
        history("/dashboard/");
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
              labelText="ID do usuário"
              choseWidth="100vw"
              fieldContext={register("idPessoa")}
              error={String(errors.idPessoa?.message)}
              className={"userInput"}
              value={1}
            />
            <InputMask
              type="Text"
              labelText="Apelido da Conta"
              placeholder="Informe o apelido aqui"
              choseWidth="100vw"
              maxLength={10}
              fieldContext={register("apelido")}
              error={String(errors.apelido?.message)}
              className={"userInput"}
            />
            <InputMask
              type="number"
              min="1"
              step="any"
              labelText="Limite de saque diario *"
              placeholder="Informe o limite aqui"
              choseWidth="100vw"
              fieldContext={register("limiteSaqueDiario")}
              error={String(errors.limiteSaqueDiario?.message)}
            />
            <InputMask
              type="number"
              labelText="Tipo de Conta *"
              placeholder="Tipo da conta - Somente o Numero"
              choseWidth="100vw"
              fieldContext={register("tipoConta")}
              error={String(errors.tipoConta?.message)}
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
