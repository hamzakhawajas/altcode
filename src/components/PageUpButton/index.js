import { Box } from "@mui/system";
import { useState, useEffect } from "react";

import styles from "./styles";
import NorthIcon from "@mui/icons-material/North";

function PageUpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: showButton ? "block" : "none",
      }}
      style={styles.button}
    >
      <NorthIcon fontSize="small" />
    </Box>
  );
}

export default PageUpButton;
