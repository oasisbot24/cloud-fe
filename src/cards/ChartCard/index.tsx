import dynamic from "next/dynamic";
import Card from "@/cards/Card";

export default function ChartCard() {
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
      colors: ["#0fbcf9"],
      stroke: {
        width: 2,
      },
      grid: { show: false },
      // fill: {
      //   type: "gradient",
      //   gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
      // },
    },
    series: [
      {
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  };

  return (
    <Card>
      <Chart
        className="w-full"
        height="350"
        options={state.options}
        series={state.series}
        type="area"
      />
    </Card>
  );
}
