import styled from "styled-components";

export const ViewContainer = styled.form`
  width: max-content;
  margin-left: 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 699px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  border-left: 1px solid #dadce0;
  height: 30px;
  padding-left: 15px;
  display: flex;
  align-items: center;
`;
