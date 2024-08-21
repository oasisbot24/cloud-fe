import { Stack } from "@mui/material";
import { useAtom } from "jotai";
import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";
import presetAtom from "@/datas/preset";

export default function PresetSetting() {
  const [preset] = useAtom(presetAtom);
  return (
    <Stack className="w-full items-center gap-1">
      <FormSelect
        id="name"
        label="프리셋이름"
        items={[]}
        value={preset?.presetName}
      />
      <FormSelect
        id="indicator"
        label="설정 보조지표"
        items={[]}
        value={preset?.indicatorName}
      />
      <FormSelect
        id="position"
        label="진입 포지션"
        items={[]}
        value={preset?.position}
      />
      <FormTextField
        id="profitRate"
        label="익절률"
        value={preset?.profitCutRate}
      />
      <FormTextField id="lossRate" label="손절률" value={preset?.lossCutRate} />
    </Stack>
  );
}
