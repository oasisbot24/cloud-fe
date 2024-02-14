import { Box, CircularProgress, Typography } from "@mui/material";

interface TradeData {
  income: number;
}

export default function TwoCircularChart({ income }: TradeData) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100}
        sx={{
          "&.MuiCircularProgress-colorPrimary": {
            color: "#FFD789",
          },
        }}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <CircularProgress
        variant="determinate"
        value={income}
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
          {income + "%"}
        </Typography>
      </Box>
    </Box>
  );
}
