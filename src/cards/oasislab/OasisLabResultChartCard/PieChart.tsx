import { Stack, Typography } from "@mui/material";

import PieSvg from "./PieSvg";

export default function PieChart() {
  return (
    <Stack
      sx={{
        width: "240px",
        height: "240px",
        position: "relative",
      }}
    >
      <div className="absolute left-[50%] top-[50%] h-[100%] w-[100%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#F6F7F7]">
        <div className="absolute left-[50%] top-[50%] h-[75%] w-[75%] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-solid border-[#022579] bg-[#898FC3]">
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <PieSvg fillColor="#F46565" borderColor="#022579" radius={110} percent={90} />
          </div>

          <span className="progress-label-value">
            <Typography
              className="font-outline-2 text-white"
              fontFamily="SF Pro Display"
              fontWeight={700}
              fontSize={40}
              lineHeight="47.73px"
            >
              60%
            </Typography>
          </span>
          <span className="progress-label mt-2 w-[70px]">
            <Typography
              className="text-white"
              sx={{
                borderRadius: "20px",
                bgcolor: "#CB4C4C",
                border: 2,
                borderColor: "#CB4C4C",
              }}
            >
              승률
            </Typography>
          </span>
        </div>
      </div>
    </Stack>
  );
}
