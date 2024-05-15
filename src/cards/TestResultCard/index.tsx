import { useEffect, useRef, useState } from "react";
import { Stack, Typography } from "@mui/material";
import Card from "../Card";

export default function TestResultCard() {
  const [value, setValue] = useState("60");
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    progress.current!.style.setProperty(`--progress-value`, value);
  }, []);

  return (
    <Card>
      <div className="progress" role="progressbar" ref={progress}>
        <div className="progress-inner">
          <div className="progress-indicator"></div>
          <div className="progress-indicator"></div>
        </div>
        <span className="progress-label">
          <Typography
            fontFamily="SF Pro Display"
            fontWeight={700}
            fontSize={40}
            lineHeight="47.73px"
            color={"black"}
          >
            {value}%
          </Typography>
          <Typography variant="100M" color={"black"}>
            진행률
          </Typography>
        </span>
      </div>
    </Card>
  );
}
