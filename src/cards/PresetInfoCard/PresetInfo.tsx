import { Stack } from "@mui/material";
import { useAtom } from "jotai";
import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";
import presetAtom from "@/datas/preset";

export default function PresetInfo() {
  const [preset] = useAtom(presetAtom);
  return (
    <Stack className="w-full items-center gap-4">
      <FormSelect
        id="name"
        label="설정 보조지표"
        items={[]}
        value={preset.indicator}
        disabled
      />
      <FormSelect
        id="indicator"
        label="진입 포지션"
        items={[]}
        value={preset.position}
        disabled
      />
      <FormTextField
        id="profitRate"
        label="익절률"
        value={preset.profitRate}
        disabled
      />
      <FormTextField
        id="lossRate"
        label="손절률"
        value={preset.lossRate}
        disabled
      />
    </Stack>
  );
}
