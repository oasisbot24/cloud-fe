import { Box, Stack } from "@mui/material";
import Logo from "@/components/Logo";

interface HeaderProps {
  color: LayoutColorType;
}

const style = {
  white: "text-white",
  black: "text-black",
};

export default function Header({ color }: HeaderProps) {
  return (
    <Box className={`w-full h-[72px] ${style[color]}`}>
      <Stack
        direction="row"
        className="w-full h-full px-4 items-center justify-between"
      >
        <Logo size="L" color="white" />
      </Stack>
    </Box>
  );
}
