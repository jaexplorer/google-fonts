import React from "react";
import { ViewContainer, IconContainer } from "./ViewInput.styles";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import GridIcon from "./GridIcon";
import ListIcon from "./ListIcon";

const QUERY = gql`
  query searchPanel {
    searchPanel {
      gridView
    }
  }
`;

const MUTATION = gql`
  mutation ToggleView($id: String!, $gridView: Boolean!) {
    toggleView(id: $id, gridView: $gridView) {
      id
      searchInput
      previewInput
      sizeInput
      gridView
    }
  }
`;

const ViewInput = () => {
  const { data } = useQuery(QUERY);
  const [toggleView] = useMutation(MUTATION);

  return (
    <ViewContainer>
      <IconContainer
        onClick={() =>
          toggleView({
            variables: { id: "1", gridView: !data?.searchPanel.gridView },
          })
        }
      >
        {data?.searchPanel.gridView ? <GridIcon /> : <ListIcon />}
      </IconContainer>
    </ViewContainer>
  );
};

export default ViewInput;
