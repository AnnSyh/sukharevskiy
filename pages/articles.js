import { Inter } from "@next/font/google";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

import styles from "../styles/Home.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Footer } from "../footer/Footer";

const inter = Inter({ subsets: [ "latin" ] });

export default function Articles()
{
  const { t } = useTranslation("common");
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  const [ header, setHeader ] = useState("headerColor");

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  const listenScrollEvent = (event) =>
  {
    const bgColorChanged = 373;

    if (window.scrollY < bgColorChanged)
    {
      return setHeader("headerColor");
    } else if (window.scrollY > bgColorChanged)
    {
      return setHeader("headerColor2");
    }
  };

  useEffect(() =>
  {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const router = useRouter();
  const { locale } = router;

  const handelLanguageToggle = (newLocale) =>
  {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "ru" ? "en" : "ru";

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={header}>
        <Navbar
          onMenuIconClick={openMenu}
          close={closeMenu}
          isOpen={isMenuOpen}
          languageToggle={handelLanguageToggle}
          sx={{
            backdropFilter: "blur(8px)",
            // color: "black",
          }}
        />
      </Box>

      <Box component='main' className='main'>
        <h2 className={inter.className} align="center">
          {/* Статьи  */}
          {/* {t("welcome")} */}
          {t("articles")}
        </h2>
        <p>Делаю карточками с картинками</p>

        <div className={styles.grid}>ffff</div>
        <Footer sx={{
          backgroundColor: "rgba(0, 179, 152, 1)",
          marginLeft: '-6rem',
          marginRight: '-6rem',
          width: 'calc(100% + 12rem)'
        }} />
      </Box>
    </>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [ "common" ])),
  },
});
