import { Box, Typography } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

// import { MapSection } from "../sections/mapSection/MapSection";
import { Footer } from "../footer/Footer";

import { useRouter } from "next/router";

// import { useTranslation, Trans } from "next-i18next";

import { FormMy } from "../sections/FormSection/FormMy";

const siteTitle = "contacts";

export default function Contacts({ title = siteTitle })
{
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  const [ loader, setLoader ] = useState(true);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);


  useEffect(() =>
  {
    if (typeof window !== "undefined")
    {
      setLoader(false);
    }
  }, []);
  const router = useRouter();
  const { locale } = router;

  const handelLanguageToggle = (newLocale) =>
  {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "ru" ? "en" : "ru";

  const [ header, setHeader ] = useState("headerColor");

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

  return (
    <Box>
      <Head>
        <title>{title} | PortfolioOfSukharevsky </title>
      </Head>

      <Box className={header}>
        <Navbar
          onMenuIconClick={openMenu}
          close={closeMenu}
          isOpen={isMenuOpen}
          languageToggle={handelLanguageToggle}
        />
      </Box>

      <Box className="boxHeigh bg-light-gray">

        <Box component='main'
          className='main'
          sx={{
            height: '100vh',
            paddingBottom: '0px !important'
          }}
        >
          <div id="top-page" />

          <Box className="boxNotFindAnswer">
            <Typography className="boxNotFindAnswer__text" variant="body">
              not_find_answer
            </Typography>
          </Box>

          <FormMy />

          <Footer sx={{
            backgroundColor: "rgba(0, 179, 152, 1)",
            marginLeft: '-6rem',
            marginRight: '-6rem',
            width: 'calc(100% + 12rem)'
          }} />
          {/* <TopArrow /> */}
        </Box>

      </Box>

    </Box>
  );
}
