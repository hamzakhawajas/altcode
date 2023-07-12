import * as THREE from "three";
import * as random from "maath/random";
import { KernelSize } from "postprocessing";
import ScrollAnimation from "react-animate-on-scroll";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import React, { useState, useRef, Suspense, useMemo } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  CameraShake,
  OrbitControls,
} from "@react-three/drei";

import styles from "./styles";
import Typo from "components/Typography";
import Bullets from "components/Bullets";

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

const WhyUs = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container sx={styles.container}>
      <Grid container sx={styles.desc}>
        <Grid container sx={styles.reason}>
          <ScrollAnimation animateIn="fadeInLeft">
            <Typo variant="h6" name="⸻ Reasons to Choose Us" />
          </ScrollAnimation>
        </Grid>

        <Grid container item md={10} sm={10} xs={10} sx={styles.heading}>
          <Grid container item md={5} sm={5} xs={12}>
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
                  <Bloom
                    kernelSize={KernelSize.HUGE}
                    luminanceThreshold={0}
                    luminanceSmoothing={0}
                    intensity={0.5}
                  />
                </EffectComposer>
              </Suspense>
              <CameraShake
                yawFrequency={0.2}
                pitchFrequency={0.2}
                rollFrequency={0.2}
              />
            </Canvas>
          </Grid>

          <Grid container item md={7} sm={7} xs={12}>
            <ScrollAnimation animateIn="fadeInRight">
              <Typo
                variant="body1"
                name="At Altcode Labs, we aim to deliver the best resources to help 
            startups and entrepreneurs to grow quickly. Not only this but our goal 
            is to bring together the best talent from all around the world! We provide 
            early-stage startups with accessibility to our network, infrastructure, and 
            deliberately built startup studios led by experts. We think that not all 
            startups are created equal, implying that their objectives and paths are 
            not comparable. The approach emphasizes flexibility, with a unique accelerator 
            for all of the projects to aid in the adoption of the optimum strategy."
              />
            </ScrollAnimation>
          </Grid>
        </Grid>

        <Grid container sx={styles.block}>
          <Bullets
            md={5}
            sm={6}
            xs={12}
            animation="fadeInLeft"
            text="Providing founders with the tools and resources they need 
          to establish and grow world-class businesses from the scratch."
          />
          <Bullets
            md={5}
            sm={6}
            xs={12}
            animation="fadeInLeft"
            text="Exposure to our services and infrastructure, as well as expert-led startup studios"
          />
          <Bullets
            md={5}
            sm={6}
            xs={12}
            animation="fadeInLeft"
            text="Work with dynamic teams and departments to help you deliver your vision with our experts"
          />
          <Bullets
            md={5}
            sm={6}
            xs={12}
            animation="fadeInLeft"
            text="Versatility with the best implementation of the project."
          />
        </Grid>
      </Grid>

      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={isMatch ? styles.height : styles.webHeight}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </Grid>
  );
};

export default WhyUs;
