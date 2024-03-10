import { Button, Card, Chip, Stack, Typography } from "@mui/material";

interface InfoCardProps {
  type: "free" | "premium" | "platunum";
}

const textColorStyle = {
  free: "text-stone-500",
  premium: "text-slate-700",
  platunum: "text-blue-600",
};

const bgColorStyle = {
  free: "bg-stone-500",
  premium: "bg-slate-700",
  platunum: "bg-blue-600",
};

const content = {
  free: [
    "유료요금제 동일 기능",
    "24시간 작동",
    "지속적인 기능 및 로직 추가",
    "모바일 확인 가능",
  ],
  premium: [
    "전 거래소 이용 가능",
    "24시간 작동",
    "해외거래소 수수료 50% 할인",
    "거래소 전 종목",
  ],
  platunum: [
    "전 거래소 이용 가능",
    "24시간 작동",
    "신규 로직 무료",
    "셀퍼럴 협의 가능",
  ],
};

export default function InfoCard({ type }: InfoCardProps) {
  return (
    <Card className="bg-white h-[450px] w-full shrink-0 lg:shrink">
      <Stack className="box-border h-full py-8 px-4 items-center justify-between">
        <Stack direction="column" className="gap-4 items-center">
          <Typography
            className={`font-roboto text-4xl font-semibold ${textColorStyle[type]}`}
          >
            {type.toUpperCase()}
          </Typography>
          <Typography className={`font-roboto text-xl ${textColorStyle[type]}`}>
            <span className="text-4xl font-medium">0원</span> / 14일 무료
          </Typography>
        </Stack>
        <Button
          variant="contained"
          className={`w-full p-2 ${bgColorStyle[type]}`}
        >
          {type === "free" ? "14일 무료체험" : "무료체험 후 결제"}
        </Button>
        <Typography
          className={`text-md font-roboto font-medium ${textColorStyle[type]}`}
        >
          {type === "free"
            ? "오아시스봇을 처음 이용해보시는분들께 추천합니다."
            : "트레블룰 승인 된 해외거래소를이용하시는 분들께 추천합니다."}
        </Typography>
        <Stack direction="column" className="gap-2 items-center">
          <Stack direction="row" className="gap-2 items-center">
            {content[type].slice(0, 2).map((item, index) => (
              <Chip
                key={index}
                label={item}
                className={`${bgColorStyle[type]} text-white`}
              />
            ))}
          </Stack>
          <Stack direction="row" className="gap-2 items-center">
            {content[type].slice(2, 4).map((item, index) => (
              <Chip
                key={index}
                label={item}
                className={`${bgColorStyle[type]} text-white`}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
