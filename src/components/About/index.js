import Head from "next/head";
import { Box } from "@mui/material";

import FAQ from "components/FAQ";
import Footer from "components/Footer";
import Header from "./components/Header";
import Team from "./components/MeetOurTeam";
import PageUpButton from "components/PageUpButton";

const faqs = [
  {
    question:
      "How much experience do you have in the software development industry?",
    answer:
      "We have many years of experience in the software development industry and have worked with clients from various industries.",
  },
  {
    question: "How do you ensure the quality of the software that you develop?",
    answer:
      "We have a rigorous quality assurance process that includes code reviews, automated testing, and manual testing to ensure the software we develop is of high quality.",
  },
  {
    question: "What is your pricing model and payment structure?",
    answer:
      "Our pricing model and payment structure are tailored to each project, and we work with our clients to ensure that they receive a fair and transparent price for our services.",
  },
  {
    question:
      "What is your approach to project management and communication with clients?",
    answer:
      "We have a transparent and collaborative approach to project management and communication with our clients, which includes regular status updates and progress reports.",
  },
  {
    question: "How do you handle changes in project scope or requirements?",
    answer:
      "We are flexible and adaptable to changes in project scope or requirements and work closely with our clients to ensure we can deliver on their needs and requirements.",
  },
  {
    question: "How do you handle security and data privacy concerns?",
    answer:
      "We take security and data privacy concerns seriously and follow industry best practices and standards to ensure the software we develop is secure and compliant.",
  },
  {
    question:
      "Do you offer post-launch support and maintenance for the software you develop?",
    answer:
      "Yes, we offer post-launch support and maintenance for the software we develop, and we are available to help our clients with any issues or updates that may arise.",
  },
  {
    question:
      "Can you provide references or case studies from previous clients?",
    answer:
      "Yes, we can provide references and case studies from previous clients, and we are proud of the work we have done and the positive feedback we have received.",
  },
];

const About = () => {
  return (
    <Box>
      <Head>
        <link rel="icon" href="images/logo.png" />
        <title>About</title>

        <meta
          property="og:title"
          content="About"
          key="About"
          name="description"
        />
      </Head>
      <Header />
      <Team />
      <FAQ faqs={faqs} />
      <Footer />
      <PageUpButton />
    </Box>
  );
};

export default About;
