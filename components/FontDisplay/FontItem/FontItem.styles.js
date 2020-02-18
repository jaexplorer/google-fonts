import styled, { keyframes } from "styled-components";

export const keyFrameExampleOne = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  min-height: 300px;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid #dadce0;
  padding: 15px;
  position: relative;
  z-index: 20;
  animation: ${keyFrameExampleOne} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  box-sizing: border-box;
`;

export const FontTitle = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const FontText = styled.div`
  color: rgba(0, 0, 0, 0.87);
  /* font-size: 30px; */
  font-weight: 400;
  line-height: 1.1;
  word-wrap: break-word;
`;

export const AddButton = styled.div`
  color: white;
  background: #ff5252;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;
