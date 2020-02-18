import React, { Fragment, useEffect, useState } from "react";
import { ScrollButton, IconContainer } from "./TopButton.styles";
import ArrowIcon from "./ArrowIcon";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
        ? setShowButton(true)
        : setShowButton(false);
    };
  });

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {showButton && (
        <ScrollButton onClick={scrollToTop}>
          <IconContainer>
            <ArrowIcon />
          </IconContainer>
        </ScrollButton>
      )}
    </Fragment>
  );
};

export default TopButton;
