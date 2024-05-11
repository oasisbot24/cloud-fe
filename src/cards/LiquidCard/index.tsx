import { useEffect, useRef, useState } from "react";
import { Stack } from "@mui/material";
import Card from "../Card";

export default function LiquidCard() {
  const [value, setValue] = useState("60");
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    progress.current!.style.setProperty(`--progress-value`, value);
    // if (Number(value) > 50) {

    //   progress.current!.classList.add(`progress--upper-half-value`);
    // } else {
    //   progress.current!.classList.contains("progress--upper-half-value") &&
    //     progress.current!.classList.remove(`progress--upper-half-value`);
    // }
  }, []);

  return (
    <Card>
      <div className="progress" role="progressbar" ref={progress}>
        <div className="progress-inner">
          <div className="progress-indicator"></div>
          <div className="progress-indicator"></div>
        </div>
        <span className="progress-label">
          <strong>{value}</strong>
          <span>%</span>
        </span>
      </div>
    </Card>
  );
}
