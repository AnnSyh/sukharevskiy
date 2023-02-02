import * as React from "react";
import {
  Grid,
  Typography,
  Button,
  CircularProgress,
  TextField,
  Snackbar,
} from "@mui/material";
import { Box, padding } from "@mui/system";
import { Input } from "../../components/input/input";
import { TextArea } from "../../components/textarea/textarea";
import { useState } from "react";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "next-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import style from "../../styles/FormSection.module.css";

import { FormMy } from "./FormMy";

const FormSection = ({}) => {
  const { t } = useTranslation("common");
  const [loader, setLoader] = React.useState(false);
  const [checkForm, setCheckForm] = useState(true);
  const [snakbar, setSnakbar] = useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = React.useState(false);

  const styles = {
    form: {
      width: "100%",
    },
  };
  const handleClose = () => setSnakbar(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Must be a valid email").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setLoader(true);
      const data = {
        name: values.name,
        email: values.email,
        message: values.message,
        phoneNumber: `+${phoneNumber}`,
      };
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setLoader(false);
          setCheckForm(false);
          setSnakbar(true);
        } else {
          setLoader(false);
        }
      });
    },
  });
  const handleErrPhoneNumber = () => {
    if (phoneNumber) {
      setErrorPhoneNumber(false);
    } else setErrorPhoneNumber(true);
  };
  return (
    <section id="form-section" className="section">
      <Box
        className="bg-dark-gray"
        sx={(theme) => ({
          width: "100%",
          position: "relative",
        })}
      >
        <Box
          className="container-box"
          id="form"
          sx={() => ({
            alignItems: "flex-top",
          })}
        >
          <Typography
            variant="h1"
            sx={{ textAlign: "center", width: "100%", marginBottom: "30px" }}
            fontSize={{ xs: "25px", md: "52px" }}
          >
            {t("subscription_form")}
          </Typography>

          <FormMy />
        </Box>
        <Snackbar
          open={snakbar}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Message sent"
          sx={{
            ".MuiPaper-root": {
              background: "#00b398",
              minWidth: "10px",
            },
          }}
        />
      </Box>
    </section>
  );
};

export { FormSection };
