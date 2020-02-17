import React from "react";
import styled from "styled-components";

export const StyledSvg = styled.svg`
  position: absolute;
  left: 13px;
  top: 25px;
  height: 14px;
  cursor: pointer;
  display: none;
  opacity: 0.6;

  rect {
    fill: black;
  }
  @media screen and (max-width: 699px) {
    display: block;
  }
`;

const MenuIcon = () => {
  return (
    <StyledSvg x="0px" y="0px" width="36px" height="28px" viewBox="0 0 36 28">
      <g id="menuIcon">
        <rect fill="#FFFFFF" width="36" height="4" />
        <rect y="10" fill="#FFFFFF" width="36" height="4" />
        <rect y="20" fill="#FFFFFF" width="36" height="4" />
      </g>
    </StyledSvg>
  );
};

export default MenuIcon;
