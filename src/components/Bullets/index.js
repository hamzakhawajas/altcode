import React from "react";
import { Grid, Box } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import styles from "./styles";
import Typo from "../Typography";

const Bullets = ({ text, md, sm, xs, animation }) => {
  return (
    <Grid container item md={md} sm={sm} xs={xs}>
      <ScrollAnimation animateIn={animation}>
        <Box sx={styles.desc}>
          <ArrowRightIcon fontSize="large" sx={styles.icon} />
          <Typo variant="body2" sx={styles.text} name={text} />
        </Box>
      </ScrollAnimation>
    </Grid>
  );
};

export default Bullets;
