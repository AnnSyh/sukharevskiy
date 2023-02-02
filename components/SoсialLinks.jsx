import React from "react";
import { Box } from "@mui/system";
// import { useTranslation } from "next-i18next";

import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { FaVk } from "react-icons/fa";

const label = { inputProps: { "aria-label": "Switch demo" } };

function SoсialLinks() {
  // const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexFlow: "row nowrap",
        marginLeft: "10px",
        color: "#fff",
        minWidth: "220px",
      }}
    >
      <a href="https://twitter.com/" target="_blank" color="inherit">
        <TwitterIcon />
        {/* twitter */}
      </a>
      <a href="https://telegram.me/" target="_blank" color="inherit">
        <TelegramIcon />
        {/* telegram */}
      </a>
      <a href="https://www.facebook.com/" target="_blank" color="inherit">
        <FacebookIcon />
        {/* facebook */}
      </a>
      <a href="https://www.vk.com/" target="_blank" color="inherit">
        <Box sx={{ fontSize: "23px" }}>{/* <FaVk /> */}</Box>
        {/* vk */}
      </a>
    </Box>
  );
}
export default SoсialLinks;
