import { Card, Stack } from "@mui/material";
import TopNavLayout from "@/components/topnav/TopNavLayout";
import Discription from "@/screens/api-connection/Discription";
import SetKey from "@/screens/api-connection/SetKey";

export default function ApiConnection() {
  return (
    <TopNavLayout hasBackground={false}>
      <Card className="px-4 py-6 bg-white h-full w-2/3 mx-auto">
        <Stack
          direction="column"
          className="h-full w-full items-center justify-between"
        >
          <Discription />
          <SetKey />
        </Stack>
      </Card>
    </TopNavLayout>
  );
}
