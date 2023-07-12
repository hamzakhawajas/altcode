import React from "react";
import { Typography } from "@mui/material";

const Typo = ({ name, variant, sx }) => {
  return (
    <Typography variant={variant} sx={sx}>
      {name}
    </Typography>
  );
};

export default Typo;
