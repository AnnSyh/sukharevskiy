import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";

import * as React from "react";
// import { useTranslation } from "next-i18next";
import { useState } from "react";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import AddIcon from "@mui/icons-material/Add";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

import { styled } from "@mui/material/styles";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid #00b398`,
  borderBottom: `2px solid #00b398`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ControlPointIcon sx={{ fontSize: "1.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  borderTop: `1px solid #00b398`,
  backgroundColor: "#f5f5f5",
  // flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
}));

const AccordionSection = ({}) => {
  // const { t } = useTranslation("common");

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const questions = [
    {
      id: "panel1",
      summary: "questions_summary_1",
      details: "questions_details_1",
    },
    {
      id: "panel2",
      summary: "questions_summary_2",
      details: "questions_details_2",
    },
    {
      id: "panel3",
      summary: "questions_summary_3",
      details: "questions_details_3",
    },
    {
      id: "panel4",
      summary: "questions_summary_4",
      details: "questions_details_4",
    },
  ];

  return (
    <Box component="section" className="section">
      <Box
        className="container-box"
        sx={{
          paddingTop: "150px",
        }}
      >
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ color: "#00b398" }}
        >
          questions
        </Typography>

        <Grid
          container
          justifyContent="space-between"
          sx={{
            position: "relative",
            minHeight: "calc(100vh - 160px - 436px)",
          }}
        >
          <Box sx={{ width: "100%" }}>
            {questions.map((item, index) => (
              <Accordion
                square
                key={index}
                expanded={expanded === `${item.id}`}
                onChange={handleChange(`${item.id}`)}
              >
                <AccordionSummary
                  expandIcon={
                    <AddIcon
                      sx={{ fontSize: "2rem", color: "rgba(0, 0, 0, 0.87)" }}
                    />
                  }
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography>{item.summary}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "200",
                    }}
                  >
                    {item.details}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export { AccordionSection };
