import { ThemeOptions, createTheme } from "@mui/material";
import typographyOptions from "@/styles/theme/typography";

const themeOptions: ThemeOptions = {
  typography: typographyOptions,
};

const theme = createTheme(themeOptions);

export default theme;
