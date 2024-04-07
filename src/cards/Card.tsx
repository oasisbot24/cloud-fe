import { Card as MuiCard } from "@mui/material";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <MuiCard className="w-full h-full rounded-lg bg-white">{children}</MuiCard>
  );
}
