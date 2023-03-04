import styled from "styled-components";
export const ContainerContas = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--grey5);
  height: 100vh;

  padding: auto;
  padding-top: 50px;
  button {
    position: absolute;
    top: 10px;
    right: 15px;
  }
`;
