import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["Roadradio", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#00b398",
    },
    secondary: {
      main: "#A6B828",
    },
    error: {
      main: red.A400,
    },
    input: {
      main: "#A6B828",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application
      },
      styleOverrides: {
        root: ({ o, theme }) => ({
          color: "white",
          fontSize: "1rem",
          boxShadow: "none",
          borderRadius: "0",
          width: "205px",
          height: "50px",
          ":hover": {
            boxShadow: "none",
            backgroundColor: theme.palette.grey.A700,
          },
        }),
      },
    },
  },
  radius: {
    default: "0",
  },
});

// Create a theme elements.

// Typography
theme.typography.colorGreen = {
  color: "#00b398",
};

theme.typography.h1 = {
  fontSize: "52px",
  // color: "#000",
  color: "black",
  fontWeight: 600,
  // border: "1px solid green",
};
theme.typography.h2 = {
  fontSize: "52px",
  // color: "#000",
  color: "black",
  fontWeight: 400,
  // border: "1px solid red",
};
theme.typography.h3 = {
  fontSize: "52px",
  // color: "#000",
  color: "black",
  fontWeight: 200,
};
theme.typography.subtitle2 = {
  fontSize: "42px",
  textAlign: "center",
  lineHeight: 1,
  color: "black",
  fontWeight: 200,
  paddingBottom: "20px",
};
theme.typography.subtitle1 = {
  fontSize: "30px",
  lineHeight: 1,
  color: "black",
  fontWeight: 200,
  paddingBottom: "30px",
};
theme.typography.subtitle1_text = {
  fontSize: "18px",
  lineHeight: 2.5,
  color: "black",
  fontWeight: 200,
  display: "flex",
  alignItems: "center",
};

theme.typography.body = {
  color: "black",
};
theme.typography.body1 = {
  fontSize: "18px",
  fontWeight: 400,
};
theme.typography.body2 = {
  fontSize: "18px",
  color: "black",
  fontWeight: 400,
  marginTop: "40px",
};

theme.typography.p = {
  fontSize: "18px",
  color: "#fff",
  fontWeight: 400,
};

// шапка

// background-color: transparent;
// color: #fff;
// z-index: 1;
// position: absolute;

export default theme;
