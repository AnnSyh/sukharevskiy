import { Box, Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "next-i18next";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import imgUrl from "../../public/images/icons/icon-clock.svg";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Image } from "@mui/material";
import ParticlesBackground from "../../components/particlesBackground";

const ProvideSection = ({}) => {
  const { t } = useTranslation("common");

  const items = [
    {
      image: `url('/images/provide-new/img-3.jpg')`,
      desc: `${t("provide_section_card_1")}`,
    },
    {
      image: `url('/images/provide-new/img-2.jpg')`,
      desc: `${t("provide_section_card_2")}`,
    },
    {
      image: `url('/images/provide-new/img-1.png')`,
      desc: `${t("provide_section_card_3")}`,
    },
    {
      image: `url('/images/provide-new/img-4.png')`,
      desc: `${t("provide_section_card_4")}`,
    },
    {
      image: `url('/images/provide-new/img-5.png')`,
      desc: `${t("provide_section_card_5")}`,
    },
    {
      image: `url('/images/provide/img-6.jpg')`,
      desc: `${t("provide_section_card_6")}`,
    },
  ];

  return (
    <section id="provide-section" className="section bg-light-gray">
      <Box
        sx={{
          backgroundColor: "#fff",
          position: "relative",
          paddingTop: "30px",
          overflow: "hidden",
          paddingLeft: {
            xs: "0px",
            md: "15px",
          },
        }}
      >
        <Box className="container-box">
          <Typography
            variant="h1"
            sx={{ textAlign: "center", width: "100%", marginBottom: "60px" }}
            fontSize={{ xs: "25px", md: "52px" }}
          >
            {/* Предоставляем */}
            {t("provide_section_title")}
          </Typography>

          <Grid container>
            {items.map((item, i) => (
              <Grid
                item
                className="card card-provide"
                key={i}
                sx={(theme) => ({
                  borderRadius: theme.radius.default,
                  // borderColor: "transporent",
                })}
              >
                <Box className="wrap">
                  <Box className="card">
                    <Box className="front">
                      <CheckCircleOutlineIcon />
                      <span className="material-symbols-rounded">
                        touch_app
                      </span>

                      <Typography
                        variant="body"
                        gutterBottom
                        textAlign="center"
                        fontSize={{ xs: "15px", md: "15px" }}
                        sx={{
                          marginTop: "20px",
                          // padding: "0 13px 30px",
                          padding: "0 15px 0",
                          color: "black",
                          textAlign: "left",
                          color: "#fff",
                        }}
                      >
                        {t(item.desc)}
                      </Typography>
                    </Box>

                    <Box
                      className="back"
                      sx={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundColor: "rgb(0, 179, 152, 0.5)",
                        backgroundImage: `${item.image}`,
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <ParticlesBackground />
      </Box>
    </section>
  );
};

export { ProvideSection };
