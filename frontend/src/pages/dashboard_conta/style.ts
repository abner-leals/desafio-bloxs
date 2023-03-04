import styled from "styled-components";
export const ContainerSaldo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  max-width: 400px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ContainerOpcoes = styled.div`
  display: flex;

  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  max-width: 400px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  flex-wrap: wrap;
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
  .button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
