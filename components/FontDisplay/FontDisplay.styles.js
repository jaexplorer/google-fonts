import styled from "styled-components";

export const DisplayContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  z-index: 20;

  @media screen and (max-width: 1199px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 899px) {
    grid-template-columns: auto;
  }
`;
