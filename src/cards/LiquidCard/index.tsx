import { useEffect, useRef, useState } from "react";
import { Stack } from "@mui/material";
import { CircularFluidMeter, Speed } from "fluid-meter";
import Card from "../Card";
import FluidMeter from "./liquid";

export default function LiquidCard() {
  const ref = useRef(null);
  let m = null;
  useEffect(() => {
    const target = ref.current as unknown as HTMLElement;
    m = new CircularFluidMeter(target, {
      initialProgress: 50,
      fluidConfiguration: {
        color: "#3d85c6",
      },
      padding: 100,
    });
    m.backgroundColor = "#dde2e6";
    m.borderColor = "#3d85c6";
    m.borderWidth = 10;
    m.dropShadow = false;
    m.use3D = false;
    m.showBubbles = false;
    m.textColor = "#000000";
    m.textDropShadow = false;
    m.fontSize = 50;
    console.log(m);
  }, []);

  return (
    <Card>
      <div ref={ref} className=" h-[300px] w-[300px] "></div>
    </Card>
  );
}
