import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormRegistro = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  padding: 15px;
  gap: 10px;
  h1 {
    font-size: 20px;
    margin: 15px 0;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 21.438rem;
  padding: 2.75rem 1.75rem;
  border-radius: 0.25rem;
  background-color: var(--grey10);

  .title {
    font-family: "Lexend";
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: var(--grey0);
  }
  a {
    font-family: "Inter";
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--grey2);
  }
  .registerLink {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (width>768px) {
    max-width: 25.75rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  margin-top: 0.5rem;
  .userInput {
    margin-bottom: 1.5rem;
  }
  .recoverLink {
    display: flex;
    justify-content: flex-end;
    padding-right: 1.5rem;
    width: 100%;
    margin-top: 0.563rem;
    margin-bottom: 1.313rem;
  }
  a {
    font-weight: 400;
  }
`;
