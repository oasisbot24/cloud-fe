import { Button, ThemeProvider } from "@mui/material";
import theme from "@/styles/theme/theme";

export default function Sample() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="info" className="rounded-full">
        Primary
      </Button>
    </ThemeProvider>
  );
}
