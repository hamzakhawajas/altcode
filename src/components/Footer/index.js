import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles";
import Typo from "../Typography";
import logo from "../../../public/images/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Grid container sx={styles.container}>
      <ScrollAnimation animateIn="fadeInDown">
        <Image priority={true} src={logo} alt="logo" />
      </ScrollAnimation>

      <Grid container sx={styles.block}>
        <Grid container item md={2} sm={6} xs={6} sx={styles.desc}>
          <ScrollAnimation animateIn="fadeInUp" offset={20}>
            <Typo variant="h6" sx={styles.text} name="COMPANY" />
            <Typo variant="body2" sx={styles.txt} name="Home" />
            <Typo variant="body2" sx={styles.txt} name="Services" />
            <Typo variant="body2" sx={styles.txt} name="Contact" />
            <Typo variant="body2" sx={styles.txt} name="Blog" />
            <Typo variant="body2" sx={styles.txt} name="Careers" />
          </ScrollAnimation>
        </Grid>

        <Grid container item md={2} sm={6} xs={6} sx={styles.desc}>
          <ScrollAnimation animateIn="fadeInUp" offset={20}>
            <Typo variant="h6" sx={styles.text} name="SUPPORT" />
            <Typo variant="body2" sx={styles.txt} name="Help Center" />
            <Typo variant="body2" sx={styles.txt} name="Community" />
            <Typo variant="body2" sx={styles.txt} name="Schedule a Demo" />
            <Typo variant="body2" sx={styles.txt} name="Security" />
          </ScrollAnimation>
        </Grid>

        <Grid container item md={2} sm={6} xs={6} sx={styles.desc}>
          <ScrollAnimation animateIn="fadeInUp" offset={20}>
            <Typo variant="h6" sx={styles.text} name="DEVELOPERS" />
            <Typo sx={styles.txt} variant="body2" name="Forum" />
            <Typo sx={styles.txt} variant="body2" name="Projects" />
            <Typo sx={styles.txt} variant="body2" name="Open Source" />
          </ScrollAnimation>
        </Grid>

        <Grid container item md={3} sm={6} xs={12} sx={styles.socialIconsBox}>
          <ScrollAnimation animateIn="fadeInLeft" offset={20}>
            <Grid container item md={12} sm={12} xs={12} sx={styles.contact}>
              <Typo
                sx={styles.address}
                variant="body2"
                name="+1 (669) 257-4131"
              />
              <Typo variant="body2" name="7901 4th St. N, STE 6279 St." />
              <Typo variant="body2" name="Petersburg FL 33702 United States" />
              <Typo
                sx={styles.address2}
                variant="body2"
                name="+92 (346) 145-8822"
              />
              <Typo
                sx={styles.hover2}
                variant="body2"
                name="hello@altcodelabs.com"
              />
              <Typo variant="body2" name="Bank Islami Building, D-Block," />
              <Typo variant="body2" name="Valencia, Lahore, Pakistan 54000" />
            </Grid>

            <Grid container sx={styles.socialIcons}>
              <TwitterIcon sx={styles.hover} fontSize="medium" />
              <LinkedInIcon sx={styles.hover} fontSize="medium" />
              <FacebookIcon sx={styles.hover} fontSize="medium" />
              <InstagramIcon sx={styles.hover} fontSize="medium" />
            </Grid>
          </ScrollAnimation>
        </Grid>
      </Grid>

      <Grid container item md={12} sm={12} xs={12} sx={styles.copyright}>
        <Typo
          variant="subtitle1"
          name="2021 AltCode Labs. All Rights Reserved."
        />
        <Grid container item md={3} sm={12} xs={12} sx={styles.terms}>
          <Typo variant="subtitle1" sx={styles.hover2} name="Privacy Policy" />
          <Typo variant="subtitle1" sx={styles.hover2} name="Terms of Use" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
