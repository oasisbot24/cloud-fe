import React from "react";
import { ButtonBase } from "@mui/material";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  focus?: boolean;
};

const colorStyle = {
  focused: "border-brand text-brand",
  unfocused: "border-neutral-400 text-neutral-400",
};

function RoundButton({ children, onClick, focus = false }: Props) {
  return (
    <ButtonBase
      className={`w-fit shrink-0 h-[30px] rounded-full border border-solid px-4 ${
        focus ? colorStyle.focused : colorStyle.unfocused
      }`}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
}

export default RoundButton;
