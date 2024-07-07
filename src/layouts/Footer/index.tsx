import { Box, Divider, Stack, Typography } from "@mui/material";
import SocialIcon from "@/components/Icon/SocialIcon";
import Logo from "@/components/Logo";
import FooterBreadcrumbs from "@/layouts/Footer/FooterBreadcrumbs";

interface FooterProps {
  color: LayoutColorType;
}

const style = {
  white: "text-white",
  black: "text-black",
};

export default function Footer({ color }: FooterProps) {
  return (
    <Box className={`w-full ${style[color]}`}>
      <Divider className="bg-white" />
      <Stack
        direction="row"
        className="mx-4 md:mx-32 my-4 items-center justify-between"
      >
        <Stack direction="row" className="items-start gap-8">
          <Logo color={color} size="S" />
          <Stack className="my-0.5 gap-2">
            <FooterBreadcrumbs color={color} />
            <Typography variant="200R">
              Copyright@2024 OASIS. All Rights reserved.
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" className="gap-1">
          {(["facebook", "linkedin", "naver", "kakao"] as SocialType[]).map(
            social => (
              <SocialIcon key={social} social={social} color={color} />
            ),
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
