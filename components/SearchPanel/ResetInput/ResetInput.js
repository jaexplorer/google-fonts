import React from "react";
import { ResetContainer, IconContainer } from "./ResetInput.styles";
import ResetIcon from "./ResetIcon";

const ResetInput = () => {
  return (
    <ResetContainer>
      <IconContainer>
        <ResetIcon />
      </IconContainer>
    </ResetContainer>
  );
};

export default ResetInput;
