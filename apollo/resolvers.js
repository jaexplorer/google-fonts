const searchPanel = {
  id: "1",
  searchInput: "",
  previewInput: "",
  sizeInput: "20px",
  gridView: true,
};

export const resolvers = {
  Query: {
    searchPanel: () => searchPanel,
    fonts: (_, __, { dataSources }) => dataSources.fontsAPI.getFonts()
  },
  Mutation: {
    updateSearchInput: (_source, { input }) => {
      searchPanel.searchInput = input;
      return input;
    },
    updatePreviewInput: (_source, { input }) => {
      searchPanel.previewInput = input;
      return input;
    },
    updateSizeInput: (_source, { input }) => {
      searchPanel.sizeInput = input;
      return input;
    },
    toggleView: (_source, { gridView }) => {
      searchPanel.gridView = gridView;
      return searchPanel;
    },
  },
};
