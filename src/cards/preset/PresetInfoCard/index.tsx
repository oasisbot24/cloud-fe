import { CardContent, Divider } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import PresetInfo from "@/cards/preset/PresetInfoCard/PresetInfo";
import UserInfo from "@/cards/preset/PresetInfoCard/UserInfo";
import RoundSelect from "@/components/common/RoundSelect";
import { presetAtom } from "@/datas/preset";
import { usePresetMutation, usePresetQuery } from "@/hooks/query/usePreset";

export default function PresetInfoCard() {
  const {
    presetQuery: { data: presetData },
  } = usePresetQuery();
  const { deletePresetMutation } = usePresetMutation();
  const [preset, setPreset] = useAtom(presetAtom);

  return (
    <Card>
      <CardContent>
        <UserInfo />
      </CardContent>
      <Divider className="border-0 my-8" />
      <CardHeader
        id="setting"
        title="프리셋"
        subtitle={preset ? preset.presetName : "프리셋을 선택해주세요."}
        action={
          <RoundSelect
            label="프리셋선택"
            items={
              presetData?.map(({ presetName }) => ({
                label: presetName,
                value: presetName,
              })) ?? []
            }
            value={preset?.presetName ?? ""}
            onChange={e => {
              setPreset(
                presetData?.find(p => p.presetName === e.target.value) ?? null,
              );
            }}
          />
        }
      />
      <CardContent>
        <PresetInfo />
      </CardContent>
      <CardFooter>
        <CardButton
          text="삭제"
          className="text-white bg-sub-3"
          onClick={() => {
            if (preset) {
              deletePresetMutation.mutate(preset?.id);
              setPreset(null);
            }
          }}
        />
        <CardButton
          text="프리셋 추가"
          className="text-white bg-neutral-700"
          onClick={() => console.log("수정")}
        />
      </CardFooter>
    </Card>
  );
}
