import { useState } from "react";
import { Item } from "./item/item";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "next-i18next";

SwiperCore.use([Virtual, Navigation, Pagination]);

export const CaruselSection = ({}) => {
  const { t } = useTranslation("common");
  // console.log("t=", t("welcome"));
  const items = [
    {
      id: 0,
      desc: `${t("difficulty_accessing_stations")}`,
      position: `${t("for_electric_car_owners")}`,
      image: "./images/problems/car-1.png",
    },
    {
      id: 1,
      desc: `${t("complexity_of_searching")}`,
      position: `${t("for_electric_car_owners")}`,
      image: "./images/problems/car-2.png",
    },
    {
      id: 2,
      desc: `${t("inability_communicate_with_other_owners")}`,
      position: `${t("for_electric_car_owners")}`,
      image: "./images/problems/car-3.png",
    },
    {
      id: 3,
      desc: `${t("automated_payment")}`,
      position: `${t("for_electric_car_owners")}`,
      image: "./images/problems/car-4.png",
    },
    {
      id: 4,
      desc: `${t("parking_spaces_for_charging_electric_vehicles")}`,
      position: `${t("for_electric_car_owners")}`,
      image: "./images/problems/car-5.png",
    },
    {
      // Для владельцев зарядных станций
      id: 5,
      desc: `${t("stability_charging_stations")}`,
      position: `${t("for_charging_stations_owners")}`,
      image: "./images/problems/car-6.png",
    },
    {
      id: 6,
      desc: `${t("monitoring_stability")}`,
      position: `${t("for_charging_stations_owners")}`,
      image: "./images/problems/car-7.png",
    },
    {
      id: 7,
      desc: `${t("gaining_popularity")}`,
      position: `${t("for_charging_stations_owners")}`,
      image: "./images/problems/car-8.jpg",
    },
    {
      id: 8,
      desc: `${t("no_extra_income")}`,
      position: `${t("for_charging_stations_owners")}`,
      image: "./images/problems/car-9.png",
    },
    {
      id: 9,
      desc: `${t("parking_spaces_for_charging_electric_vehicles")}`,
      position: `${t("for_charging_stations_owners")}`,
      image: "./images/problems/car-10.png",
    },
  ];

  return (
    <section id="carusel-section" className="section bg-dark-gray">
      <Box
        sx={() => ({
          backgroundColor: "f5f5f5",
          width: "100%",
          position: "relative",
          display: "flex",
          paddingTop: "30px",
          paddingBottom: "100px",
        })}
      >
        <Box
          sx={() => ({
            width: "100%",
            maxWidth: "1150px",
            margin: "0 auto",
            display: "flex",
            flexFlow: "row wrap",
            position: "relative",
          })}
        >
          <Box
            sx={() => ({
              width: "100%",
              margin: "0 auto",
              display: "flex",
              flexFlow: "column nowrap",
              position: "relative",
              alignItems: "center",
            })}
          >
            <Typography
              variant="h1"
              sx={{ textAlign: "center" }}
              fontSize={{ xs: "35px", md: "52px" }}
            >
              {/* Почему GreenGo */}
              {t("why_greengo")}
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              fontSize={{ xs: "25px", md: "42px" }}
            >
              {/* Мы решаем проблемы: */}
              {t("we_solve_problems")}
            </Typography>
            <Box
              sx={() => ({
                width: "100%",
                margin: "0 auto",
                display: "flex",
                flexFlow: "row wrap",
                position: "relative",
              })}
            >
              <Grid
                item
                container
                justifyContent="space-between"
                sx={{ position: "relative" }}
              >
                <Swiper
                  breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                    },
                    "@1.50": {
                      slidesPerView: 4,
                    },
                  }}
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {items.map((item, i, handleClickOpen) => (
                    <SwiperSlide key={i}>
                      <Box
                        sx={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          height: "100%",
                        }}
                      >
                        <Item item={item} handleClickOpen={handleClickOpen} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
