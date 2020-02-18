export const resolvers = {
  Query: {
    fonts: (_, __, { dataSources }) => dataSources.fontsAPI.getFonts(),
  },
};
