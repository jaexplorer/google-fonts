import React, { Fragment, useState, useEffect, useRef } from "react";
import Link from "next/link";
import routes from "./routes";
import { withRouter } from "next/router";
import MenuIcon from "./MenuIcon";
import {
  StyledNav,
  StyledLogo,
  LogoContainer,
  StyledLinks,
  MobileNav,
  IconContainer,
} from "./Navbar.styles";

const Navbar = ({ router }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = useRef(null);

  useEffect(() => {
    const handleClick = e => {
      !menu.current.contains(e.target) && setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  });

  return (
    <Fragment>
      <MobileNav>
        <IconContainer onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </IconContainer>
        <LogoContainer>
          <img src="static/googleLogo.png" alt="" />
          <StyledLogo>Fonts</StyledLogo>
        </LogoContainer>
      </MobileNav>

      <StyledNav className={`${menuOpen ? "open" : "closed"}`} ref={menu}>
        <LogoContainer>
          <img src="static/googleLogo.png" alt="" />
          <StyledLogo>Fonts</StyledLogo>
        </LogoContainer>
        <StyledLinks>
          {routes.map((route, index) => (
            <Link href={route.path} key={index}>
              <a
                className={`${router.pathname === route.path ? "active" : ""}`}
              >
                {route.label}
              </a>
            </Link>
          ))}
        </StyledLinks>
      </StyledNav>
    </Fragment>
  );
};

export default withRouter(Navbar);
