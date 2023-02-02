import { Box, InputBase, Stack, Typography } from "@mui/material";

export const Input = ({ label, setValue, value, ...props }) => {
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
          textTransform: "capitalize",
          width: "100%",
        })}
      >
        {label}
      </Typography>
      <InputBase
        value={value}
        onChange={setValue}
        required
        {...props}
        sx={(theme) => ({
          padding: "10px",
          backgroundColor: theme.palette.grey[100],
          height: "45px",
          width: "100%",
        })}
      />
    </Box>
  );
};
