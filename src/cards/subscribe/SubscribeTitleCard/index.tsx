import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { subscribeMonthAtom } from "@/datas/subscribe";
import bg from "./bg.png";

function Tag({ title, id }: { title: string; id: string }) {
  return (
    <Stack direction="row" className="gap-1">
      <Icon src={`/apiconnection/${id}.png`} size={16} />
      <Typography variant="100B" className="text-white">
        {title}
      </Typography>
    </Stack>
  );
}

const buttonStyle = {
  focused: "bg-brand",
  unfocused: "bg-white",
};

export default function SubscribeTitleCard() {
  const [month, setMonth] = useAtom(subscribeMonthAtom);
  return (
    <Card sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <Stack className="md:px-32 xl:px-64 items-center w-full">
        <Stack direction="row" className="w-full justify-between items-center">
          <CardHeader title="서비스 구독하기" id="bar-graph" isDark />
          <Stack direction="row" className="hidden lg:flex gap-6">
            <Tag title="The Next" id="1" />
            <Tag title="Wave" id="2" />
            <Tag title="of" id="3" />
            <Tag title="Innovation" id="4" />
          </Stack>
          <Box className="w-[174px] p-4">
            <Box className="px-4 py-1 w-fit ms-auto rounded-full bg-white">
              <Logo color="black" size="S" />
            </Box>
          </Box>
        </Stack>
        <Stack className="w-full items-center justify-center gap-4 mt-4">
          <Typography variant="h4" className="text-white">
            서비스 구독하기
          </Typography>
          <Stack className="w-full items-center gap-1">
            <Typography variant="200R" className="text-white">
              다양한 기능을 통해 사용자의 자산 운용을
            </Typography>
            <Typography variant="200R" className="text-white">
              더욱 효율적으로 관리할 수 있습니다.
            </Typography>
          </Stack>
          <Stack
            direction="row"
            className="gap-2 px-3 py-2 bg-white rounded-full"
          >
            <ButtonBase
              onClick={() => setMonth(1)}
              className={`rounded-full px-4 py-2 ${month === 1 ? buttonStyle.focused : buttonStyle.unfocused}`}
            >
              <Typography
                variant={month === 1 ? "300B" : "300R"}
                className={month === 1 ? "text-white" : "text-sub-4"}
              >
                1개월 구독
              </Typography>
            </ButtonBase>
            <ButtonBase
              onClick={() => setMonth(3)}
              className={`flex flex-row gap-1 rounded-full px-4 py-2 ${month === 3 ? buttonStyle.focused : buttonStyle.unfocused}`}
            >
              <Typography
                variant={month === 3 ? "300B" : "300R"}
                className={month === 3 ? "text-white" : "text-sub-4"}
              >
                3개월 구독
              </Typography>
              <Typography
                variant={month === 3 ? "200B" : "200R"}
                className="text-sub-3"
              >
                12% 절약
              </Typography>
            </ButtonBase>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
