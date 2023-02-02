import { Box, InputBase, Typography } from "@mui/material";

export const TextArea = ({ label, ...props }) => {
  return (
    <Box
      sx={() => ({
        flex: "column nowrap",
        height: "auto",
        width: "100%",
      })}
    >
      <Typography
        sx={() => ({
          width: "100%",
        })}
      >
        {label}
      </Typography>
      <InputBase
        multiline
        {...props}
        sx={(theme) => ({
          padding: "10px",
          backgroundColor: theme.palette.grey[100],
          width: "100%",
        })}
      />
    </Box>
  );
};
