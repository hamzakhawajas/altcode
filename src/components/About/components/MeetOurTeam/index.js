import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import ScrollAnimation from "react-animate-on-scroll";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";

import styles from "./styles";
import male from "images/male.jpg";
import female from "images/female.jpg";
import Typo from "components/Typography";

const Team = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container sx={styles.bg}>
      <Grid container>
        <ScrollAnimation animateIn="fadeInLeft" style={styles.heading}>
          <Typo variant="h6" name="⸻ Meet Our Team" />
        </ScrollAnimation>

        <Grid container sx={isMatch ? styles.grid : styles.mobileViewGrid}>
          <Box style={styles.img}>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Muhammad Amsal" variant="h5" />
              <Typo name="Founder & CEO" variant="body1" />
            </ScrollAnimation>

            <ScrollAnimation animateIn="pulse" offset={400}>
              <Image src={male} alt="Amsal" width={200} />
            </ScrollAnimation>
          </Box>

          <Box style={styles.img2}>
            <ScrollAnimation animateIn="pulse" offset={400}>
              <Image src={male} alt="Hamza Raheel" width={200} />
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInRight"
              animateOnce
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Hamza Raheel" variant="h5" />
              <Typo name="Co-founder & PMO" variant="body1" />
            </ScrollAnimation>
          </Box>

          <Box style={styles.img}>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Muhammad Afnan" variant="h5" />
              <Typo name="Marketing Manager" variant="body1" />
            </ScrollAnimation>

            <ScrollAnimation animateIn="pulse" offset={400}>
              <Image src={male} alt="Afnan" width={200} />
            </ScrollAnimation>
          </Box>

          <Box style={styles.img2}>
            <ScrollAnimation animateIn="pulse" offset={400}>
              <Image src={male} alt="Zain Rasool" width={200} />
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInRight"
              animateOnce
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Zain Rasool" variant="h5" />
              <Typo name="Backend Developer" variant="body1" />
            </ScrollAnimation>
          </Box>

          <Box style={styles.img}>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Zunaira Asif" variant="h5" />
              <Typo name="Front-end Developer" variant="body1" />
            </ScrollAnimation>

            <ScrollAnimation animateIn="pulse" offset={400}>
              <Image src={female} alt="Zunaira Asif" width={200} />
            </ScrollAnimation>
          </Box>

          <Box style={styles.img2}>
            <ScrollAnimation animateIn="pulse" offset={400}>
              <Image src={male} alt="male" width={200} />
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInRight"
              animateOnce
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Talal Asmat" variant="h5" />
              <Typo name="BD Manager" variant="body1" />
            </ScrollAnimation>
          </Box>
        </Grid>
      </Grid>

      <Grid container item md={9} sm={10} xs={11} sx={styles.block}>
        <Grid container item md={9} sm={8} xs={12} sx={styles.project}>
          <Typo
            name="Let's Start A Cool Project With Altcode Labs"
            variant="h4"
          />
          <Typo
            name="We Provide Best Solution For Your Business"
            variant="body1"
          />
        </Grid>

        <motion.div
          style={styles.startBtn}
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => router.push("/contact")}
        >
          <Typo variant="body1" name="Start a Project" sx={styles.btnText} />
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default Team;
