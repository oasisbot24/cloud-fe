import React from "react";

import { Button, ButtonPropsVariantOverrides, CircularProgress, Typography } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

interface CardButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: OverridableStringUnion<"text" | "contained" | "outlined", ButtonPropsVariantOverrides>;
}

function CardButton({
  text,
  className = "text-white bg-brand",
  onClick,
  disabled,
  loading,
  variant,
}: CardButtonProps) {
  return (
    <Button
      variant={variant ?? "contained"}
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
