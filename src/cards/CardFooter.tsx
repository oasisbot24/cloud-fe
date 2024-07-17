import { CardActions } from "@mui/material";

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}
export default function CardFooter({
  children,
  className = "",
}: CardFooterProps) {
  return (
    <CardActions className={`absolute bottom-0 w-full p-0 ${className}`}>
      {children}
    </CardActions>
  );
}
