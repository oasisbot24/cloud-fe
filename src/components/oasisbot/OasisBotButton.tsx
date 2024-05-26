import React from "react";
import { Button } from "@mui/material";

type Props = {
  children: string;
  backgroundColor: string;
  textColor: string;
  onClick: () => void;
};

function OasisBotButton({
  children,
  backgroundColor,
  textColor,
  onClick,
}: Props) {
  return (
    <Button
      style={{
        flex: 1,
        backgroundColor,
        color: textColor,
        margin: 0,
        padding: 12,
        borderRadius: 0,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default OasisBotButton;
