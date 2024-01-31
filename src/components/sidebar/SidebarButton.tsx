import React from "react";
import { Button } from "@mui/material";

type Props = {
  children: string;
};

function SidebarButton({ children }: Props) {
  return (
    <Button
      onClick={() => {
        console.log(children);
      }}
      variant="contained"
      size="small"
      className="w-full mt-5 bg-black font-roboto text-base text-white font-semibold"
      sx={{
        "&:hover": {
          backgroundColor: "#464646",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default SidebarButton;
