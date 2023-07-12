import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import RemoveIcon from "@mui/icons-material/Remove";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles";
import Typo from "components/Typography";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Grid container sx={styles.bg}>
      <ScrollAnimation animateIn="fadeInLeft" style={styles.heading}>
        <Typo variant="h6" name="⸻ Frequently Asked Questions" />
      </ScrollAnimation>

      <Grid container sx={styles.questions}>
        {faqs.map((faq, index) => (
          <Grid container sx={styles.ques} key={index}>
            <Box sx={styles.box} onClick={() => handleClick(index)}>
              {activeIndex === index ? (
                <RemoveIcon sx={styles.icon} />
              ) : (
                <AddIcon sx={styles.icon} />
              )}
              <Typo variant="h6" sx={styles.text} name={faq.question} />
            </Box>
            {activeIndex === index && (
              <Typo variant="body1" sx={styles.text} name={faq.answer} />
            )}
          </Grid>
        ))}
      </Grid>

      <CircleIcon sx={styles.bubble1} />
      <CircleIcon sx={styles.bubble2} />
    </Grid>
  );
};

export default FAQ;
