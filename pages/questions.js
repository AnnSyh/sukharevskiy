import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ModalWindow from "../components/modalWindow/form";
import Navbar from "../components/Navbar";
// import { TopArrow } from "../components/TopArrow";
import { useRouter } from "next/router";
import { Footer } from "../footer/Footer";
import { AccordionSection } from "../sections/accordionSection/AccordionSection";

const siteTitle = "questions";

export default function Questions({ title = siteTitle })
{
  const { t } = useTranslation("common");
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  const [ loader, setLoader ] = useState(true);

  const [ open, setOpen ] = useState(false);
  const handleClickOpen = () =>
  {
    // console.log("handleClickOpen setOpen = ", open);
    setOpen(true);
  };
  const handleClose = () =>
  {
    setOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  useEffect(() =>
  {
    if (typeof window !== "undefined")
    {
      setLoader(false);
    }
  }, []);

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
  const router = useRouter();
  const { locale } = router;

  const handelLanguageToggle = (newLocale) =>
  {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "ru" ? "en" : "ru";

  return (
    <Box>
      <Head>
        <title>{title} | PortfolioOfSukharevsky</title>
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
          sx={{ height: '100vh' }}
        >

          <div id="top-page" />

          <AccordionSection />

          <Box className="boxNotFindAnswer">
            <Typography className="boxNotFindAnswer__text" variant="body">
              {t("not_find_answer")}
            </Typography>

            <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{ margin: "30px auto 60px auto" }}
            >
              contact_us
            </Button>
          </Box>

          <ModalWindow open={open} handleClose={handleClose} />

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
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [ "common" ])),
  },
});
