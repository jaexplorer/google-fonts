import React from "react";
import SearchIcon from "./SearchIcon";
import { SearchForm, Input, IconContainer } from "./SearchInput.styles";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useApolloClient } from "@apollo/react-hooks";

const QUERY = gql`
  query {
    searchInput @client
  }
`;

const SearchInput = () => {
  const client = useApolloClient();
  const { data } = useQuery(QUERY);

  return (
    <SearchForm onSubmit={e => e.preventDefault()}>
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
        value={data?.searchInput}
        onChange={e =>
          client.writeData({ data: { searchInput: e.target.value } })
        }
      />
    </SearchForm>
  );
};

export default SearchInput;
