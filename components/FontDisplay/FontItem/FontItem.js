import React from "react";
import Head from "next/head";
import {
  ItemContainer,
  FontTitle,
  FontText,
  AddButton,
} from "./FontItem.styles";

const FontItem = ({ font, sizeInput, previewInput }) => {
  return (
    <ItemContainer>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href={`http://fonts.googleapis.com/css?family=${font.family
            .split(" ")
            .join("+")}:300,400&display=swap`}
        />
      </Head>

      <FontTitle>{font.family}</FontTitle>
      <FontText
        style={{
          fontFamily: `${font.family}`,
          fontSize: `${sizeInput}`,
        }}
      >
        {previewInput !== ""
          ? previewInput
          : "All their equipment and instruments are alive"}
      </FontText>
      <AddButton>+</AddButton>
    </ItemContainer>
  );
};

export default FontItem;
