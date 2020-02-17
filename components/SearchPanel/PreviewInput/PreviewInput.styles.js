import styled from "styled-components";

export const PreviewForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  @media screen and (max-width: 599px) {
    display: none;
  }
`;

export const Input = styled.input`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  height: 30px;
  border: 0;
  width: 100%;
  padding-left: 20px;
  padding-right: 10px;
  border-left: 1px solid #dadce0;
`;
