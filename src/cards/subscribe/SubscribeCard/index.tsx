import Card from "@/cards/Card";
import SubscribeDescription from "./SubscribeDescription";
import SubscribeTable from "./SubscribeTable";

export default function SubscribeCard() {
  return (
    <Card>
      <SubscribeTable />
      <SubscribeDescription />
    </Card>
  );
}
