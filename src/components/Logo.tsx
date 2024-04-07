import { Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon";

interface LogoProps {
  color: "white" | "black";
  size: "L" | "S";
}

const iconSize = {
  L: 36,
  S: 30,
};

const textSize: {
  [key: string]: "300B" | "200B";
} = {
  L: "300B",
  S: "200B",
};

const iconSrc = {
  white: "/logo/oasis.png",
  black: "/logo/oasis.png",
};

const colorStyle = {
  white: "text-white",
  black: "text-black",
};

export default function Logo({ color, size }: LogoProps) {
  return (
    <Stack className="items-center" direction="row">
      <Icon src={iconSrc[color]} size={iconSize[size]} />
      <Typography variant={textSize[size]} className={colorStyle[color]}>
        OASIS
      </Typography>
    </Stack>
  );
}
