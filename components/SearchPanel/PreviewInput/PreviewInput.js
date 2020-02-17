import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { PreviewForm, Input } from "./PreviewInput.styles";

const MUTATION = gql`
  mutation UpdatePreviewInput($input: String!) {
    updatePreviewInput(input: $input)
  }
`;

const PreviewInput = () => {
  const [updatePreviewInput] = useMutation(MUTATION);

  return (
    <PreviewForm>
      <Input
        type="search"
        placeholder="Type something"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellcheck="off"
        onChange={e =>
          updatePreviewInput({ variables: { input: e.target.value } })
        }
      />
    </PreviewForm>
  );
};

export default PreviewInput;
