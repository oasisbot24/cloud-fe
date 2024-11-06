import { PaletteOptions } from "@mui/material";

const primary = "#223CE9";
const secondary = "#898FC3";
const error = "#DE4B4B";
const warning = "#FEBD38";
const primaryLight = "#2BB7F5";

const paletteOptions: PaletteOptions = {
  primary: {
    main: primary,
    light: primaryLight,
  },
  secondary: {
    main: secondary,
  },
  error: {
    main: error,
  },
  warning: {
    main: warning,
  },
};

export default paletteOptions;
