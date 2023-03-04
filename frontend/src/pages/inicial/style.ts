import styled from "styled-components";

export const ContainerFundo = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey8);
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 80%;
  height: 80%;
  padding: 2rem;
  background-color: var(--grey8);
  margin: auto;
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
