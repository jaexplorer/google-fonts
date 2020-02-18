import React, { Fragment } from "react";
import Head from "next/head";
import { GlobalStyles } from "../../utils/styles/global";
import Navbar from "../Navbar/Navbar";
import { PageContainer, Footer } from "./Layout.styles";
import TopButton from "../TopButton/TopButton";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap"
        />
      </Head>
      <GlobalStyles />
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <TopButton />
      <Footer>
        Coded by Andrew Sabato | 2020 | Google Font NextJS + Apollo + GraphQL
        Project
      </Footer>
    </Fragment>
  );
};

export default Layout;
