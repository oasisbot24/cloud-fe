import { Box, Divider, Stack } from "@mui/material";

interface FooterProps {
  color: "white" | "black";
}

const style = {
  white: "text-white",
  black: "text-black",
};

function Footer({ color }: FooterProps) {
  return (
    <Box className={`w-full ${style[color]}`}>
      <Divider className="bg-white" />
      <Stack direction="row" className="mx-4 md:mx-32 my-4 justify-between">
        <Stack>OASIS</Stack>
        <Stack direction="row">
          <icon>naver</icon>
          <icon>kakao</icon>
          <icon>linkedin</icon>
          <icon>facebook</icon>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
