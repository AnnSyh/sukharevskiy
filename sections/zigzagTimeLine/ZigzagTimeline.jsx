import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { Box, Button, Grid, Typography, Paper } from "@mui/material";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PlaceIcon from "@mui/icons-material/Place";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import NoCrashIcon from "@mui/icons-material/NoCrash";

import { StoreButtons } from "../../components/StoreButtons";

import style from "../../styles/ZigzagTimeline.module.css";

const ZigzagTimeline = ({}) => {
  const steps = [
    {
      id: 1,
      label: "шаг 1",
      icon: CloudDownloadIcon,
      timelineDotColor: "primary",
      variant: "outlined",
      description: `Скачайте приложение`,
    },
    {
      id: 2,
      label: "шаг 2",
      icon: PlaceIcon,
      // timelineDotColor: "secondary",
      variant: "outlined",
      description: "Выберите на карте станцию (Возможно бронирование станции)",
    },
    {
      id: 3,
      label: "шаг 3",
      icon: PowerSettingsNewIcon,
      timelineDotColor: "primary",
      variant: "outlined",
      description: `Подключите зарядный кабель к машине и нажмите кнопку «Начать зарядку»`,
    },
    {
      id: 4,
      label: "шаг 4",
      icon: AccountBalanceWalletIcon,
      // timelineDotColor: "primary",
      variant: "outlined",
      description: `Привяжите банковскую карту и оплатите зарядку в приложении`,
    },
    {
      id: 5,
      label: "шаг 5",
      icon: BatteryChargingFullIcon,
      timelineDotColor: "primary",
      variant: "outlined",
      description: `Дождитесь окончания процесса зарядки`,
    },
    {
      id: 6,
      label: "шаг 6",
      icon: ElectricalServicesIcon,
      // timelineDotColor: "primary",
      variant: "outlined",
      description: `После завершения достаньте зарядный кабель`,
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
            Как подключиться к приложению
          </Typography>

          <Grid
            container
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
                // md: "row",
              },
            }}
          >
            <Grid
              item
              lg={2}
              md={12}
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: {
                      xs: "300px",
                      md: "300px",
                    },
                  }}
                >
                  <img
                    src="../../images/phone.png"
                    width="auto"
                    height="100%"
                    alt=""
                  />
                </Box>
                <StoreButtons sx={{ justifyContent: "center" }} />
              </Box>
            </Grid>
            <Grid
              item
              lg={10}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginBottom: "60px",
              }}
            >
              <div className={style.timeline}>
                <div className={style.outer}>
                  {steps.map((item, i) => (
                    <div key={i} className={style.timelineCard}>
                      <div className={style.info}>
                        <TimelineDot
                          className={style.timelineDot}
                          color={item.timelineDotColor}
                          variant={item.variant}
                        >
                          <item.icon />
                        </TimelineDot>
                        <h3 className={style.title}>{item.label}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { ZigzagTimeline };
