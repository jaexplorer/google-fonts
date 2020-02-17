import styled from "styled-components";

export const ItemContainer = styled.div`
  width: calc(100% - 30px);
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid #dadce0;
  padding: 15px;
  position: relative;
  z-index: 20;
`;

export const FontTitle = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Author = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const FontText = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 40px;
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
