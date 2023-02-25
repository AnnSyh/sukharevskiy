import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import
{
  Box, Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useRouter } from "next/router";
import styles from "../../styles/menu.module.css";

export default function Menu(props)
{
  const { t } = useTranslation("common");
  const { pathname } = useRouter(); //подсвечиваем акт ссылку
  const menuItems = [
    {
      pageName: `${ t("homepage") }`,
      link: "/",
    },
    {
      pageName: `${ t("portfolio") }`,
      link: "/portfolio",
    },
    {
      pageName: `${ t("articles") }`,
      link: "/articles",
    },
    {
      pageName: `${ t("questions") }`,
      link: "/questions",
    },
    // {
    //   pageName: `contacts`,
    //   link: "/contacts-old",
    // },
  ];
  const label = { inputProps: { "aria-label": "Switch demo" } };

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
      <Drawer anchor="left" open={props.isOpen} onClose={props.close}>
        <Box
          sx={{
            width: 230,
            color: "#fff",
            backgroundColor: "#00b398",
            height: "100%",
          }}
          role="presentation"
          onClick={props.close}
          onKeyDown={props.close}
        >
          <List>
            {menuItems.map((item, index, link) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.link}
                  className={
                    pathname === item.link ? styles.active : styles.link
                  }
                >
                  <ListItemIcon
                    sx={{ color: "#fff" }}
                    className={
                      pathname === item.link ? styles.active : styles.link
                    }
                  >
                    {index === 0 ? (
                      <>
                        <HomeIcon />
                      </>
                    ) : index % 2 === 0 ? (
                      <><NewspaperIcon /></>
                    ) : index % 3 === 0 ? (
                      <><HelpOutlineIcon /></>
                    ) : (
                      <><ImportContactsIcon /></>
                    )}
                  </ListItemIcon>
                  {/* <ListItemText primary={t(item.pageName)} /> */}
                  <ListItemText primary={item.pageName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [ "common" ])),
  },
});
