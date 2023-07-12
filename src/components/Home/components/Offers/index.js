import * as THREE from "three";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useLoader } from "@react-three/fiber";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import ScrollAnimation from "react-animate-on-scroll";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import styles from "./styles";
import Typo from "components/Typography";

const vec = new THREE.Vector3();

function Model({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/python.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -20), 0.5);
    state.camera.lookAt(0, 4, 0);
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

function Model2({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/phone.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(20, -20, -25), 0.5);
    state.camera.lookAt(0, 2, 0);
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

function Model3({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/php.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(10, 0, -2), 0.5);
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
function Model4({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/robot.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -30), 0.5);
    state.camera.lookAt(0, 4, 0);
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

function Model5({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/shaderough.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -7), 0.5);
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
function Model6({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/laptop.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -24), 0.5);
    state.camera.lookAt(0, 2, 0);
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

const Offer = () => {
  const router = useRouter();
  const [open] = useState(false);
  const props = useSpring({ open: Number(open) });

  return (
    <Grid container sx={styles.container}>
      <Grid container sx={styles.offer}>
        <ScrollAnimation animateIn="fadeInLeft">
          <Typo variant="h6" name="⸻ Providing What You Need" />
        </ScrollAnimation>
      </Grid>

      <Grid container item md={7} sm={10} xs={10} sx={styles.desc}>
        <ScrollAnimation animateIn="fadeInUp">
          <Typo
            variant="body2"
            name="We are a team of exceptional developers & engineers, diverse group of free-thinkers, CS majors, 
          and trailblazers who focus to CHANGE THE WORLD, and not make fast bucks!"
          />
        </ScrollAnimation>
      </Grid>

      <Grid container item md={12} sm={12} xs={12} sx={styles.block}>
        <Grid
          container
          sx={styles.block2}
          onClick={() => router.push("/services/python-developer")}
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 35 }}>
            <three.pointLight
              position={[8, 8, 8]}
              intensity={2}
              color="#f0f0f0"
            />
            <Suspense fallback={null}>
              <group rotation={[0, Math.PI, 0]}>
                <Model hinge={props.open.to([0, 1], [1.575, -0.825])} />
              </group>
            </Suspense>
            <pointLight intensity={3} position={[10, 15, 10]} />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -4.5, 0]}
              opacity={15}
              width={20}
              height={20}
              blur={2}
              far={4.5}
            />
          </Canvas>
          <ScrollAnimation animateIn="flipInX">
            <Typo
              variant="h6"
              name="Hire Python Engineers"
              sx={styles.heading}
            />
            <Typo
              variant="body2"
              name="Powerful Python Development for scalable and reliable enterprise apps."
            />
          </ScrollAnimation>
        </Grid>

        <Grid
          container
          sx={styles.block2}
          onClick={() => router.push("/services/mobile-developer")}
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
            <three.pointLight
              position={[8, 8, 8]}
              intensity={2}
              color="#f0f0f0"
            />
            <Suspense fallback={null}>
              <group rotation={[-0.3, 1.5, 0]}>
                <Model2 hinge={props.open.to([0, 1], [1.575, -0.825])} />
              </group>
            </Suspense>
          </Canvas>
          <ScrollAnimation animateIn="flipInX">
            <Typo
              variant="h6"
              name="Hire Mobile Engineers"
              sx={styles.heading}
            />
            <Typo
              variant="body2"
              name="Top-Notch Development for Android and iOS apps for businesses."
            />
          </ScrollAnimation>
        </Grid>

        <Grid
          container
          sx={styles.block2}
          onClick={() => router.push("/services/php-developer")}
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
            <three.pointLight
              position={[8, 8, 8]}
              intensity={4}
              color="#f0f0f0"
            />
            <Suspense fallback={null}>
              <group rotation={[-0.3, 1.5, 0]}>
                <Model3 hinge={props.open.to([0, 1], [1.575, -0.825])} />
              </group>
              <pointLight intensity={40} position={[-40, -15, -50]} />
            </Suspense>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -4.5, 0]}
              opacity={15}
              width={20}
              height={20}
              blur={2}
              far={4.5}
            />
          </Canvas>
          <ScrollAnimation animateIn="flipInX">
            <Typo variant="h6" name="Hire PHP Engineers" sx={styles.heading} />
            <Typo
              variant="body2"
              name="PHP Development to help your business outshine your competitors."
            />
          </ScrollAnimation>
        </Grid>

        <Grid
          container
          sx={styles.block2}
          onClick={() => router.push("/services/ai-engineer")}
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
            <three.pointLight
              position={[8, 8, 8]}
              intensity={5}
              color="#f0f0f0"
            />
            <Suspense fallback={null}>
              <group rotation={[-0.3, 1.5, 0]}>
                <Model4 hinge={props.open.to([0, 1], [1.575, -0.825])} />
              </group>
              <pointLight intensity={10} position={[5, 15, -6]} />
            </Suspense>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -3.5, 0]}
              opacity={3}
              width={10}
              height={10}
              blur={2}
              far={4.5}
            />
            <pointLight intensity={1} position={[-8, -8, 0]} />
          </Canvas>
          <ScrollAnimation animateIn="flipInX">
            <Typo variant="h6" name="Hire AI Engineers" sx={styles.heading} />
            <Typo
              variant="body2"
              name="Versatile Machine Learning and Deep Learning to bring data driven solutions."
            />
          </ScrollAnimation>
        </Grid>

        <Grid
          container
          sx={styles.block2}
          onClick={() => router.push("/services/nodejs-developer")}
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
            <three.pointLight
              position={[8, 8, 8]}
              intensity={3}
              color="#f0f0f0"
            />
            <Suspense fallback={null}>
              <group rotation={[0, 2, 0]}>
                <Model5 hinge={props.open.to([0, 1], [1.575, -0.825])} />
              </group>
            </Suspense>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -2.5, 0]}
              opacity={1}
              width={2}
              height={2}
              blur={2}
              far={4.5}
            />
            <pointLight intensity={1} position={[-8, -5, -8]} />
          </Canvas>
          <ScrollAnimation animateIn="flipInX">
            <Typo
              variant="h6"
              name="Hire Node JS Developers"
              sx={styles.heading}
            />
            <Typo
              variant="body2"
              name="Build scalable and flexible multi-platform applications."
            />
          </ScrollAnimation>
        </Grid>

        <Grid
          container
          sx={styles.block2}
          onClick={() => router.push("/services/seo-sem-experts")}
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
            <Suspense fallback={null}>
              <group rotation={[-0.3, 1.5, 0]}>
                <Model6 hinge={props.open.to([0, 1], [1.575, -0.825])} />
              </group>
              <pointLight intensity={1} position={[10, 15, 10]} />
            </Suspense>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -4.5, 0]}
              opacity={15}
              width={20}
              height={20}
              blur={2}
              far={4.5}
            />
          </Canvas>
          <ScrollAnimation animateIn="flipInX">
            <Typo
              variant="h6"
              name="Hire SEO/SEM Experts"
              sx={styles.heading}
            />
            <Typo
              variant="body2"
              name="Achieve better search engine rankings and more traffic."
            />
          </ScrollAnimation>
        </Grid>
      </Grid>

      <motion.div
        style={styles.startBtn}
        whileHover={{ scale: 1.1, cursor: "pointer" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => router.push("/services")}
      >
        <Typo variant="body1" name="Explore Services" sx={styles.btnText} />
      </motion.div>
    </Grid>
  );
};

export default Offer;
