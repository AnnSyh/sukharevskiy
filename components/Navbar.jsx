import MenuIcon from "@mui/icons-material/Menu";
import
{
  AppBar, IconButton, Toolbar, Typography
} from "@mui/material";
import Image from "next/image";
import React from "react";
// import Search from "./Search";
import { Box } from "@mui/system";

import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { FormControlSelect } from "../sections/FormSection/FormControlSelect";
import Menu from "../sections/menu/Menu";
import styles from "../styles/menu.module.css";


const label = { inputProps: { "aria-label": "Switch demo" } };

function Navbar({ onMenuIconClick, close, isOpen, languageToggle, sx })
{
  const { t } = useTranslation("common");
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
          sx={{ flexGrow: 1, fontSize: "15px", color: "#fff" }}
        >
          {t("portfolio_of")}
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
            {t("student")}
          </Typography>
          <Image
            src="/mgua.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={60}
            height={60}
            priority
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [ "common" ])),
  },
});
