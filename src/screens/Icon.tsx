import Image from "next/image";
import { Icon as MuiIcon } from "@mui/material";

interface IconProps {
  src: string;
  alt?: string;
  size?: number;
}

export default function Icon({ src, alt = "icon", size = 30 }: IconProps) {
  return (
    <MuiIcon
      className="flex items-center justify-center"
      sx={{
        width: size,
        height: size,
      }}
    >
      <Image src={src} alt={alt} width={size} height={size} />
    </MuiIcon>
  );
}
