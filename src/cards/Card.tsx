import { Card as MuiCard, SxProps, Theme } from "@mui/material";

interface CardProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function Card({ children, sx }: CardProps) {
  return (
    <MuiCard className="w-full h-full rounded-lg bg-white relative" sx={sx}>
      {children}
    </MuiCard>
  );
}
