import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";

import { ContactsSection } from "../sections/contactsSection/ContactsSection";
// import { MapSection } from "../sections/mapSection/MapSection";
import { TopArrow } from "../components/TopArrow";
import { Footer } from "../footer/Footer";

import { useRouter } from "next/router";

// import { useTranslation, Trans } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box } from "@mui/system";

const siteTitle = "contacts";

export default function Contacts({ title = siteTitle }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loader, setLoader] = useState(true);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoader(false);
    }
  }, []);
  const router = useRouter();
  const { locale } = router;

  const handelLanguageToggle = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "ru" ? "en" : "ru";

  const [header, setHeader] = useState("headerColor");

  const listenScrollEvent = (event) => {
    const bgColorChanged = 373;

    if (window.scrollY < bgColorChanged) {
      return setHeader("headerColor");
    } else if (window.scrollY > bgColorChanged) {
      return setHeader("headerColor2");
    }
  };

  return (
    <Box>
      <Head>
        <title>{title} | GreenGo </title>
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
        <div id="top-page" />
        <ContactsSection />

        <Footer sx={{ backgroundColor: "rgba(0, 179, 152, 1)" }} />
        {/* <TopArrow /> */}
      </Box>
    </Box>
  );
}
