import React from "react";

import { Button, CircularProgress, Typography } from "@mui/material";

interface CardButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

function CardButton({
  text,
  className = "text-white bg-brand",
  onClick,
  disabled,
  loading,
}: CardButtonProps) {
  return (
    <Button
      className={`mx-4 my-3 flex w-full rounded-none p-3 ${className}`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? (
        <CircularProgress color="inherit" size={16} />
      ) : (
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
      )}
    </Button>
  );
}

export default CardButton;
