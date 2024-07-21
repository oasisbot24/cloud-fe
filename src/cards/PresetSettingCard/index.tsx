import { CardContent } from "@mui/material";
import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import PresetSetting from "@/cards/PresetSettingCard/PresetSetting";
import CardButton from "@/components/common/CardButton";

export default function PresetSettingCard() {
  return (
    <Card>
      <CardHeader
        id="setting"
        title="프리셋"
        subtitle="거래소를 선택해주세요."
      />
      <CardContent>
        <PresetSetting />
      </CardContent>
      <CardFooter>
        <CardButton
          text="초기화"
          className="text-white bg-neutral-700"
          onClick={() => console.log("초기화")}
        />
        <CardButton
          text="저장"
          className="text-white bg-brand"
          onClick={() => console.log("저장")}
        />
      </CardFooter>
    </Card>
  );
}
