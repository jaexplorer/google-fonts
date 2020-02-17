import React from "react";
import Head from "next/head";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../apollo/client";
import Layout from "../components/Layout/Layout";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import FontDisplay from "../components/FontDisplay/FontDisplay";

const QUERY = gql`
  {
    fonts {
      family
    }
  }
`;

const Home = () => {
  const { data, loading } = useQuery(QUERY);
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      {/* {!loading && console.log(data)} */}

      <SearchPanel />
      <FontDisplay />
    </Layout>
  );
};

export default withApollo(Home);
