import Card from "@/cards/Card";
import SubscribeDescription from "@/cards/subscribe/SubscribeCard/SubscribeDescription";
import SubscribeTable from "@/cards/subscribe/SubscribeCard/SubscribeTable";

export default function SubscribeCard() {
  return (
    <Card>
      <SubscribeTable />
      <SubscribeDescription />
    </Card>
  );
}
