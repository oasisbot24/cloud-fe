import Image from "next/image";
import { Icon as MuiIcon } from "@mui/material";

interface IconProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function Icon({
  src,
  alt = "icon",
  size = 30,
  className = "",
}: IconProps) {
  return (
    <MuiIcon
      className={`flex items-center justify-center ${className}`}
      sx={{
        width: size,
        height: size,
      }}
    >
      <Image src={src} alt={alt} width={size} height={size} />
    </MuiIcon>
  );
}
