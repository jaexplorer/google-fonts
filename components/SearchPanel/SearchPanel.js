import React from "react";
import { SearchContainer } from "./SearchPanel.styles";
import SearchInput from "./SearchInput/SearchInput";
import PreviewInput from "./PreviewInput/PreviewInput";
import SizeInput from "./SizeInput/SizeInput";
import ViewInput from "./ViewInput/ViewInput";
import ResetInput from "./ResetInput/ResetInput";

const SearchPanel = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <PreviewInput />
      <SizeInput />
      <ViewInput />
      <ResetInput />
    </SearchContainer>
  );
};

export default SearchPanel;
