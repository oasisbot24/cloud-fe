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
    <Box className={`h-[72px] w-full ${style[color]}`}>
      <Stack direction="row" className="h-full w-full items-center justify-between px-4">
        <Logo size="L" color="white" />
      </Stack>
    </Box>
  );
}
