import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Box, fontSize, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll";

import imgUrl from "../../public/images/icons/icon-clock.svg";
// import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Image } from "@mui/material";
import { auto } from "@popperjs/core";
import style from "../../styles/TextSection.module.css";

const SecondSection = ({}) => {
  const { t } = useTranslation("common");

  const items = [
    {
      title: `web_development`,
      src: "/images/car.png",
      desc: `provides_stable_technical_solutions`,
    },
    {
      title: `devops`,
      src: "/images/car-2.png",
      desc: `provide_most_effective_service`,
    },
    {
      title: `design`,
      src: "/images/car-3.png",
      desc: `simplify_process`,
    },
  ];

  return (
    <section id="products-section" className="section bg-dark-gray">
      <Box className="container-box-wrapper">
        <Box className="container-box">
          <Grid
            container
            sx={{
              justifyContent: "center",
              position: "relative",
              top: "-30px",
              width: "calc(100% + 56px)",
              margin: {
                xs: "0px",
                md: "0px -30px",
              },
            }}
          >
            {/* ---------------- */}
            {items.map((item) => (
              <Card
                className="lab__card"
                key={item.title}
                sx={{
                  width: { xs: "90%", sm: "40%", md: "31%" },
                  borderRadius: "15px",
                  margin: "1% 1% 30px 1%",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    sx={{ height: 350, backgroundPosition: "top center" }}
                    image={item.src}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      variant="p"
                      fontFamily={"Roadradio"}
                      className={style.p}
                    >
                      {t(item.desc)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
            {/* ---------------- */}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { SecondSection };
