import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";

import { ThemeButton } from "../../components/buttons";
import { InputMask } from "../../components/inputs";
import { Container, Form, FormContainer } from "./style";
import { useState } from "react";
import { formataCPF } from "../../utils";
import { ModalAviso } from "../../components/modal_aviso";
import { useNavigate } from "react-router-dom";

interface IData {
  email?: string;
  password?: string;
}

export const Login = () => {
  const history = useNavigate();
  const [cpf, setCpf] = useState("");
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
    username: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IData) => {
    api
      .post("pessoas/login/", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("@usuario", JSON.stringify(res.data));
        history("/dashboard/");
      })
      .catch((err) => {
        setModalContent({
          title: "Error!",
          titleSucess:
            "Houve um erro na busca, verifique seu usuário e tente novamente",
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
          <h1 className="title">M$Conta</h1>
          <p>Gerencie as suas contas em um só app, prático e rápido.</p>

          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <InputMask
              type="text"
              labelText="Usuário"
              placeholder="000.000.000-00"
              fieldContext={register("username")}
              choseWidth="100vw"
              error={String(errors.username?.message)}
              className={"userInput"}
              value={cpf}
              onChange={(e: any) => {
                setCpf(
                  formataCPF(
                    e.target.value.replace(/[^\d]/g, "").substring(0, 11)
                  )
                );
              }}
            />

            <ThemeButton
              backGroundColor={"var(--brand1)"}
              color={"var(--whiteFixed)"}
              size={"big50"}
              borderColor={"var(--brand1)"}
              type="submit"
            >
              Entrar
            </ThemeButton>
          </Form>
          <div className="registerLink"></div>
          <ThemeButton
            backGroundColor={"var(--whiteFixed)"}
            color={"var(--grey0)"}
            size={"big50"}
            borderColor={"var(--grey4)"}
            type="submit"
            hoverColor={"var(--whiteFixed)"}
            hoverbackGroundColor={"var(--grey0)"}
            handleClick={() => {}}
          >
            Cadastrar
          </ThemeButton>
        </FormContainer>
      </Container>
    </>
  );
};
