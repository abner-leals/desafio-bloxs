import styled from "styled-components";
export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  padding: 1.125rem 1.375rem 2.688rem 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 32.5rem;
  background-color: var(--whiteFixed);
  .titleSucess {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;
    color: var(--grey1);
  }
  .titleSucessContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.625rem;
  }
  .titleSucessContainer button {
    background-color: var(--whiteFixed);
  }
  .messageSucess {
    font-family: "Inter";
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;
    color: var(--grey2);
  }
  .message {
    display: flex;
    flex-direction: column;
    gap: 5px;
    p {
      padding: 0;
      margin: 0;
    }
  }
`;
export const ContainerBotoes = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: 2rem 0;
  flex-direction: row;
`;
