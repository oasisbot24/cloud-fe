import { Stack } from "@mui/material";
import { useAtom } from "jotai";
import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";
import presetAtom from "@/datas/preset";
import { useIndicatorQuery } from "@/hooks/query/usePreset";

export default function PresetSetting() {
  const [preset, setPreset] = useAtom(presetAtom);
  const {
    indicatorQuery: { data: indicatorData },
  } = useIndicatorQuery();
  return (
    <Stack className="w-full items-center gap-1">
      <FormTextField
        id="presetName"
        label="프리셋이름"
        value={preset?.presetName}
        setValue={v => {
          preset && setPreset({ ...preset, presetName: v as string });
        }}
      />
      <FormSelect
        id="indicator"
        label="설정 보조지표"
        items={
          indicatorData?.map(({ indicatorName }) => ({
            label: indicatorName,
            value: indicatorName,
          })) ?? []
        }
        value={preset?.indicatorName}
        setValue={v => {
          preset && setPreset({ ...preset, indicatorName: v as string });
        }}
      />
      <FormSelect
        id="position"
        label="진입 포지션"
        items={[
          { label: "long", value: "long" },
          { label: "short", value: "short" },
        ]}
        value={preset?.position}
        setValue={v => {
          preset && setPreset({ ...preset, position: v as string });
        }}
      />
      <FormTextField
        id="profitRate"
        label="익절률 (%)"
        value={preset?.profitCutRate}
        setValue={v => {
          preset && setPreset({ ...preset, profitCutRate: v as number });
        }}
      />
      <FormTextField
        id="lossRate"
        label="손절률 (%)"
        value={preset?.lossCutRate}
        setValue={v => {
          preset && setPreset({ ...preset, lossCutRate: v as number });
        }}
      />
    </Stack>
  );
}
