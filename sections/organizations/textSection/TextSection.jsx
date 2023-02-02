import { Grid, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import style from "/styles/TextSection.module.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

const TextSection = ({}) => {
  const { t } = useTranslation("common");

  return (
    <section id="about-section" className="section bg-light-gray">
      <Box
        sx={{
          width: "100%",
          position: "relative",
          paddingTop: "30px",
        }}
      >
        <Box
          id="about"
          className="container-box"
          sx={() => ({
            alignItems: "flex-top",
          })}
        >
          <Grid container>
            <Grid item md={6}>
              <div className="text-5xl font-extrabold">
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__fadeInLeftBig"
                >
                  <Typography
                    variant="h1"
                    fontSize={{ xs: "20px", sm: "40px", lg: "52px" }}
                    marginBottom={{ xs: "30px" }}
                  >
                    {/* {t("text_section_title")} */}
                    АНАЛИЗ
                  </Typography>
                </AnimationOnScroll>
              </div>
            </Grid>
            <Grid item md={6}>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInRightBig"
              >
                <Box
                  sx={() => ({
                    margin: {
                      xs: "0px 0px 15px 0px",
                      sm: "0px 30px 30px 0px",
                    },
                    color: "black",
                  })}
                >
                  <Typography
                    variant="body"
                    className={style.p}
                    sx={{ marginTop: "0px !important" }}
                  >
                    В 2021-2022 годах проведены десятки переговоров с
                    потенциальными партнерами на территории России и стран
                    ближнего зарубежья
                  </Typography>
                  <Typography
                    variant="body"
                    className={style.p}
                    sx={{ marginTop: "0px !important" }}
                  >
                    Проанализированы десятки технических и программных решений
                    Выбраны производители ЭЗС для интеграции с их оборудованием
                    Проанализирован функционал и выявлены недостатки поставщиков
                    ПО
                  </Typography>
                  <h2>Производители станций</h2>
                  <Typography variant="body" className={style.p}>
                    Prosto Energy ООО «Просто Энерджи» (Могилев-Москва), Portal
                    Energy ООО «Портал Энерджи», E-Prom ООО «Промэнерго», NSP
                    ООО «ЗЭТЗ», ПСС ООО «Завод нефтегазовой аппаратуры Анодъ»,
                    Pandora ООО «Пандора ЛЕД», Nera ООО «Зарядная станция», ООО
                    «Парус Электро», AutoEnterprise ООО Автоэнтерпрайз»
                    г.Харьков, ООО «ГлобалЭкоТрейд» г.Харьков, ООО «Яблочков»
                  </Typography>
                  <h2>Поставщики программного обеспечения</h2>
                  <Typography variant="body" className={style.p}>
                    Volt EV, Electrifly, Electrocars4, Sofix (Secreate.
                    E-mobility, ev2go), IT.Charge6. PlugMe, Zevs, Touch,
                    VoltForDrive, YouCharge, ПСС (ГК АйТи), ChS-Server,
                    Intermobility
                  </Typography>
                  <h2>СТРАТЕГИЯ</h2>
                  <blockquote className="quote">
                    Предоставить лучший сервис и уникальные функции Стабильный,
                    удобный, универсальный Инновационный и интеллектуальный
                  </blockquote>
                </Box>
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { TextSection };
