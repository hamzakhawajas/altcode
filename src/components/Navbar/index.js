import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import styles from "./styles";
import { pages } from "./data";
import DrawerComp from "./drawer";
import Logo from "images/logo.png";
import Loader from "components/Loader";

const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
      document.body.style.overflow = "hidden"; // Disable scrolling
    };

    const handleComplete = (url) => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Enable scrolling
    };

    // Listen to popstate event
    window.addEventListener("popstate", handleStart);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      window.removeEventListener("popstate", handleStart);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
    };
  }, [router.events]);

  useEffect(() => {
    const currentRoute = router.pathname;

    if (
      currentRoute === "/services" ||
      currentRoute === "/services/python-developer" ||
      currentRoute === "/services/ai-engineer" ||
      currentRoute === "/services/content-writer" ||
      currentRoute === "/services/devOps-engineer" ||
      currentRoute === "/services/mobile-developer" ||
      currentRoute === "/services/nodejs-developer" ||
      currentRoute === "/services/php-developer" ||
      currentRoute === "/services/seo-sem-experts" ||
      currentRoute === "/services/ui-ux-developer"
    ) {
      setValue(1);
    } else if (currentRoute === "/about") {
      setValue(2);
    } else if (currentRoute === "/contact") {
      setValue(3);
    } else {
      setValue(0);
    }
  }, [router.pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Grid container sx={styles.grid}>
          <Toolbar sx={styles.toolbar}>
            <Image priority={true} src={Logo} alt="logo" />

            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <Tabs
                sx={styles.headerTabs}
                textColor="inherit"
                value={value}
                onChange={(e, value) => {
                  setValue(value);

                  if (value == 1) {
                    router.push("/services");
                  } else if (value == 2) {
                    router.push("/about");
                  } else if (value == 3) {
                    router.push("/contact");
                  } else if (value == 0) {
                    router.push("/");
                  }
                }}
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
              >
                {pages.map((page, index) => (
                  <Tab label={page.name} key={index} sx={styles.headerLabel} />
                ))}
              </Tabs>
            )}
          </Toolbar>
        </Grid>
      )}
    </>
  );
};

export default Navbar;
