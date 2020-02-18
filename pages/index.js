import React from "react";
import Head from "next/head";
import withApollo from "../apollo/client";
import Layout from "../components/Layout/Layout";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import FontDisplay from "../components/FontDisplay/FontDisplay";
import { getDataFromTree } from "@apollo/react-ssr";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <SearchPanel />
      <FontDisplay />
    </Layout>
  );
};

export default withApollo(Home, { getDataFromTree });
