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

const ResetIcon = () => {
  return (
    <StyledSvg x="0px" y="0px" width="36px" height="36px" viewBox="0 0 36 36">
      <path
        fill="#FFFFFF"
        d="M36,14H24l4.8-4.8C26.2,5.9,22.3,4,18,4c-3.9,0-7.4,1.6-9.9,4.1C5.6,10.6,4,14.1,4,18c0,7.7,6.3,14,14,14
	c3.8,0,7.3-1.6,9.9-4.1l2.8,2.8C27.4,34,22.9,36,18,36C8.1,36,0,27.9,0,18c0-5,2-9.5,5.3-12.7C8.5,2,13,0,18,0
	c5.4,0,10.3,2.4,13.7,6.3L36,2V14z"
      />
    </StyledSvg>
  );
};

export default ResetIcon;
