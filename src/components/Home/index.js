import Head from "next/head";
import { Box } from "@mui/material";

import Footer from "../Footer";
import Tech from "../Technologies";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Offer from "./components/Offers";
import Header from "./components/Header";
import Strategies from "./components/Strategies";
import PageUpButton from "components/PageUpButton";

import ios from "images/technologies/ios.jpg";
import php from "images/technologies/php.jpg";
import sql from "images/technologies/sql.jpg";
import html from "images/technologies/html.jpg";
import next from "images/technologies/next.jpg";
import node from "images/technologies/node.jpg";
import java from "images/technologies/java.jpg";
import react from "images/technologies/react.jpg";
import swift from "images/technologies/swift.jpg";
import mysql from "images/technologies/mysql.jpg";
import mongo from "images/technologies/mongo.jpg";
import redis from "images/technologies/redis.jpg";
import kotlin from "images/technologies/kotlin.jpg";
import django from "images/technologies/django.jpg";
import dynamo from "images/technologies/dynamo.jpg";
import express from "images/technologies/express.jpg";
import android from "images/technologies/android.jpg";
import flutter from "images/technologies/flutter.jpg";
import firebase from "images/technologies/firebase.jpg";
import typeScript from "images/technologies/angular.jpg";
import angular from "images/technologies/typeScript.jpg";

const Home = () => {
  return (
    <Box>
      <Head>
        <link rel="icon" href="images/logo.png" />
        <title>Home</title>
        <meta
          property="og:title"
          content="Home"
          key="Home"
          name="description"
        />
      </Head>
      <Header />
      <About />
      <WhyUs />
      <Offer />
      <Strategies />
      <Tech
        heading="⸻ Technology that we employ"
        t1="Front-End"
        t2="Mobile"
        t3="Back-End"
        t4="Database"
        i1={react}
        a1="React JS"
        i2={html}
        a2="HTML5"
        i3={next}
        a3="Next JS"
        i4={typeScript}
        a4="TypeScript"
        i5={express}
        a5="Express JS"
        i6={angular}
        a6="Angular JS"
        i11={android}
        a11="Android"
        i12={ios}
        a12="IOS"
        i13={flutter}
        a13="Flutter"
        i14={kotlin}
        a14="Kotlin"
        i15={swift}
        a15="Swift"
        i21={node}
        a21="Node JS"
        i22={java}
        a22="Java"
        i23={php}
        a23="PHP"
        i31={django}
        a31="Django"
        i32={firebase}
        a32="Firebase"
        i33={mysql}
        a33="MySQL"
        i34={mongo}
        a34="Mongo db"
        i35={sql}
        a35="MsSQL"
        i36={redis}
        a36="Redis"
        i37={dynamo}
        a37="Dynamo"
      />
      <Footer />
      <PageUpButton />
    </Box>
  );
};

export default Home;
