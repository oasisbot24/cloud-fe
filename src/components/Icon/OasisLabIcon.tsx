import { Stack } from "@mui/material";
import Icon from "@/components/Icon/index";

interface OasisLabIconProps {
  id: OasisLabIdType;
}

const iconSrc = {
  set: "/icons/oasislab/setting-price.png",
  current: "/icons/oasislab/current-price.png",
  max: "/icons/oasislab/max-price.png",
};

export default function OasisLabIcon({ id }: OasisLabIconProps) {
  return (
    <Stack className="justify-center items-center rounded-xl bg-brand w-[40px] h-[40px]">
      <Icon src={iconSrc[id]} size={32} />
    </Stack>
  );
}
