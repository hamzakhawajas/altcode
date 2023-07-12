import React from "react";
import { Box } from "@mui/material";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex="9999"
      backgroundColor="#050c1c"
    >
      <Triangle color="#23e3f9" height={100} width={100} />
    </Box>
  );
};

export default Loader;
