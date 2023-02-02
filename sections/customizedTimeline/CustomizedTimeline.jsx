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

const CustomizedTimeline = ({}) => {
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
            {/* Мобильное приложение
            <br />
            Как пользоваться станциями? */}
            Как подключиться к приложению
          </Typography>

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
              <Timeline
                position="left"
                sx={{
                  margin: "0px",
                  padding: "0px",
                }}
              >
                {steps.map((item, i) => (
                  <TimelineItem key={item.id}>
                    <TimelineOppositeContent
                      sx={{
                        m: "auto 0",
                        maxWidth: "110px",
                      }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.label}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot
                        color={item.timelineDotColor}
                        variant={item.variant}
                      >
                        <item.icon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        variant="h6"
                        component="span"
                        // sx={{ fontSize: "10px" }}
                        sx={{
                          fontSize: {
                            xs: "13px",
                            md: "18px",
                          },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{
                      m: "auto 0",
                      maxWidth: "110px",
                    }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    в путь!
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                      <NoCrashIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                </TimelineItem>
              </Timeline>
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // border: "1px solid red",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    // border: "1px solid green",
                    height: {
                      xs: "300px",
                      md: "606px",
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
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { CustomizedTimeline };
