import { ThemeOptions, createTheme } from "@mui/material";
import typographyOption from "@/styles/theme/typography";

const themeOptions: ThemeOptions = {
  typography: typographyOption,
};

const theme = createTheme(themeOptions);

export default theme;
