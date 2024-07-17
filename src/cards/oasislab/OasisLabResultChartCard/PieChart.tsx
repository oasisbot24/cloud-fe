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
      <div
        className="absolute top-[50%] left-[50%]
      translate-x-[-50%] translate-y-[-50%] bg-[#F6F7F7]
      rounded-full w-[100%] h-[100%]"
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#898FC3] rounded-full w-[75%] h-[75%] border-2 border-[#022579] border-solid">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <PieSvg
              fillColor="#F46565"
              borderColor="#022579"
              radius={110}
              percent={90}
            />
          </div>

          <span className="progress-label-value">
            <Typography
              className="text-white font-outline-2"
              fontFamily="SF Pro Display"
              fontWeight={700}
              fontSize={40}
              lineHeight="47.73px"
            >
              60%
            </Typography>
          </span>
          <span className="progress-label w-[70px] mt-2">
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
