import React from "react";
import { ResetContainer, IconContainer } from "./ResetInput.styles";
import ResetIcon from "./ResetIcon";
import { useApolloClient } from "@apollo/react-hooks";
import { defaults } from "../../../apollo/defaults";

const ResetInput = () => {
  const client = useApolloClient();

  const resetPanel = () => {
    client.writeData({ data: defaults });
  };

  return (
    <ResetContainer>
      <IconContainer onClick={() => resetPanel()}>
        <ResetIcon />
      </IconContainer>
    </ResetContainer>
  );
};

export default ResetInput;
