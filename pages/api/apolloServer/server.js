import { ApolloServer } from "apollo-server-micro";
import { schema } from "./schema";
import { FontsAPI } from "./FontsAPI";

const dataSources = () => ({
  fontsAPI: new FontsAPI(),
});

const apolloServer = new ApolloServer({
  schema,
  dataSources,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/apolloServer/server" });
