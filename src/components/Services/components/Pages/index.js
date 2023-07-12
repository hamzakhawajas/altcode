import * as THREE from "three";
import { Grid, Box } from "@mui/material";
import { useLoader } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import ScrollAnimation from "react-animate-on-scroll";
import { OrbitControls } from "@react-three/drei";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import styles from "./styles";
import Navbar from "components/Navbar";
import Typo from "components/Typography";
import ServicesBlock from "./servicesBlock";

const vec = new THREE.Vector3();

function MyModel({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "../images/light.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(30, 60, -90), 0.5);
    state.camera.lookAt(0, 0, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function MyModel2() {
  const gltf = useLoader(GLTFLoader, "../images/glitch.glb");
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} scale={2.5}>
      <group rotation={[Math.PI / 50, -Math.PI / 3.8, Math.PI / 5.6]}>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function MyModel3({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "../images/desktop.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, -1, 1.5), 0.5);
    state.camera.lookAt(0, -0.5, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

const Pages = ({
  heading,
  heading2,
  heading3,
  heading4,
  heading5,
  desc,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
  desc7,
  desc8,
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  point7,
  point8,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  h10,
  h11,
  h12,
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  d10,
  d11,
  d12,
}) => {
  return (
    <Grid container sx={styles.container}>
      <Navbar />

      <Grid container sx={styles.block}>
        <Grid container item md={5} sm={12} xs={12}>
          <Canvas>
            <spotLight
              castShadow
              intensity={2.25}
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
            <pointLight intensity={1} position={[10, 10, -30]} />
            <Suspense fallback={null}>
              <MyModel />
            </Suspense>
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </Grid>

        <Grid container item md={6} sm={12} xs={12}>
          <Typo variant="h3" name={heading} sx={styles.heading} />
          <Typo variant="body1" name={desc} />

          <Grid container item md={12} sm={12} xs={12}>
            <Grid container item md={6} sm={6} xs={6}>
              <Box sx={styles.points}>
                <CheckCircleOutlineIcon sx={styles.icon} />
                <Typo
                  variant="body2"
                  name="Content Strategy"
                  sx={styles.bullets}
                />
              </Box>
            </Grid>

            <Grid container item md={6} sm={6} xs={6}>
              <Box sx={styles.points}>
                <CheckCircleOutlineIcon sx={styles.icon} />
                <Typo
                  variant="body2"
                  name="IT Management"
                  sx={styles.bullets}
                />
              </Box>
            </Grid>

            <Grid container item md={6} sm={6} xs={6}>
              <Box sx={styles.points}>
                <CheckCircleOutlineIcon sx={styles.icon} />
                <Typo
                  variant="body2"
                  name="Work Dedication"
                  sx={styles.bullets}
                />
              </Box>
            </Grid>

            <Grid container item md={6} sm={6} xs={6}>
              <Box sx={styles.points}>
                <CheckCircleOutlineIcon sx={styles.icon} />
                <Typo
                  variant="body2"
                  name="Time Management"
                  sx={styles.bullets}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={styles.block}>
        <Grid container item md={6} sm={12} xs={12}>
          <ScrollAnimation animateIn="fadeInLeft">
            <Typo variant="h3" name={heading2} sx={styles.heading} />
          </ScrollAnimation>
          <Typo variant="body1" name={desc2} />
          <Typo variant="body1" name={desc8} sx={styles.desc} />
        </Grid>

        <Grid container item md={5} sm={12} xs={12}>
          <Canvas>
            <spotLight
              castShadow
              intensity={2.25}
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
            <pointLight intensity={1} position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <MyModel2 />
            </Suspense>
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </Grid>
      </Grid>

      {desc3 != null && (
        <Grid container sx={styles.block}>
          <Grid container item md={5} sm={12} xs={12}>
            <Canvas>
              <Suspense fallback={null}>
                <MyModel3 />
              </Suspense>
              <pointLight intensity={3} position={[10, 15, 10]} />
              <OrbitControls
                autoRotate
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </Grid>

          <Grid container item md={6} sm={12} xs={12}>
            <ScrollAnimation animateIn="fadeInRight">
              <Typo variant="h3" name={heading3} sx={styles.heading} />
            </ScrollAnimation>
            <Typo variant="body1" name={desc3} />
            <Typo variant="body1" name={desc4} sx={styles.desc} />
          </Grid>
        </Grid>
      )}

      <Grid container sx={styles.box}>
        <ScrollAnimation animateIn="zoomInDown">
          <Typo variant="h3" name={heading4} sx={styles.heading} />
        </ScrollAnimation>
        <Typo variant="body1" name={desc5} />
        <Typo variant="body1" name={desc6} sx={styles.text} />
        <Typo variant="body1" name={desc7} />

        <Box sx={styles.points}>
          {point1 && <StarPurple500Icon fontSize="small" sx={styles.point} />}
          <Typo variant="body1" name={point1} />
        </Box>
        <Box sx={styles.points}>
          {point2 && <StarPurple500Icon fontSize="small" sx={styles.point} />}
          <Typo variant="body1" name={point2} />
        </Box>
        <Box sx={styles.points}>
          {point3 && <StarPurple500Icon fontSize="small" sx={styles.point} />}
          <Typo variant="body1" name={point3} />
        </Box>
        <Box sx={styles.points}>
          {point4 && <StarPurple500Icon fontSize="small" sx={styles.point} />}
          <Typo variant="body1" name={point4} />
        </Box>
        <Box sx={styles.points}>
          {point5 && <StarPurple500Icon fontSize="small" sx={styles.point} />}
          <Typo variant="body1" name={point5} />
        </Box>
        <Box sx={styles.points}>
          {point6 && <StarPurple500Icon fontSize="small" sx={styles.point} />}
          <Typo variant="body1" name={point6} />
        </Box>
        <Box sx={styles.points}>
          {point7 && <StarPurple500Icon fontSize="small" sx={styles.point} />}
          <Typo variant="body1" name={point7} />
        </Box>
        <Box sx={styles.points}>
          {point8 && <StarPurple500Icon fontSize="small" sx={styles.point} />}
          <Typo variant="body1" name={point8} />
        </Box>
      </Grid>

      <Grid container sx={styles.services}>
        <ScrollAnimation animateIn="fadeInLeft">
          <Typo variant="h6" name={heading5} />
        </ScrollAnimation>

        <Grid container item md={12} sm={12} xs={12} sx={styles.servicesBlock}>
          <ServicesBlock heading={h1} desc={d1} />
          <ServicesBlock heading={h2} desc={d2} />
          <ServicesBlock heading={h3} desc={d3} />
          <ServicesBlock heading={h4} desc={d4} />
          <ServicesBlock heading={h5} desc={d5} />
          <ServicesBlock heading={h6} desc={d6} />
          <ServicesBlock heading={h7} desc={d7} />
          <ServicesBlock heading={h8} desc={d8} />
          <ServicesBlock heading={h9} desc={d9} />
          <ServicesBlock heading={h10} desc={d10} />
          <ServicesBlock heading={h11} desc={d11} />
          <ServicesBlock heading={h12} desc={d12} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pages;
