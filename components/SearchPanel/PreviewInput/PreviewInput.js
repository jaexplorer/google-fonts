import React from "react";
import { PreviewForm, Input } from "./PreviewInput.styles";
import { useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  query {
    previewInput @client
  }
`;

const PreviewInput = () => {
  const client = useApolloClient();
  const { data } = useQuery(QUERY);

  return (
    <PreviewForm onSubmit={e => e.preventDefault()}>
      <Input
        type="search"
        placeholder="Type something"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellcheck="off"
        value={data?.previewInput}
        onChange={e =>
          client.writeData({ data: { previewInput: e.target.value } })
        }
      />
    </PreviewForm>
  );
};

export default PreviewInput;
