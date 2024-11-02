import React from "react";
import { Button, Typography } from "@mui/material";

interface CardButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function CardButton({
  text,
  className = "text-white bg-brand",
  onClick,
  disabled,
}: CardButtonProps) {
  return (
    <Button
      className={`w-full flex mx-4 my-3 p-3 rounded-none ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography
        sx={{
          fontFamily: "Spoqa Han Sans Neo",
          fontSize: 15,
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
