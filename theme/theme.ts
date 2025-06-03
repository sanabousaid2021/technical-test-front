import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    accent?: string;
  }

  interface SimplePaletteColorOptions {
    accent?: string;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Sofia Sans Condensed, sans-serif",
  },
  palette: {
    primary: {
      main: "#283149",
      light: "#dbedf3",
      accent: "#00818a",
    },
    secondary: {
      main: "#404b69",
    },
  },
  spacing: 8,
});

// Colors
// #283149
// #404b69
// #00818a
// #dbedf3

export default theme;
