import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    searchInput: String!
    previewInput: String!
    sizeInput: String!
    gridView: Boolean!
  }
`;
