import * as React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";

import Typography from "../components/Typography";
import { Inter } from "@next/font/google";

import Fancybox from "../components/Fancybox";

import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.8,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const items = [
  {
    url: "/images/сertificates/SertifikatK.jpg",
    title:
      "Прохождение стажировки в Отделе по работе с молодежью в КонсультантПлюс",
    width: "40%",
    bgcolor: "red",
  },
  {
    url: "/images/сertificates/TIN.jpg",
    title:
      "Призер секции «Корпоративное право» в рамках XXI Международной конференции молодых ученных",
    width: "20%",
    bgcolor: "green",
  },
  {
    url: "/images/сertificates/aktion-1.jpeg",
    title:
      "Участник 2-ого этапа VII Всероссийской студенческой Олимпиады Актион Студенты 2021/2022 по направлению юриспруденция",
    width: "40%",
    bgcolor: "blue",
  },
  {
    url: "/images/сertificates/aktion.jpeg",
    title:
      "Сертификат о прохождении курса Legal design: Как структура правовых документов помогает достичьнужной цели",
    width: "38%",
    bgcolor: "violet",
  },
  {
    url: "/images/сertificates/0001-scaled.jpg",
    title: "Кейс-чемпионат IT Moot Court от компании «Гардиум»",
    width: "38%",
  },
  {
    url: "/images/сertificates/0001-1-scaled.jpg",
    title: "Всероссийская олимпиада студентов «Я - профессионал»",
    width: "24%",
  },
  {
    url: "/images/сertificates/ПравовойДиктант-1-scaled.jpg",
    title: "Правовой(юридический) диктант",
    width: "40%",
  },
  {
    url: "/images/сertificates/syharevskiy-scaled.jpg",
    title:
      "VI Всеросийский конкурс на лучшую студенческую научную работу  по административному праву и процессу",
    width: "20%",
  },
  {
    url: "/images/сertificates/PenPaper-scaled.jpg",
    title:
      "Сертификат за участие в очном этапе VII Международного конкурса судебных поединков и ораторского искусства «KUTAFIN LEGAL CUP 2021»",
    width: "40%",
  },
];

export default function Achievements() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    // console.log("handleClickOpen setOpen = ", open);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      {/* <Link href="/questions" className={styles.card}>
        <Box sx={{ width: "255px", margin: "auto" }}>
          <h2 className={inter.className} align="center">
            Достижения <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Здесь можно увидеть сертификаты и ссылки на публикации
          </p>
        </Box>
      </Link> */}

      <Fancybox>
        <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
          {items.map((image, i, handleClickOpen) => (
            <ImageIconButton
              key={i}
              style={{
                width: image.width,
              }}
              data-fancybox="gallery"
              data-src={image.url}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center 40%",
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: `${image.bgcolor}`,
                }}
              />
              <ImageBackdrop className="imageBackdrop" />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "common.white",
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {image.title}
                  <div className="imageMarked" />
                </Typography>
              </Box>
            </ImageIconButton>
          ))}
        </Box>
      </Fancybox>
    </Container>
  );
}
