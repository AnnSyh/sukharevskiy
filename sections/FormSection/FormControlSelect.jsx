import * as React from "react";
import { FormControl, Select, InputLabel, MenuItem, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const FormControlSelect = ({ languageToggle, sx }) => {
  const [state, setState] = useState({
    lang: "ru",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    languageToggle();
  };

  const router = useRouter();
  const [locale, setLocale] = React.useState("en");

  useEffect(() => {
    if (router.locale == "ru") {
      setLocale("ru");
    } else if (router.locale == "en") {
      setLocale("en");
    }
  }, []);

  const handleSelectLang = (lang) => {
    router.push(`${router.pathname}`, "/", { locale: lang });
  };

  return (
    <>
      <FormControl variant="outlined">
        <Select
          value={locale}
          onChange={(e) => {
            setLocale(e.target.value);
            handleSelectLang(e.target.value);
          }}
          sx={{
            textTransform: "uppercase",
            color: "#fff",
            width: {
              xs: "auto",
              sm: "110px",
            },
            height: "43px",
          }}
          renderValue={(selected) => selected}
        >
          <MenuItem
            sx={{
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px",
            }}
            value="ru"
          >
            ru
            <Box sx={{ mt: "3px", ml: "3px" }}>
              <img src="images/rus.png" />
            </Box>
          </MenuItem>
          <MenuItem
            sx={{
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px",
            }}
            value={"en"}
          >
            en
            <Box sx={{ mt: "3px", ml: "3px" }}>
              <img src="images/en.png" />
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export { FormControlSelect };
