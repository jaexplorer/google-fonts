import React from "react";
import styled from "styled-components";

export const StyledSvg = styled.svg`
  height: 20px;
  cursor: pointer;
  opacity: 0.6;
  padding-right: 10px;
  transform: rotate(-90deg);
  position: relative;
  top: -5px;

  path {
    fill: black;
  }
`;

const SearchIcon = () => {
  return (
    <StyledSvg x="0px" y="0px" width="36px" height="36px" viewBox="0 0 36 36">
      <polygon
        fill="FFFFFF"
        points="18,0 15.2,2.8 28.3,16 0,16 0,20 28.3,20 15.2,33.2 18,36 36,18 "
      />
    </StyledSvg>
  );
};

export default SearchIcon;
