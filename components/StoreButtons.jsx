import { Box, Button, Grid, Typography } from "@mui/material";

const StoreButtons = ({ sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "space-between",
        // justifyContent: "center",
        marginBottom: "30px",
        maxWidth: "420px",
        ...sx,
      }}
    >
      <a href="#">
        <Box sx={{ margin: "30px 30px 0 0" }}>
          <img src={"../../images/appstore.svg"} alt="appstore" />
        </Box>
      </a>
      <a href="#">
        <Box sx={{ margin: "30px 30px 0 0" }}>
          <img src={"../../images/googleplay.svg"} alt="googleplay" />
        </Box>
      </a>
    </Box>
  );
};

export { StoreButtons };
