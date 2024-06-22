import { Stack, Typography } from "@mui/material";
import OasisLabIcon from "@/components/Icon/OasisLabIcon";
import Card from "../Card";

interface TestInfoCardProps {
  type: OasisLabIdType;
}

const title = {
  set: "설정금액",
  current: "현재금액",
  max: "최대 도달 잔고",
};

export default function TestInfoCard({ type }: TestInfoCardProps) {
  return (
    <Card>
      <Stack
        direction="row"
        className="p-4 justify-between items-center h-full"
      >
        <Stack className="gap-2">
          <Typography variant="100B" className="text-sub-4">
            {title[type]}
          </Typography>
          <Typography variant="300B" className="text-[#2D3748]">
            ₩ 1,000,000
          </Typography>
        </Stack>
        <OasisLabIcon id={type} />
      </Stack>
    </Card>
  );
}
