import styled from "styled-components";
import { colors } from "../../utils/styles/helpers";
const { red } = colors;

export const IconContainer = styled.div``;

export const MobileNav = styled.div`
  display: none;

  @media screen and (max-width: 699px) {
    height: 65px;
    padding-left: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  }
`;

export const StyledNav = styled.div`
  height: 65px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  padding-left: 60px;
  padding-right: 60px;

  @media screen and (max-width: 699px) {
    flex-direction: column;
    height: 100vh;
    align-items: flex-start;
    border-bottom: unset;
    justify-content: unset;
    position: absolute;
    top: 0px;
    padding-left: unset;
    padding-right: unset;
    width: 250px;
    background: white;
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
    transition: all 0.6s cubic-bezier(0.4, 0.2, 0, 1);

    &::before {
      content: "";
      position: absolute;
      opacity: 0;
      transition: all 0.6s cubic-bezier(0.4, 0.2, 0, 1);
    }

    &.closed {
      left: -350px;
      z-index: 100;
      pointer-events: none;
    }
    &.open {
      left: 0;
      z-index: 100;
      pointer-events: all;
    }
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  top: 3px;
  cursor: pointer;
  min-height: 60px;
  width: 230px;
  display: flex;
  align-items: center;
  img {
    opacity: 0.6;
  }
  @media screen and (max-width: 699px) {
    padding-left: 20px;
    height: 63px;
  }
`;

export const StyledLogo = styled.div`
  position: relative;
  top: -3px;
  left: 5px;
  font-size: 22.1px;
  display: flex;
  align-items: center;
  opacity: 0.6;
`;

export const StyledLinks = styled.div`
  a {
    color: rgba(0, 0, 0, 0.6);
    fill: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    padding-left: 30px;
    height: 60px;

    &:first-child {
      margin-left: 0;
    }

    &.active {
      color: ${red};
    }
  }
  @media screen and (max-width: 699px) {
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    padding-top: 30px;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.14);

    a {
      margin-left: 0;
      height: 45px;
    }
  }
`;
