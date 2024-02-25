import React from "react";
import {
  Box,
  Divider,
  LinearProgress,
  Stack,
  linearProgressClasses,
  styled,
} from "@mui/material";
import TextData from "../basic/TextData";
import WinningRate from "../dashboard/WinningRate";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1A278C" : "#308fe8",
  },
}));

function BackTestStatus() {
  return (
    <Stack className="grow p-2.5 bg-white font-roboto font-semibold rounded-xl shadow-md">
      <Stack direction="row" className="p-2.5 items-center">
        <div className="basis-1/5">백테스트 현황</div>
        <Box className="w-full basis-4/5 mr-10">
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
      </Stack>
      <Divider className="py-1.5 my-3 mx-3 border-b-[2px]" />
      <div className="flex justify-between mt-3">
        <div className="flex flex-col flex-1 mx-2">
          <WinningRate income={85} lose={15} />
          <TextData
            label="손익률"
            value={202.14}
            type="percent"
            valueClass="font-semibold text-red-500"
            // 추후 value 값 따라서 색상 변경되는 것으로 수정
          />
        </div>
        <Divider
          className="flex-none mx-3 border-r-[2px]"
          orientation="vertical"
          flexItem
        />
        <div className="flex flex-col flex-1">
          <TextData
            label="현재금액"
            value={30002122}
            type="currency"
            valueClass="font-normal"
          />
          <TextData
            label="손익금액"
            value={20020333}
            type="currency"
            valueClass="font-normal"
          />
          <TextData
            label="월 평균 매매 횟수"
            value="420회"
            valueClass="font-normal"
          />
          <TextData
            label="최대 도달 잔고"
            value={30002122}
            type="currency"
            valueClass="font-normal"
          />
        </div>
      </div>
    </Stack>
  );
}

export default BackTestStatus;
