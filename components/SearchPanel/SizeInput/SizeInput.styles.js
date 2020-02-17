import styled from "styled-components";

export const SizeContainer = styled.div`
  height: 100%;
  width: 100px;
  @media screen and (max-width: 699px) {
    display: none;
  }
`;

export const CurrentSize = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const Size = styled.div`
  color: #3c4043;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  width: 100%;
  border-left: 1px solid #dadce0;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #ff5252;
  position: relative;
  font-size: 13px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const Dropdown = styled.div`
  position: absolute;
  margin-top: 15px;
  height: max-content;
  max-height: 200px;
  width: 95px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 15px;
  overflow: scroll;
  z-index: 60;

  &.open {
    display: block;
  }

  &.closed {
    display: none;
  }
`;

export const DropdownItem = styled.div`
  width: calc(100% - 20px);
  height: 50px;
  color: #3c4043;
  font-size: 14px;
  font-weight: 500;
  background: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
  &:hover {
    background: lightgray;
  }
  cursor: pointer;
`;
