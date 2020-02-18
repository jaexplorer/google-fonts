import React from "react";
import { ViewContainer, IconContainer } from "./ViewInput.styles";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import GridIcon from "./GridIcon";
import ListIcon from "./ListIcon";
import { useApolloClient } from "@apollo/react-hooks";

const QUERY = gql`
  query {
    gridView @client
  }
`;

const ViewInput = () => {
  const client = useApolloClient();

  const { data } = useQuery(QUERY);

  return (
    <ViewContainer>
      <IconContainer
        onClick={() =>
          client.writeData({ data: { gridView: !data?.gridView } })
        }
      >
        {data?.gridView ? <GridIcon /> : <ListIcon />}
      </IconContainer>
    </ViewContainer>
  );
};

export default ViewInput;
