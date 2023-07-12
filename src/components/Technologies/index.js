import React, { useState } from "react";
import { Grid, Tabs, Tab, Box } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles";
import Typo from "components/Typography";
import Technologies from "./technologies";

const Tech = ({
  heading,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
  i18,
  i19,
  i20,
  i21,
  i22,
  i23,
  i24,
  i25,
  i26,
  i27,
  i28,
  i29,
  i30,
  i31,
  i32,
  i33,
  i34,
  i35,
  i36,
  i37,
  i38,
  i39,
  i40,
  i41,
  i42,
  i43,
  i44,
  i45,
  i51,
  i52,
  i53,
  i54,
  i55,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
  a21,
  a22,
  a23,
  a24,
  a25,
  a26,
  a27,
  a28,
  a29,
  a30,
  a31,
  a32,
  a33,
  a34,
  a35,
  a36,
  a37,
  a38,
  a39,
  a40,
  a41,
  a42,
  a43,
  a44,
  a45,
  a51,
  a52,
  a53,
  a54,
  a55,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container sx={styles.container}>
      <Grid container sx={styles.heading}>
        <ScrollAnimation animateIn="fadeInLeft">
          <Typo variant="h6" name={heading} />
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
            {t1 && <Tab sx={styles.tab} label={t1} />}
            {t2 && <Tab sx={styles.tab} label={t2} />}
            {t3 && <Tab sx={styles.tab} label={t3} />}
            {t4 && <Tab sx={styles.tab} label={t4} />}
            {t5 && <Tab sx={styles.tab} label={t5} />}
            {t6 && <Tab sx={styles.tab} label={t6} />}
          </Tabs>
        </Box>

        {value === 0 && (
          <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
            {i1 && <Technologies image={i1} name={a1} />}
            {i2 && <Technologies image={i2} name={a2} />}
            {i3 && <Technologies image={i3} name={a3} />}
            {i4 && <Technologies image={i4} name={a4} />}
            {i5 && <Technologies image={i5} name={a5} />}
            {i6 && <Technologies image={i6} name={a6} />}
            {i7 && <Technologies image={i7} name={a7} />}
            {i8 && <Technologies image={i8} name={a8} />}
            {i9 && <Technologies image={i9} name={a9} />}
            {i10 && <Technologies image={i10} name={a10} />}
          </Grid>
        )}
        {value === 1 && (
          <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
            {i11 && <Technologies image={i11} name={a11} />}
            {i12 && <Technologies image={i12} name={a12} />}
            {i13 && <Technologies image={i13} name={a13} />}
            {i14 && <Technologies image={i14} name={a14} />}
            {i15 && <Technologies image={i15} name={a15} />}
            {i16 && <Technologies image={i16} name={a16} />}
            {i17 && <Technologies image={i17} name={a17} />}
            {i18 && <Technologies image={i18} name={a18} />}
            {i19 && <Technologies image={i19} name={a19} />}
            {i20 && <Technologies image={i20} name={a20} />}
          </Grid>
        )}
        {value === 2 && (
          <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
            {i21 && <Technologies image={i21} name={a21} />}
            {i22 && <Technologies image={i22} name={a22} />}
            {i23 && <Technologies image={i23} name={a23} />}
            {i24 && <Technologies image={i24} name={a24} />}
            {i25 && <Technologies image={i25} name={a25} />}
            {i26 && <Technologies image={i26} name={a26} />}
            {i27 && <Technologies image={i27} name={a27} />}
            {i28 && <Technologies image={i28} name={a28} />}
            {i29 && <Technologies image={i29} name={a29} />}
            {i30 && <Technologies image={i30} name={a30} />}
          </Grid>
        )}
        {value === 3 && (
          <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
            {i31 && <Technologies image={i31} name={a31} />}
            {i32 && <Technologies image={i32} name={a32} />}
            {i33 && <Technologies image={i33} name={a33} />}
            {i34 && <Technologies image={i34} name={a34} />}
            {i35 && <Technologies image={i35} name={a35} />}
            {i36 && <Technologies image={i36} name={a36} />}
            {i37 && <Technologies image={i37} name={a37} />}
            {i38 && <Technologies image={i38} name={a38} />}
            {i39 && <Technologies image={i39} name={a39} />}
            {i40 && <Technologies image={i0} name={a40} />}
          </Grid>
        )}
        {value === 4 && (
          <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
            {i41 && <Technologies image={i41} name={a41} />}
            {i42 && <Technologies image={i42} name={a42} />}
            {i43 && <Technologies image={i43} name={a43} />}
            {i44 && <Technologies image={i44} name={a44} />}
            {i45 && <Technologies image={i45} name={a45} />}
          </Grid>
        )}
        {value === 5 && (
          <Grid container item md={10} sm={12} xs={12} sx={styles.tec}>
            {i51 && <Technologies image={i51} name={a51} />}
            {i52 && <Technologies image={i52} name={a52} />}
            {i53 && <Technologies image={i53} name={a53} />}
            {i54 && <Technologies image={i54} name={a54} />}
            {i55 && <Technologies image={i55} name={a55} />}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Tech;
