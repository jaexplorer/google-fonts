import React, { Fragment } from "react";
import Head from "next/head";
import { GlobalStyles } from "../../utils/styles/global";
import Navbar from "../Navbar/Navbar";
import { PageContainer } from "./Layout.styles";
import TopButton from "../TopButton/TopButton";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <TopButton />
    </Fragment>
  );
};

export default Layout;
