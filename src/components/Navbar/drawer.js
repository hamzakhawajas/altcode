import * as React from "react";
import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import styles from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function DrawerComp() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (index) => {
    if (index === 0) {
      router.push("/");
      setOpen(false);
    } else if (index === 1) {
      router.push("/services");
      setOpen(false);
    } else if (index === 2) {
      router.push("/about");
      setOpen(false);
    } else {
      router.push("/contact");
      setOpen(false);
    }
  };

  return (
    <Box>
      <Toolbar sx={styles.drawerToolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#050c1c",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={styles.iconButton}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider color="#c0ceeb" />

        <List>
          {["Home", "Services", "About", "Contact"].map((text, index) => (
            <ListItem key={text} disablePadding sx={styles.listItem}>
              <ListItemButton onClick={() => handleClick(index)}>
                <ListItemIcon sx={styles.listItemIcon}>
                  {index === 0 ? (
                    <HomeIcon />
                  ) : index === 1 ? (
                    <MiscellaneousServicesIcon />
                  ) : index === 2 ? (
                    <InfoIcon />
                  ) : (
                    <ContactSupportIcon />
                  )}
                </ListItemIcon>

                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    style: { fontWeight: "bold", fontSize: 16 },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
