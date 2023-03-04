import styled from "styled-components";
export const CardStyled = styled.div`
  display: flex;
  border: 1px solid var(--grey5);
  flex-direction: column;
  min-width: 250px;
  max-width: 450px;
  gap: 5px;
  font-size: 15px;
  height: auto;
  padding: 10px;
  margin: 1rem;
  color: var(--grey2);
  border-radius: 5px;
  background-color: var(--grey7);
  justify-content: center;
  p {
    font-weight: 500;
    font-size: 16px;
  }
  .apelido {
    max-width: 10ch;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :hover {
    color: var(--grey0);
  }
`;
