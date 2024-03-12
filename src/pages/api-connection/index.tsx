import { Card, Stack } from "@mui/material";
import Discription from "@/components/api-connection/Discription";
import SetKey from "@/components/api-connection/SetKey";
import TopNavLayout from "@/components/topnav/TopNavLayout";

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
