import gql from "graphql-tag";

export const typeDefs = gql`
  type Font {
    family: String
  }

  type SearchPanel {
    id: ID!
    searchInput: String!
    previewInput: String!
    sizeInput: String!
    gridView: Boolean!
  }

  type Query {
    searchPanel: SearchPanel!
    fonts: [Font]
  }

  type Mutation {
    updateSearchInput(input: String!): String
    updatePreviewInput(input: String!): String
    updateSizeInput(input: String!): String
    toggleView(id: String!, gridView: Boolean!): SearchPanel!
  }
`;
