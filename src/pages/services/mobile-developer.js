import Head from "next/head";
import React, { useState } from "react";
import { Grid, Box, Tabs, Tab } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

import FAQ from "components/FAQ";
import Footer from "components/Footer";
import Typo from "components/Typography";
import PageUpButton from "components/PageUpButton";
import styles from "components/Technologies/styles";
import Pages from "components/Services/components/Pages";

const faqs = [
  {
    question:
      "What kinds of mobile apps are your mobile app developers capable of developing?",
    answer:
      "Mobile App Developers at Altcode Labs have considerable experience with a variety of technologies. Our developers can develop online, native, and hybrid apps for you depending on the current technological trends and your company's requirements.",
  },
  {
    question: "Which app should I use (native or hybrid)?",
    answer:
      "If you want to make a basic app for both platforms on a tight budget or if you want to target iOS and Android customers at the same time, go with a hybrid. A native app, on the other hand, is a better alternative if you need a complicated application that fulfills all of the platform's requirements.",
  },
  {
    question:
      "Is it possible to hire a top mobile app developer on an hourly or project basis?",
    answer:
      "Yes, you may hire a dedicated developer on an hourly or project/task basis if you know the work to be completed by the developer.",
  },
  {
    question: "Why should you hire the best mobile app developers?",
    answer:
      "You should hire dedicated mobile app developers to do the task in the most efficient manner possible. It has several advantages, including flexibility, cost-effectiveness, better productivity, specialized skill sets, ease of use, and speedier reaction to emergency circumstances, among others.",
  },
  {
    question: "Which technologies does your development team know?",
    answer:
      "Our development team has expertise in working with latest technologies like PHP/ WordPress/ Magento/ CakePHP/ Zend/ YII/ Laravel/ Codeignitor/ AngularJS/ NodeJS, iPhone native/ Android native/ IONIC/ Phonegap/ React Native.",
  },
];

const MobileDeveloper = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="../images/logo.png" />
        <title>Hire Android & IOS Developer</title>
        <meta
          property="og:title"
          content="Services/hire-mobile-developer"
          key="Services/hire-mobile-developer"
          name="description"
        />
      </Head>
      <Pages
        heading="Hire Mobile App Developers To Beat Your Competitors!"
        desc="Are you searching for the best place to hire mobile app developers to work on your next project? If yes, then Altcode Labs should be your perfect choice as we have worked with hundreds of businesses to help them launch their applications. Our dedicated mobile app developers are always up for a new challenge."
        heading2="Dedicated Mobile App Developers For Hire Online"
        desc2="Do you need to employ mobile app developers to create an amazing app? Hire our top mobile app developers who will work with you to create apps that are quick, contemporary, and dependable for your users."
        desc8="Our development team has more than 7 years of expertise developing high-performing iOS and Android apps for a wide range of businesses. We take the time to learn about your requirements and create faultless software that will help you build your business. To beat the competition with a great app, hire dedicated mobile app developers from Altcode Labs."
        heading3="Hire Development Team To Build Amazing Mobile Apps"
        desc3="Altcode Labs have a team of highly skilled and dedicated mobile app developers that can collaborate with you to produce the best-in-class solution for your unique project concept. Hire our top-rated mobile app developers who will provide you with amazing cost-effective solutions.
        Our team of best mobile app developers has the knowledge and experience to deliver end-to-end web and mobile app development services to businesses all over the world. Hire our highly trained and experienced developers and designers to supplement your team and assist you in developing complicated software solutions that meet your company’s needs."
        heading4="Hire Mobile Developers From Altcode Labs –Why Us?"
        desc5="Altcode Labs is the best place to hire mobile app developers. We are one of the leading companies that are committed to providing you with the best mobile app developers for your projects. Not only this but you can also hire us because:"
        point1="10+ Years of Experience"
        point2="Integrity & Transparency"
        point3="100% success rate"
        point4="Flexible Engagement Models"
        point5="Cost-effective solutions"
        point6="Many happy clients all over the world"
        point7="Flexible Time schedules"
        heading5="⸻ Our Mobile App Development – Services & Expertise"
        h1="IOS Development"
        d1="Our mobile app engineers are expert at providing iOS services like UX and UI design, implementation, QA, and integration of iPhone and iPad apps. For the past 15+ years, we have been providing iOS app development services, gaining a lot of experience in a variety of sectors."
        h2="Android App Development"
        d2="Our Android app developers adopt an integrated approach to app development, considering the research of business needs, design aesthetics, user experience, and app performance."
        h3="Cross-Platform App Development"
        d3="Our professional cross-platform developers can design a multi-platform experience that meets the demands of your users, business, industry, and/or vertical. Our expertise in developing cross-platform mobile apps and online experiences utilising industry standard technologies such as HTML5, CSS3, and JavaScript for mobile apps and responsive and adaptable approaches for websites is unrivalled."
        h4="Native Mobile App Development"
        d4="Our Mobile App developers create native mobile apps for the iOS, Android, and Windows operating systems. After decades of working on native mobile applications, our engineers have refined the art of creating the most attractive, engaging, and high-quality apps."
        h5="Hybrid Mobile App Development"
        d5="Hybrid applications utilise the advantages of both online and native apps. Going hybrid lowers development costs, allows simple access to device data, works offline, and scales to a range of platforms and operating systems. We use the newest frameworks like PhoneGap, Appcelerator, Sencha, and others to create hybrid apps that combine the power of Javascript, HTML5, and CSS3."
        h6="Progressive Web App Development"
        d6="Hire our mobile developers for progressive web app development which is more cost-effective and efficient alternative to developing distinct native apps for iOS, Android, and the web. It's the easiest method to verify that your app, among many other features"
      />

      <Grid container sx={styles.container}>
        <Grid container sx={styles.heading}>
          <ScrollAnimation animateIn="fadeInLeft">
            <Typo variant="h6" name="⸻ Our Mobile App Development Strategy" />
          </ScrollAnimation>
        </Grid>

        <Grid container item md={10} sm={12} xs={12} sx={styles.box}>
          <Box style={styles.tabs}>
            <Tabs
              value={value}
              textColor="inherit"
              variant="scrollable"
              onChange={handleChange}
            >
              <Tab sx={styles.tab} label="Accessibility" />
              <Tab sx={styles.tab} label="Niche-specific customization" />
              <Tab sx={styles.tab} label="Technology Stack" />
              <Tab sx={styles.tab} label="Upgradation" />
            </Tabs>
          </Box>

          {value === 0 && (
            <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
              <Typo
                variant="body1"
                name="Our top mobile app developers make engaging and user-friendly applications. To ensure user engagement and simplicity of use, our development team creates an intuitive and interesting user experience."
              />
            </Grid>
          )}
          {value === 1 && (
            <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
              <Typo
                variant="body1"
                name="Our mobile app designers and developers use their imagination to include a list of needed features into a branded and niche-optimized app experience."
              />
            </Grid>
          )}
          {value === 2 && (
            <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
              <Typo
                variant="body1"
                name="To satisfy the demands of all of our clients, our mobile app developers employ a variety of mobile app development frameworks. JavaScript, React, Angular.js, Vue.js, Node.js, React Native, Lavarel, HTML/CSS, and more are all part of our technological stack."
              />
            </Grid>
          )}
          {value === 3 && (
            <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
              <Typo
                variant="body1"
                name="Our dedicated mobile app developers employ cutting-edge technologies and thorough testing to ensure that every update improves the app’s performance."
              />
            </Grid>
          )}
        </Grid>
      </Grid>

      <FAQ faqs={faqs} />
      <Footer />
      <PageUpButton />
    </div>
  );
};

export default MobileDeveloper;
