import Card from "@/cards/Card";
import CustomChart from "./CustomChart";
import CustomPanel from "./CustomPanel";

export default function ChartCard() {
  return (
    <Card>
      <div className="p-5">
        <CustomPanel />
      </div>
      <div className="w-full">
        <CustomChart />
      </div>
    </Card>
  );
}
