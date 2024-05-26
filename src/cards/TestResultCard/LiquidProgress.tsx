import { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Card from "../Card";

export default function LiquidProgress() {
  const [value, setValue] = useState("40");
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    progress.current!.style.setProperty(`--progress-value`, value);
  }, []);

  return (
    <div className="progress" role="progressbar" ref={progress}>
      <div className="progress-inner">
        <div className="progress-indicator"></div>
        <div className="progress-indicator"></div>
      </div>
      <span className="progress-label-value">
        <Typography
          className="font-outline-2"
          fontFamily="SF Pro Display"
          fontWeight={700}
          fontSize={40}
          lineHeight="47.73px"
          color={"white"}
        >
          {value}%
        </Typography>
      </span>
      <span className="progress-label w-[70px]">
        <Typography
          color={"white"}
          sx={{
            borderRadius: "20px",
            bgcolor: "#228EEA",
            border: 2,
            borderColor: "#228EEA",
          }}
        >
          진행률
        </Typography>
      </span>
    </div>
  );
}
