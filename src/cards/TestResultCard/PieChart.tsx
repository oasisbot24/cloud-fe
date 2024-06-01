import { Box, Stack, Typography } from "@mui/material";
import PieSvg from "./PieSvg";

export default function PieChart() {
  return (
    <Stack
      sx={{
        width: "250px",
        height: "250px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "30px",
          left: "40px",
          width: "75%",
          height: "75%",
          bgcolor: "#898FC3",
          borderRadius: "50%",
          border: "2px solid #022579",
        }}
      >
        <div
          className={
            "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
          }
        >
          <PieSvg
            fillColor={"#F46565"}
            borderColor={"#022579"}
            radius={120}
            percent={60}
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
      </Box>
    </Stack>
  );
}
