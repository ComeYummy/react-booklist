import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: "#1e90ff",
  secondary: "#999999",
  error: red.A400,
  background: "#ffffff",
  text: "#323232",
};

// A custom theme for this app
export const theme = createMuiTheme({
  // color
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.text,
      secondary: colors.secondary,
    },
  },
  // テキスト
  typography: {
    h1: {
      fontSize: 64,
      fontWeight: 700,
      color: colors.primary,
      letterSpacing: 2,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 20,
      fontWeight: 400,
      color: colors.text,
      letterSpacing: 1.6,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: 1.4,
      lineHeight: 1.2,
    },
    caption: {
      fontSize: 14,
      fontWeight: 400,
      color: colors.secondary,
      letterSpacing: 1.2,
      lineheight: 1.2,
    },
  },
});
