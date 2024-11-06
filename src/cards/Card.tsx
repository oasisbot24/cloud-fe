import { Card as MuiCard, SxProps, Theme } from "@mui/material";

interface CardProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function Card({ children, sx }: CardProps) {
  return (
    <MuiCard className="relative h-full w-full rounded-lg bg-white" sx={sx}>
      {children}
    </MuiCard>
  );
}
