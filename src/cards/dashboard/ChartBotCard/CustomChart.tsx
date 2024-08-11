import dynamic from "next/dynamic";
import { Stack } from "@mui/material";

export default function CustomChart() {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const state = {
    options: {
      xaxis: {
        categories: [
          "00:00:00",
          "01:30:00",
          "02:30:00",
          "03:30:00",
          "04:30:00",
          "05:30:00",
          "06:30:00",
        ],
      },
      // tooltip: {
      //   custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
      //     // 커스텀 툴팁 내용을 HTML로 반환
      //     const value = series[seriesIndex][dataPointIndex];
      //     const percentageChange = -11; // 예시로 -11%로 설정
      //     const percentageColor = percentageChange > 0 ? "#00E396" : "#FF4560"; // 색상 조건부 변경

      //     return `<div style="background-color: #fff; padding: 10px; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
      //               <div style="font-size: 18px; color: #333;">$${value.toLocaleString()}</div>
      //               <div style="margin-top: 5px; color: ${percentageColor}; font-size: 14px;">
      //                 <span style="background-color: ${percentageColor}; color: #fff; padding: 3px 7px; border-radius: 3px;">
      //                   ${percentageChange > 0 ? "▲" : "▼"} ${Math.abs(percentageChange)}%
      //                 </span>
      //               </div>
      //             </div>`;
      //   },
      // },
      colors: ["#4379EE"],
      stroke: {
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      chart: {
        toolbar: { show: false },
      },
    },
    series: [
      {
        data: [31, 40, 28, 51, 42, 50, 100],
      },
    ],

    // yaxis: {
    //   labels: {
    //     style: {
    //       colors: "#111",
    //     },
    //   },
    // },
  };
  return (
    <Chart
      height="300"
      options={state.options}
      series={state.series}
      type="area"
    />
  );
}
