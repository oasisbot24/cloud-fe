import { Stack } from "@mui/material";
import { useAtom } from "jotai";
import FormTextField from "@/components/form/FormTextField";
import presetAtom from "@/datas/preset";

export default function PresetInfo() {
  const [preset] = useAtom(presetAtom);
  return (
    <Stack className="w-full items-center gap-4">
      <FormTextField
        id="name"
        label="설정 보조지표"
        value={preset?.indicatorName ?? ""}
        readOnly
      />
      <FormTextField
        id="indicator"
        label="진입 포지션"
        value={preset?.position ?? ""}
        readOnly
      />
      <FormTextField
        id="profitRate"
        label="익절률"
        value={preset?.profitCutRate ?? ""}
        readOnly
      />
      <FormTextField
        id="lossRate"
        label="손절률"
        value={preset?.lossCutRate ?? ""}
        readOnly
      />
    </Stack>
  );
}
