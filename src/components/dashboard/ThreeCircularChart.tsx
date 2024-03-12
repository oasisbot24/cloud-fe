import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface CoinItem {
  name: string;
  ratio: number;
}

interface TradeData {
  tradeCoin: Array<CoinItem>;
}

export default function ThreeCircularChart({ tradeCoin }: TradeData) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100}
        sx={{
          "&.MuiCircularProgress-colorPrimary": {
            color: "#58E87A",
          },
        }}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <CircularProgress
        variant="determinate"
        value={tradeCoin[0].ratio + tradeCoin[1].ratio}
        sx={{
          "&.MuiCircularProgress-colorPrimary": {
            color: "#FFD789",
          },
          position: "absolute",
          top: 0,
        }}
        style={{
          width: "100px",
          height: "100px",
        }}
      />

      <CircularProgress
        variant="determinate"
        value={tradeCoin[0].ratio}
        sx={{
          "&.MuiCircularProgress-colorPrimary": {
            color: "#373B5C",
          },
          position: "absolute",
          top: 0,
        }}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="#373B5C">
          {tradeCoin[0].ratio + "%"}
        </Typography>
      </Box>
    </Box>
  );
}
