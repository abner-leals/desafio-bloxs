import Modal from "react-modal";
import { Container } from "./style";
import "./style.css";

interface Props {
  open: boolean;
  setOpen: any;
  children: any;
}

export const ModalGenerico = ({ open, setOpen, children }: Props) => {
  Modal.setAppElement("#root");
  <button onClick={toggleModalOpen}>Open Modal</button>;

  function toggleModalOpen() {
    setOpen(!open);
  }

  return (
    <Container>
      <Modal
        isOpen={open}
        onRequestClose={toggleModalOpen}
        contentLabel="Movimentar Conta"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        {children}
      </Modal>
    </Container>
  );
};
