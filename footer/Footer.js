import { Box, Grid, Typography, Button } from "@mui/material";
// import { useTranslation } from "next-i18next";
import SoсialLinks from "../components/SoсialLinks";

export const Footer = ({ sx }) => {
  // const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "auto",
        widows: "100%",
        position: "relative",
        zIndex: "1",
        ...sx,
      }}
    >
      <footer>
        <Box
          sx={{
            minHeight: "150px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <SoсialLinks />
          <Typography component="div" align="center" sx={{ color: "#fff" }}>
            © All Rights Reserved
          </Typography>
          <Typography
            component="div"
            align="center"
            sx={{ color: "#fff", paddingBottom: "0px" }}
          >
            © 2022 GreenGo
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};
