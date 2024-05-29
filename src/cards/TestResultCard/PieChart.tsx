import { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Stack, Typography } from "@mui/material";

export default function PieChart() {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const [color, setColor] = useState("#F46565");
  const state = {
    options: {
      fill: {
        colors: [color, "#000"],
        type: ["solid", "gradient"],
        gradient: {
          opacityTo: 0,
          opacityFrom: 0,
        },
      },
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      stroke: {
        show: false,
        // colors: ["#022579"],
      },
      tooltip: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      chart: {
        // type: "pie",
        animations: {
          enabled: false,
        },
        events: {
          click: function (event: any) {
            setColor("#F46565");
          },
        },
      },

      legend: {
        show: false,
      },
    },

    series: [60, 40],
  };

  return (
    <Stack
      sx={{
        width: "200px",
        height: "200px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "30px",
          left: "60px",
          width: "75%",
          height: "75%",
          bgcolor: "#898FC3",
          borderRadius: "50%",
          // border: "2px solid #022579",
        }}
        onClick={() => setColor("#F46565")}
      >
        <Chart
          height="230px"
          width="230px"
          options={state.options}
          series={state.series}
          type="pie"
          className={
            "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
          }
        />

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
