import styled from "styled-components";

export const PageContainer = styled.div`
  padding-top: 30px;
  padding-left: 60px;
  padding-right: 60px;
  max-width: 1440px;
  margin: auto;
  position: relative;

  @media screen and (max-width: 699px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: white;
  border-top: 1px solid #dadce0;
  z-index: 70;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  text-align: center;
`;
