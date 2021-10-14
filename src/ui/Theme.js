import { createTheme } from "@mui/material";

const dark = "#000000f2";
const white = "#ffffffed"

export const theme = createTheme({
    palette: {
        primary: {
          main: dark
        },
        secondary: {
          main: white
        }
      },
  });