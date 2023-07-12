import * as random from "maath/random";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import ScrollAnimation from "react-animate-on-scroll";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState, useRef, Suspense } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

import styles from "./styles";
import Typo from "components/Typography";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="white"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const About = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid sx={styles.container}>
      <Grid container sx={styles.heading}>
        <ScrollAnimation animateIn="fadeInLeft">
          <Typo variant="h6" name="⸻ Who Are We?" />
        </ScrollAnimation>
      </Grid>

      <Grid container item md={10} sm={12} xs={12} sx={styles.block}>
        <Grid container item md={6} sm={6} xs={12} sx={styles.desc}>
          <ScrollAnimation animateIn="zoomInDown">
            <Typo
              sx={styles.color}
              variant="h3"
              name="Dream | Connect | Innovate"
            />
          </ScrollAnimation>
          <Typo
            sx={styles.text}
            variant="body1"
            name="Altcode Labs is a venture builder that aims to collaborate with
          startups and merge them with the best talent all over the world!"
          />

          <motion.div
            style={styles.startBtn}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => router.push("/contact")}
          >
            <Typo variant="body1" name="Start a Project" sx={styles.btnText} />
          </motion.div>
        </Grid>

        <Grid container item md={5} sm={5} xs={12}>
          <Canvas
            camera={{ position: [1, 1, 2] }}
            style={isMatch ? { height: "50vh" } : { height: "30vh" }}
          >
            <Suspense fallback={null}>
              <Stars />
              <Stars />
              <Stars />
            </Suspense>
          </Canvas>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
