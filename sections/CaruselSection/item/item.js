import { useState, useStyles } from "react";
import { Box, Grid, Typography, Paper, Avatar } from "@mui/material";
import ModalWindow from "../../../components/modalWindow/slider";
import { styled } from "@mui/material-next/styles";

const item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#007FFF",
  ...theme.typography.body2,
  borderRadius: "15px",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  fontSize: "1rem",
}));

export const Item = ({ item, i }) => {
  // console.log("item = ", item);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    // console.log("handleClickOpen setOpen = ", open);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        onClick={handleClickOpen}
        sx={(theme) => ({
          display: "flex",
          height: "100%",
          maxHeight: "330px",
          marginBottom: {
            xs: "90px",
            md: "70px",
          },
          flexFlow: "column nowrap",
          backgroundColor: theme.palette.common.white,
          alignItems: "center",
          position: "relative",
          borderRadius: "20px",
          paddingTop: "15px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: theme.palette.grey.A100,
          },
        })}
      >
        <Avatar
          alt="Remy Sharp"
          src={item.image}
          sx={(theme) => ({
            width: 180,
            height: 180,
            borderWidth: "10px",
            borderColor: theme.palette.primary.main,
            borderStyle: "solid",
          })}
        />
        <Box
          sx={{
            padding: "10px 28px 0px 28px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body"
            gutterBottom
            sx={{
              marginTop: "5px",
              marginBottom: "5px",
              padding: 0,
              textAlign: "center",
              fontSize: "13px",
              lineHeight: 1.4,
              display: "block",
              color: "#00b398",
            }}
          >
            {item.desc}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "16px",
              color: "#000",
            }}
          >
            {item.position}
          </Typography>
        </Box>
      </Box>
      <ModalWindow open={open} handleClose={handleClose} project={item} />
    </>
  );
};
