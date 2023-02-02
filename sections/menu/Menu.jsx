import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";

import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
// import { useTranslation } from "next-i18next";
import { Avatar, Image } from "@mui/material";
import styles from "../../styles/menu.module.css";

export default function Menu(props) {
  // const { t } = useTranslation("common");
  const { pathname } = useRouter(); //подсвечиваем акт ссылку
  const menuItems = [
    {
      pageName: `homepage`,
      link: "/",
    },
    {
      pageName: `portfolio`,
      link: "/portfolio",
    },
    {
      pageName: `articles`,
      link: "/articles",
    },
    {
      pageName: `questions`,
      link: "/questions",
    },
    {
      pageName: `contacts`,
      link: "/contacts",
    },
  ];
  const label = { inputProps: { "aria-label": "Switch demo" } };

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
                      <HomeIcon />
                    ) : index % 2 === 0 ? (
                      <HelpOutlineIcon />
                    ) : index % 3 === 0 ? (
                      <MailIcon />
                    ) : (
                      <>
                        <ImportContactsIcon />
                      </>
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
