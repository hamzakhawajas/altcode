import Head from "next/head";
import { Box } from "@mui/material";

import Footer from "../Footer";
import Header from "./components/Header";
import PageUpButton from "components/PageUpButton";

const Services = () => {
  return (
    <Box>
      <Head>
        <link rel="icon" href="images/logo.png" />
        <title>Services</title>
        <meta
          property="og:title"
          content="Services"
          key="Services"
          name="description"
        />
      </Head>
      <Header />
      <Footer />
      <PageUpButton />
    </Box>
  );
};

export default Services;
