import dynamic from "next/dynamic";

interface ChartData {
  date: string[];
  price: number[];
  rate: number[];
}
export default function CustomChart({ date, price, rate }: ChartData) {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const state = {
    options: {
      xaxis: {
        categories: date,
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
          const value = series[seriesIndex][dataPointIndex];
          const percentageChange = rate[dataPointIndex];
          const percentagebgColor =
            percentageChange > 0 ? "#FDE0E0" : "#DCE1FF"; // 색상 조건부 변경
          const percentageColor = percentageChange > 0 ? "#F46565" : "#223CE9";
          const arrow = percentageChange > 0 ? "up" : "down";

          return `<div style="background-color: #fff; padding: 10px; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
                    <div style="font-size: 14px; color: #404040; font-weight: 700; line-height:16px;">$${value.toLocaleString()}</div>
                    <div style="margin-top: 5px; font-size: 14px; font-weight: 700; line-height:16px;">
                      <span style="background-color: ${percentagebgColor}; color: ${percentageColor}; padding: 3px 7px; border-radius: 10px; display:flex; justify-content: space-between;  align-items: center;">
                      <img src="/icons/arrow/profitloss/${arrow}-small.png" style="width: 20px; height: 18px;" alt="icon" />
                        ${Math.abs(percentageChange)}%
                      </span>
                    </div>
                  </div>`;
        },
      },
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
        data: price,
      },
    ],
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
