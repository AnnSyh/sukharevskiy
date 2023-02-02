import { Grid, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import style from "/styles/SymmetricalTextSection.module.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

const SymmetricalTextSection = ({}) => {
  const { t } = useTranslation("common");

  return (
    <section id="about-section" className="section bg-light-gray">
      <Box
        sx={{
          width: "100%",
          position: "relative",
          paddingBottom: "0px !important",
        }}
      >
        <Box id="about" className="container-box">
          <Grid
            container
            sx={{
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Grid item md={6}>
              <Box
                sx={() => ({
                  margin: {
                    xs: "0px 0px 15px 0px",
                    sm: "0px 30px 30px 0px",
                  },
                  color: "black",
                })}
              >
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__fadeInLeftBig"
                >
                  <Typography
                    variant="body"
                    className={style.p}
                    sx={{ marginTop: "0px !important" }}
                  >
                    {/* {t("symmetrical_text_section_p_1")} */}
                    11 Качественных полнофункциональных развитых сервисов по
                    работе с электрозаправочными станциями почти нет
                  </Typography>
                  <Box className={style.listItem}>
                    <CheckCircleOutlineIcon />
                    {t("symmetrical_text_section_li_1")}
                    {/* Мало зарядных станций */}
                  </Box>
                  <Box className={style.listItem}>
                    <CheckCircleOutlineIcon />
                    {/* Мало электромобилей */}
                    {t("symmetrical_text_section_li_2")}
                  </Box>

                  <Typography variant="body" className={style.p}>
                    {/* Существующие сервисы для оплаты зарядных сессий разрознены и
                    сложны в пользовании */}
                    {t("symmetrical_text_section_p_2")}
                  </Typography>
                  <ul>
                    <li>
                      {/* Разные приложения производителей станций и интеграторов
                      станций */}
                      {t("symmetrical_text_section_li_3")}
                    </li>
                    <li>
                      {/* Мало способов оплаты */}
                      {t("symmetrical_text_section_li_4")}
                    </li>
                    <li>
                      {/* Отсутствует и плохо работает техподдержка */}
                      {t("symmetrical_text_section_li_5")}
                    </li>
                  </ul>
                  <h2>ПРОБЛЕМА</h2>
                  <blockquote className="quote">
                    {t("text_section_blockquote")}
                    {/* В настоящее время на рынке нет сервиса одновременно
                    упрощающего жизнь владельцам электромобилей и объединяющего
                    производителей, операторов и владельцев зарядных станций */}
                  </blockquote>
                </AnimationOnScroll>
              </Box>
            </Grid>
            <Grid item md={6}>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInRightBig"
              >
                <div className="text-5xl font-extrabold">
                  <Typography
                    variant="h1"
                    fontSize={{ xs: "20px", sm: "40px", lg: "52px" }}
                    marginBottom={{ xs: "30px" }}
                  >
                    {/* {t("symmetrical_text_section_title")} */}
                    СТРАТЕГИЯ
                  </Typography>
                </div>
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { SymmetricalTextSection };
