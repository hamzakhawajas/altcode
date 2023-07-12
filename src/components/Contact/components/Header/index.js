import React from "react";
import * as Yup from "yup";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMediaQuery, useTheme, Grid, Box } from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
          color="white"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Name is Required!"),
    email: Yup.string()
      .required("Email is Required!")
      .email("Email is Invalid!"),
    text: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("This is a required field!"),
  });

  return (
    <Grid container sx={styles.bg}>
      <Navbar />
      <Grid container sx={styles.grid}>
        <Grid container item md={9} sm={12} xs={12} sx={styles.container}>
          <Grid container item md={6} sm={12} xs={12} sx={styles.block}>
            <Typo variant="h4" sx={styles.text} name="Get In Touch" />
            <Typo
              variant="body2"
              name="We are here for you. How can we help?"
            />
            <Formik
              initialValues={{ name: "", email: "", text: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {() => (
                <Form style={styles.form}>
                  <Typo name="Full Name" variant="body2" />
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    style={styles.field}
                  />
                  <Box sx={styles.error}>
                    <ErrorMessage name="name" />
                  </Box>

                  <Typo name="Email" variant="body2" />
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    style={styles.field}
                  />
                  <Box sx={styles.error}>
                    <ErrorMessage name="email" />
                  </Box>

                  <Typo name="Message" variant="body2" />
                  <Field
                    name="text"
                    type="textarea"
                    component="textarea"
                    rows="4"
                    placeholder="Go ahead, we are listening..."
                    style={styles.textField}
                  />
                  <Box sx={styles.error}>
                    <ErrorMessage name="text" />
                  </Box>

                  <button type="submit" style={styles.button}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </Grid>

          <Grid container item md={5} sm={12} xs={12} sx={styles.location}>
            <Canvas camera={{ position: [1, 1, 2] }} style={{ height: "25vh" }}>
              <Suspense fallback={null}>
                <Stars />
                <Stars />
              </Suspense>
            </Canvas>

            <Typo name="Headquaters" variant="body1" sx={styles.heading} />
            <Grid sx={styles.address}>
              <LocationOnIcon fontSize="xsmall" sx={styles.icon} />
              <Typo
                name="7901 4th St. N, STE 6279 St. Petersburg FL 33702 United States"
                variant="body2"
              />
            </Grid>

            <Grid sx={styles.info}>
              <CallIcon fontSize="xsmall" sx={styles.icon} />
              <Typo name="+1 (669) 257-4131" variant="body2" />
            </Grid>

            <Typo name="Sub-office" variant="body1" sx={styles.heading} />
            <Grid sx={styles.address}>
              <LocationOnIcon fontSize="xsmall" sx={styles.icon} />
              <Typo
                name="Bank Islami Building, D-Block, Valencia, Lahore, Pakistan 54000"
                variant="body2"
              />
            </Grid>

            <Grid sx={styles.info}>
              <CallIcon fontSize="xsmall" sx={styles.icon} />
              <Typo name="+92 (346) 145-8822" variant="body2" />
            </Grid>

            <Grid sx={styles.info}>
              <EmailIcon fontSize="xsmall" sx={styles.icon} />
              <Typo name="hello@altcodelabs.com" variant="body2" />
            </Grid>
          </Grid>
        </Grid>

        {isMatch && (
          <Box sx={styles.socialIcons}>
            <FacebookIcon sx={styles.color} />
            <TwitterIcon sx={styles.color} />
            <LinkedInIcon sx={styles.color} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
