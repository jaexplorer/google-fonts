import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { DisplayContainer } from "./FontDisplay.styles";
import FontItem from "./FontItem/FontItem";
import InfiniteScroll from "react-infinite-scroll-component";

const QUERY = gql`
  query {
    gridView @client
    sizeInput @client
    previewInput @client
    searchInput @client

    fonts {
      family
    }
  }
`;

const FontDisplay = () => {
  const [items, setItems] = useState(25);
  const { data } = useQuery(QUERY);

  useEffect(() => {
    window.onscroll = () => {
      if (
        !(
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        )
      ) {
        setItems(25);
      }
    };
  });

  return (
    <InfiniteScroll
      dataLength={items}
      next={() => setItems(items + 25)}
      hasMore={true}
      scrollThreshold={0.95}
    >
      <DisplayContainer className={`${data?.gridView ? "grid" : "list"}`}>
        {data?.fonts
          .filter(
            font =>
              font.family
                .toUpperCase()
                .indexOf(data?.searchInput.toUpperCase()) > -1
          )
          .slice(0, items)
          .map((font, index) => (
            <FontItem
              key={index}
              font={font}
              sizeInput={data?.sizeInput}
              previewInput={data?.previewInput}
            />
          ))}
      </DisplayContainer>
    </InfiniteScroll>
  );
};

export default FontDisplay;
