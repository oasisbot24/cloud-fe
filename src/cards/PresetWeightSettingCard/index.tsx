import { CardContent, Stack, Typography } from "@mui/material";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import Icon from "@/components/Icon/index";
import CardButton from "../CardButton";
import CardFooter from "../CardFooter";
import CardHeader from "../CardHeader";
import SliderGraph from "./SliderGraph";

function PresetWeightSettingCard() {
  return (
    <Card>
      <CardHeader
        id="counting"
        title="매매비중 카운팅 설정"
        subtitle="총합의 값이 100%을 채워졌습니다."
        action={
          <Stack alignItems="center" direction="row">
            <Icon src="/icons/control/info.png" size={15} />
            <Typography
              variant="100R"
              className="text-neutral-600 underline cursor-pointer"
            >
              카운팅이란?
            </Typography>
          </Stack>
        }
      />
      <CardContent>
        <SliderGraph />
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

export default PresetWeightSettingCard;
