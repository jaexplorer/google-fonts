import gql from "graphql-tag";

export const typeDefs = gql`
  type Font {
    family: String
  }

  type Query {
    fonts: [Font]
  }
`;
