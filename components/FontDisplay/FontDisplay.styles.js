import styled from "styled-components";

export const DisplayContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  z-index: 20;
  transition: all 0.6s cubic-bezier(0.4, 0.2, 0, 1);

  &.grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &.list {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1199px) {
    &.grid {
      grid-template-columns: 1fr 1fr;
    }
    &.list {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 899px) {
    grid-template-columns: 1fr;
  }
`;
