import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { display } from "@mui/system";
import { StoreButtons } from "../../components/StoreButtons";

export default function FirstSection({}) {
  const { t } = useTranslation("common");

  return (
    <section id="intro" className="section">
      <Box
        sx={(theme) => ({
          minHeight: "100vh",
          backgroundColor: theme.palette.grey.background,
          width: "100%",
          display: "flex",
        })}
      >
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
        >
          <video autoPlay muted loop id="video">
            {/* <source src={"../../images/electric-car-8.mp4"} type="video/mp4" /> */}
            <source src={"../../images/car-2.mp4"} type="video/mp4" />
          </video>
          <Box
            className="container-box fadeIn"
            sx={{
              height: "100%",
            }}
          >
            <Box
              className="fadeIn"
              sx={{
                width: "75%",
                position: "relative",
                bottom: "-10%",
                left: 0,
                height: "90%",
                display: "flex",
                flexDirection: "column",
                // border: "10px solid blue",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  component="div"
                  textTransform="uppercase"
                  sx={() => ({
                    color: "#fff",
                    fontSize: {
                      xs: "18px",
                      md: "33px",
                      lg: "40px",
                    },
                    textAlign: "left",
                  })}
                >
                  {t("software_development")}
                </Typography>
                <Box
                  sx={{
                    backgroundImage: `url('/images/logo.svg')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    height: 150,
                    textAlign: "left",
                    margin: "10% 0",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexFlow: "row nowrap",
                    justifyContent: {
                      xs: "start",
                      lg: "start",
                    },
                  }}
                >
                  <Link href="/contacts">
                    <Button
                      className="btn-contacts"
                      variant="contained"
                      sx={{ marginTop: "0px" }}
                    >
                      {t("contacts")}
                    </Button>
                  </Link>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "auto",
                  marginBottom: "60px",
                  // border: "1px solid red",
                }}
              >
                <StoreButtons sx={{ justifyContent: "space-between" }} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </section>
  );
}
