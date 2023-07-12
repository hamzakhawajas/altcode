import * as THREE from "three";
import { useRouter } from "next/router";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import ScrollAnimation from "react-animate-on-scroll";
import React, { Suspense, useRef, useState } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { ContactShadows } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import styles from "./styles";
import Navbar from "components/Navbar";
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

function Model7({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/ui.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -5), 0.5);
    state.camera.lookAt(0, -0.3, 0);
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

function Model8({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/devops.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -24), 0.5);
    state.camera.lookAt(2, 2, 0);
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

function Model9({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/writer.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -3.5), 0.5);
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

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const [open] = useState(false);
  const props = useSpring({ open: Number(open) });
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container sx={styles.container}>
      <Navbar />

      <Grid container sx={isMatch ? styles.mobileViewDisplay : styles.desc}>
        <Typo variant="h3" name="Our Software Development Services" />

        <Grid container item md={12} sm={12} xs={12} sx={styles.block}>
          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
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

            <ScrollAnimation initiallyVisible animateIn="flipInX">
              <Typo
                variant="h6"
                name="Hire Python Developer"
                sx={styles.heading}
              />
              <Typo
                variant="body2"
                name="Hire dedicated python developers who have years of experience in long-term partnership with the industry leaders."
              />
            </ScrollAnimation>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
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

            <ScrollAnimation initiallyVisible animateIn="flipInX">
              <Typo
                variant="h6"
                name="Hire Mobile App Developer"
                sx={styles.heading}
              />
              <Typo
                variant="body2"
                name="Our Mobile engineers will assist you in creating quick, modern, and dependable apps that will amaze your users."
              />
            </ScrollAnimation>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
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
                position={[0, -4, 0]}
                opacity={15}
                width={10}
                height={10}
                blur={2}
                far={4.5}
              />
            </Canvas>

            <ScrollAnimation animateIn="flipInX">
              <Typo
                variant="h6"
                name="Hire PHP Developer"
                sx={styles.heading}
              />
              <Typo
                variant="body2"
                name="Our PHP developers are skilled and experienced in working with a number of PHP frameworks to create custom apps."
              />
            </ScrollAnimation>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/nodejs-developer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <three.pointLight
                position={[8, 8, 8]}
                intensity={5}
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
              <pointLight intensity={1} position={[-10, -10, -10]} />
            </Canvas>

            <ScrollAnimation animateIn="flipInX">
              <Typo
                variant="h6"
                name="Hire Node JS Developers"
                sx={styles.heading}
              />
              <Typo
                variant="body2"
                name="Hire Node.JS Developers to create real-time, data-intensive, and scalable online and mobile apps."
              />
            </ScrollAnimation>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/ai-engineer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.3, 1.5, 0]}>
                  <Model4 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={10} position={[5, 15, -6]} />
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
              </Suspense>
            </Canvas>

            <ScrollAnimation animateIn="flipInX">
              <Typo variant="h6" name="Hire AI Engineers" sx={styles.heading} />
              <Typo
                variant="body2"
                name="Hire experienced AI & ML engineers, and consultants who can build AI applications using modern tools and technology."
              />
            </ScrollAnimation>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
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
                name="Hire SEO/SEM Experts from Altcode Labs who have more than 10 years of expertise in website development, SEO, and PPC."
              />
            </ScrollAnimation>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/ui-ux-developer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.3, 1.5, 0]}>
                  <Model7 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={6} position={[30, 15, 10]} />
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -2.5, 0]}
                opacity={15}
                width={3}
                height={5}
                blur={2}
                far={4.5}
              />
            </Canvas>

            <ScrollAnimation animateIn="flipInX">
              <Typo
                variant="h6"
                name="Hire UI/UX Developer"
                sx={styles.heading}
              />
              <Typo
                variant="body2"
                name="Proin scelerisque porttitor feugiat. Mauris meopo en varius tellus elusei suscipit hendr"
              />
            </ScrollAnimation>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/devOps-engineer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.3, 1.5, 0]}>
                  <Model8 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={3} position={[20, 15, 5]} />
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0.9, -4.5, 0]}
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
                name="Hire DevOps Engineer"
                sx={styles.heading}
              />
              <Typo
                variant="body2"
                name="Aenean pharetra est dictum, ultricies nontem er sum. Cras en pretium hendrerit ultricies"
              />
            </ScrollAnimation>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/content-writer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.5, -0.5, 0]}>
                  <Model9 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={3} position={[10, 20, -5]} />
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -2, -2]}
                opacity={30}
                width={10}
                height={10}
                blur={2}
                far={4.5}
              />
            </Canvas>

            <ScrollAnimation animateIn="flipInX">
              <Typo
                variant="h6"
                name="Hire Content Writers"
                sx={styles.heading}
              />
              <Typo
                variant="body2"
                name="Mauris varius tellus eu lectus suscipit, sed sus cipito nisi sagai aenean pharetra ultricies"
              />
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
