import React from "react";
import styled from "styled-components";

export const StyledSvg = styled.svg`
  height: 20px;
  cursor: pointer;
  opacity: 0.6;
  padding-right: 10px;

  path {
    fill: black;
  }
`;

const SearchIcon = () => {
  return (
    <StyledSvg x="0px" y="0px" width="36px" height="36px" viewBox="0 0 36 36">
      <path
        fill="#FFFFFF"
        d="M36,33.2l-7.4-7.4c2.1-2.7,3.4-6.1,3.4-9.8c0-8.8-7.2-16-16-16S0,7.2,0,16s7.2,16,16,16c3.7,0,7.1-1.3,9.8-3.4
      l7.4,7.4L36,33.2z M4,16C4,9.4,9.4,4,16,4s12,5.4,12,12s-5.4,12-12,12S4,22.6,4,16z"
      />
    </StyledSvg>
  );
};

export default SearchIcon;
