import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";

import styles from "./styles";
import Typo from "components/Typography";

const Technologies = ({ image, name }) => {
  return (
    <Grid container sx={styles.block} item md={2} sm={2} xs={3}>
      <Image priority={true} alt="img" src={image} width={50} height={50} />
      <Typo variant="body1" name={name} sx={styles.text} />
    </Grid>
  );
};

export default Technologies;
