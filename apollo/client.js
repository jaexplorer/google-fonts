import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { defaults } from "./defaults";
import { typeDefs } from "./typeDefs";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "http://localhost:3000/api/apolloServer/server",
      cache: new InMemoryCache().restore(initialState || {}),
      clientState: {
        defaults: defaults,
        resolvers: {},
        typeDefs: typeDefs,
      },
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
