import { CardContent, Divider } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import PresetInfo from "@/cards/preset/PresetInfoCard/PresetInfo";
import UserInfo from "@/cards/preset/PresetInfoCard/UserInfo";
import RoundSelect from "@/components/common/RoundSelect";
import presetAtom from "@/datas/preset";
import { usePresetQuery } from "@/hooks/query/usePreset";

export default function PresetInfoCard() {
  const {
    presetQuery: { data: presetData },
  } = usePresetQuery();
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
        subtitle="거래소를 선택해주세요."
        action={
          <RoundSelect
            items={[
              ...(presetData?.map(({ presetName }) => ({
                label: presetName,
                value: presetName,
              })) || []),
              { label: "프리셋추가", value: "add" },
            ]}
            value={preset?.presetName || "add"}
            onChange={value =>
              setPreset(presetData?.find(p => p.presetName === value) ?? null)
            }
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
          onClick={() => console.log("삭제")}
        />
        <CardButton
          text="수정"
          className="text-white bg-neutral-700"
          onClick={() => console.log("수정")}
        />
      </CardFooter>
    </Card>
  );
}
