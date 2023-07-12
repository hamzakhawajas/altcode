import { Grid } from "@mui/material";
import * as random from "maath/random";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState, useRef, Suspense } from "react";
import { Points, PointMaterial } from "@react-three/drei";

import styles from "./styles";
import Navbar from "components/Navbar";
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
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default function Header() {
  return (
    <Grid container sx={styles.bg}>
      <Navbar />

      <Grid container sx={styles.display}>
        <Typo variant="h1" name="Altcode Labs" />
        <Typo variant="h3" sx={styles.text} name="Our Work Speaks Itself" />
      </Grid>

      <Canvas camera={{ position: [0, 0, 1] }} style={styles.canvas}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </Grid>
  );
}
