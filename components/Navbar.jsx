import React, { useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import Search from "./Search";
// import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/menu.module.css";

import { Box } from "@mui/system";
import Menu from "../sections/menu/Menu";
import { FormControlSelect } from "../sections/FormSection/FormControlSelect";
// import { useTranslation } from "next-i18next";
import { NoEncryption } from "@mui/icons-material";

const nav = [
  { id: 1, title: `homepage`, path: "/" },
  { id: 2, title: `portfolio`, path: "/portfolio" },
  { id: 3, title: `articles`, path: "/articles" },
  { id: 4, title: `questions`, path: "/questions" },
  { id: 5, title: `contacts`, path: "/contacts" },
];
const label = { inputProps: { "aria-label": "Switch demo" } };

function Navbar({ onMenuIconClick, close, isOpen, languageToggle, sx }) {
  // const { t } = useTranslation("common");
  // const { pathname } = useRouter(); //подсвечиваем акт ссылку
  // console.log("pathname = ", pathname);

  return (
    <AppBar position="fixed" sx={sx}>
      <Menu close={close} isOpen={isOpen}></Menu>
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          flexFlow: "row wrap",
          position: "relative",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: {
              xs: 0,
              md: 2,
            },
            color: "#fff",
          }}
          onClick={onMenuIconClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontSize: "15px" }}
        >
          Портфолио Сухаревского Ивана Ивановича
        </Typography>
        {/* select для выбора языка */}
        <FormControlSelect
          languageToggle={languageToggle}
          sx={{ margin: "10px" }}
        />
        <Box
          // className="navbar-ul"
          // component="ul"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            justifyContent: "space-between",
            alignItems: "center",
            flexFlow: "row nowrap",
            marginLeft: "10px",
            color: "#fff",
            // minWidth: "455px",
          }}
        >
          {" "}
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontSize: "15px", marginRight: "15px" }}
          >
            студента
          </Typography>
          <Image
            src="/mgua.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={60}
            height={60}
            priority
          />
          {/* {nav.map((item, index, path) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component="a"
                href={item.path}
                className={pathname === item.path ? styles.active : styles.link}
              >
                {item.title}
              </ListItemButton>
            </ListItem>
          ))} */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
