import { CardContent, Divider } from "@mui/material";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import PresetInfo from "@/cards/preset/PresetInfoCard/PresetInfo";
import UserInfo from "@/cards/preset/PresetInfoCard/UserInfo";
import RoundSelect from "@/components/common/RoundSelect";

export default function PresetInfoCard() {
  // const [preset] = useAtom(presetAtom);

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
            items={[{ label: "하락장 세팅", value: "down" }]}
            value="down"
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
