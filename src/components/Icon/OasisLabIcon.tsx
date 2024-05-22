import { Stack } from "@mui/material";
import Icon from "@/components/Icon/index";

interface OasisLabIconProps {
  id: OasisLabIdType;
}

const iconSrc = {
  "test-result": "/icons/oasislab/test-result.png",
};

export default function OasisLabIcon({ id }: OasisLabIconProps) {
  return (
    <Stack className="justify-center items-center rounded-xl bg-neutral-200 w-[44px] h-[44px]">
      <Icon src={iconSrc[id]} size={30} />
    </Stack>
  );
}
