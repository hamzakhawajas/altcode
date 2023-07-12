import { Grid } from "@mui/material";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import ScrollAnimation from "react-animate-on-scroll";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import styles from "./styles";
import Typo from "components/Typography";
import Bullets from "components/Bullets";

function MyModel() {
  const gltf = useLoader(GLTFLoader, "images/tron_disk.glb");
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function MyModel2() {
  const gltf = useLoader(GLTFLoader, "images/abstract.glb");
  return (
    <group scale={1.2} position={[0, -1, 0]}>
      <mesh>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
}

const Strategies = () => {
  return (
    <Grid container sx={styles.container}>
      <Grid container sx={styles.detail}>
        <Grid container item md={6} sm={12} xs={12}>
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
              <MyModel />
            </Suspense>
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Stars radius={500} depth={50} count={1000} factor={10} />
          </Canvas>
        </Grid>

        <Grid container item md={5} sm={12} xs={12} sx={styles.block}>
          <ScrollAnimation animateIn="zoomIn">
            <Typo
              variant="h3"
              sx={styles.heading}
              name="Brighter Corporate Ideas And Strategies"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="zoomIn">
            <Typo
              variant="body1"
              name="Our idea validation approach is intended to establish the viability
              of each project so that we can supply reliable and risk-free solutions."
            />
          </ScrollAnimation>

          <Grid container sx={styles.points}>
            <Bullets
              md={12}
              sm={12}
              xs={12}
              animation="fadeInRight"
              text="We will help you develop your ideas."
            />

            <Bullets
              md={12}
              sm={12}
              xs={12}
              animation="fadeInRight"
              text="We have unparalleled project governance."
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={styles.detail}>
        <Grid container item md={5} sm={12} xs={12} sx={styles.block}>
          <ScrollAnimation animateIn="fadeInUp">
            <Typo
              variant="h3"
              sx={styles.heading}
              name="Perfect Technology n Solution For All Medium Business"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp">
            <Typo
              variant="body1"
              name="At Altcode Labs, we believe that SUCCESS is earned, not given! 
            Therefore, our team works with complete passion to deliver the successful products!"
            />
          </ScrollAnimation>

          <Grid container sx={styles.points}>
            <Bullets
              md={6}
              sm={6}
              xs={6}
              animation="fadeInRight"
              text="Expert Team Member"
            />
            <Bullets
              md={6}
              sm={6}
              xs={6}
              animation="fadeInRight"
              text="Time Management"
            />
            <Bullets
              md={6}
              sm={6}
              xs={6}
              animation="fadeInRight"
              text="Work Dedication"
            />
            <Bullets
              md={6}
              sm={6}
              xs={6}
              animation="fadeInRight"
              text="Faster Enrollments"
            />
          </Grid>
        </Grid>

        <Grid container item md={6} sm={12} xs={12}>
          <Canvas>
            <spotLight
              castShadow
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
            <pointLight intensity={3} position={[10, 15, 10]} />
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
            <Stars radius={500} depth={50} count={1000} factor={10} />
          </Canvas>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Strategies;
