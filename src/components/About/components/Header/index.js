import * as THREE from "three";
import { motion } from "framer-motion";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { CameraShake, OrbitControls } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import React, { useState, useRef, Suspense, useMemo } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";

import styles from "./styles";
import Navbar from "components/Navbar";
import Typo from "components/Typography";

function Triangle({ color, ...props }) {
  const ref = useRef();
  const [r] = useState(() => Math.random() * 10000);
  useFrame(
    (_) =>
      (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10)
  );
  const { paths: [path] } = useLoader(SVGLoader, 'images/triangle.svg') // prettier-ignore
  const geom = useMemo(
    () =>
      SVGLoader.pointsToStroke(
        path.subPaths[0].getPoints(),
        path.userData.style
      ),
    [path.subPaths, path.userData.style]
  );
  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Rig({ children }) {
  const ref = useRef();
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05);
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 20,
      0.1
    );
  });
  return <group ref={ref}>{children}</group>;
}

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  const text = "We Help to Build Your Dream!";
  const heading = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Grid container sx={styles.bg}>
      <Navbar />
      <Grid container sx={isMatch ? styles.container : styles.block}>
        <Grid container item md={6} sm={7} xs={12} sx={styles.desc}>
          <motion.div
            style={{ display: "flex" }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {heading.map((letter, index) => (
              <motion.span variants={child} key={index} style={styles.text}>
                <Typo
                  variant={isMatch ? "h2" : "h5"}
                  name={letter === " " ? "\u00A0" : letter}
                />
              </motion.span>
            ))}
          </motion.div>
          <Typo
            name="At Altcode Labs’s we believe that SUCCESS is earned, not given! 
            Therefore, our team works with complete passion to deliver the successful products!
            We approach to delivering software solutions across industries has helped companies 
            and established enterprises build solid software pillars for their operations."
            variant="body1"
          />
        </Grid>

        <Grid container item md={4} sm={4} xs={12}>
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }}>
            <ambientLight />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
            />
            <Suspense fallback={null}>
              <Rig>
                <Triangle
                  color="#ff2060"
                  scale={0.009}
                  rotation={[0, 0, Math.PI / 3]}
                />
                <Triangle
                  color="cyan"
                  scale={0.009}
                  position={[2, 0, -2]}
                  rotation={[0, 0, Math.PI / 3]}
                />
                <Triangle
                  color="orange"
                  scale={0.009}
                  position={[-2, 0, -2]}
                  rotation={[0, 0, Math.PI / 3]}
                />
                <Triangle
                  color="white"
                  scale={0.009}
                  position={[0, 2, -10]}
                  rotation={[0, 0, Math.PI / 3]}
                />
              </Rig>
              <EffectComposer multisampling={8}>
                <Bloom
                  kernelSize={3}
                  luminanceThreshold={0}
                  luminanceSmoothing={0.4}
                  intensity={0.6}
                />
              </EffectComposer>
            </Suspense>
            <CameraShake
              yawFrequency={0.3}
              pitchFrequency={0.3}
              rollFrequency={0.3}
            />
          </Canvas>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
