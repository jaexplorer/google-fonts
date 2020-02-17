import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import SearchIcon from "./SearchIcon";
import { SearchForm, Input, IconContainer } from "./SearchInput.styles";

const MUTATION = gql`
  mutation UpdateSearchInput($input: String!) {
    updateSearchInput(input: $input)
  }
`;

const SearchInput = () => {
  const [updateSearchInput] = useMutation(MUTATION);

  return (
    <SearchForm>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <Input
        type="search"
        placeholder="Search fonts"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellcheck="off"
        onChange={e =>
          updateSearchInput({ variables: { input: e.target.value } })
        }
      />
    </SearchForm>
  );
};

export default SearchInput;
