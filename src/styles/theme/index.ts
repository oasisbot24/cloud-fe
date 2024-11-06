import { ThemeOptions, createTheme } from "@mui/material";

import paletteOptions from "@/styles/theme/palette";
import typographyOptions from "@/styles/theme/typography";

const themeOptions: ThemeOptions = {
  typography: typographyOptions,
  palette: paletteOptions,
};

const theme = createTheme(themeOptions);

export default theme;
