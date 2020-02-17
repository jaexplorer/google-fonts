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

const ListIcon = () => {
  return (
    <StyledSvg x="0px" y="0px" width="36px" height="36px" viewBox="0 0 36 36">
      <g>
        <g>
          <path
            fill="#FFFFFF"
            d="M0,7c0,0.5,0.5,1,1,1h6c0.5,0,1-0.5,1-1V1c0-0.5-0.5-1-1-1H1C0.5,0,0,0.5,0,1V7z"
          />
        </g>
        <g>
          <path
            fill="#FFFFFF"
            d="M0,35c0,0.5,0.5,1,1,1h6c0.5,0,1-0.5,1-1v-6c0-0.5-0.5-1-1-1H1c-0.5,0-1,0.5-1,1V35z"
          />
        </g>
        <g>
          <path
            fill="#FFFFFF"
            d="M0,21c0,0.5,0.5,1,1,1h6c0.5,0,1-0.5,1-1v-6c0-0.5-0.5-1-1-1H1c-0.5,0-1,0.5-1,1V21z"
          />
        </g>
        <g>
          <path
            fill="#FFFFFF"
            d="M14,35c0,0.5,0.5,1,1,1h20c0.5,0,1-0.5,1-1v-6c0-0.5-0.5-1-1-1H15c-0.5,0-1,0.5-1,1V35z"
          />
        </g>
        <g>
          <path
            fill="#FFFFFF"
            d="M14,21c0,0.5,0.5,1,1,1h20c0.5,0,1-0.5,1-1v-6c0-0.5-0.5-1-1-1H15c-0.5,0-1,0.5-1,1V21z"
          />
        </g>
        <g>
          <path
            fill="#FFFFFF"
            d="M14,7c0,0.5,0.5,1,1,1h20c0.5,0,1-0.5,1-1V1c0-0.5-0.5-1-1-1H15c-0.5,0-1,0.5-1,1V7z"
          />
        </g>
      </g>
    </StyledSvg>
  );
};

export default ListIcon;
