import React from "react";
import { Button, Typography } from "@mui/material";

interface CardButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

function CardButton({
  text,
  className = "text-white bg-brand",
  onClick,
}: CardButtonProps) {
  return (
    <Button
      sx={{
        flex: 1,
        margin: 0,
        padding: 12,
        borderRadius: 0,
      }}
      className={className}
      onClick={onClick}
    >
      <Typography
        sx={{
          fontFamily: "Spoqa Han Sans Neo",
          fontSize: "15px",
          fontWeight: 700,
          lineHeight: "18.78px",
          textAlign: "left",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
}

export default CardButton;
