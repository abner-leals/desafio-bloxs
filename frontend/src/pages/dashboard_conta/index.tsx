import { useEffect, useState } from "react";
import { Container, ContainerOpcoes, ContainerSaldo } from "./style";
import { ThemeButton } from "../../components/buttons";
import { Movimentacao } from "../movimentacao";
import { api } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import { ModalAviso } from "../../components/modal_aviso";

export const DashboardConta = () => {
  const [open, setOpen] = useState(false);
  const [openAviso, setOpenAviso] = useState(false);
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
  const [tipo, setTipo] = useState("");
  const [conta, setConta] = useState<any>();
  const { idConta } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`contas/${idConta}`)
      .then((res) => {
        setConta(res.data);
      })
      .catch((res) => {
        console.log(res);
        setConta({ saldo: "saldo indefinido" });
      });
    setConta(50);
  }, []);

  return (
    <Container id="ancora">
      <ModalAviso
        modal={modalContent}
        open={openAviso}
        setOpen={setOpenAviso}
        button={buttonContent}
      />
      <ContainerSaldo>
        <h1>{`Saldo R$ ${conta?.saldo}`}</h1>
      </ContainerSaldo>
      <ContainerOpcoes>
        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            setTipo(`contas/${idConta}/deposito/`);
            setOpen(true);
          }}
        >
          Depositar
        </ThemeButton>

        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            setTipo(`contas/${idConta}/saque/`);
            setOpen(true);
          }}
        >
          Sacar
        </ThemeButton>
        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            setModalContent({
              title: "Atenção!",
              titleSucess: "Deseja realmente alterar o status (Ativo)?",
              messageSucess: [],
            });
            setButtonContent({
              active: true,
              text: "Confirmar",
              onClick: () => {
                api
                  .patch(`contas/${idConta}/bloqueio`)
                  .then((res) => {
                    setModalContent({
                      title: "Sucesso!",
                      titleSucess: "Status alterado",
                      messageSucess: [],
                    });
                    setButtonContent({
                      active: false,
                      text: "",
                      onClick: () => {},
                    });
                  })
                  .catch(() => {
                    setModalContent({
                      title: "ErRos!",
                      titleSucess: "Não foi possível alterar o status",
                      messageSucess: [],
                    });
                  });
              },
            });

            setOpenAviso(true);
          }}
        >
          {conta.flagAtio ? "Bloquear" : "Desbloquear"}
        </ThemeButton>

        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            navigate(`dashboard-conta/extrato/${idConta}/`);
          }}
        >
          Extrato
        </ThemeButton>
      </ContainerOpcoes>
      <div className="button">
        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--grey0)"}
          size={"auto"}
          borderColor={"var(--grey0)"}
          handleClick={() => {
            console.log("Botão auto");
          }}
        >
          Voltar
        </ThemeButton>
        <Movimentacao tipo={tipo} open={open} setOpen={setOpen}></Movimentacao>
      </div>
    </Container>
  );
};
