import dynamic from "next/dynamic";

export default function CustomChart() {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const state = {
    options: {
      xaxis: {
        // labels: {
        //   style: {
        //     colors: "#B0B3B7",
        //   },
        // },
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
