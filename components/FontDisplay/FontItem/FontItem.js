import React from "react";
import {
  ItemContainer,
  FontTitle,
  Author,
  FontText,
  AddButton,
} from "./FontItem.styles";

const FontItem = () => {
  return (
    <ItemContainer>
      <FontTitle>Roboto</FontTitle>
      <Author>Christian Robertson</Author>
      <FontText>All their equipment and instruments are alive</FontText>
      <AddButton>+</AddButton>
    </ItemContainer>
  );
};

export default FontItem;
