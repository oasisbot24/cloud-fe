import React, { useState } from "react";
import { Button, Divider } from "@mui/material";
import Selectbox from "@/components/basic/Selectbox";

type Props = {
  setIsRunning: (value: boolean) => void;
};

function BotSettingRunning({ setIsRunning }: Props) {
  const [preset, setPreset] = useState<string>("high");

  return (
    <div className="grow basis-2/5 mr-5 p-2.5 bg-white font-poppins font-semibold rounded-xl shadow-md">
      <div className="flex place-content-between items-center">
        <div className="flex">현재 상태</div>
        <div className="text-xl font-semibold text-scarlet">진입</div>
      </div>
      <div className="flex place-content-between mt-9 mb-20 items-center">
        <div className="flex">설정 프리셋</div>
        <Selectbox
          labelId="preset"
          selectLabel=""
          itemList={[
            { value: "high", itemLabel: "상승장 프리셋" },
            { value: "low", itemLabel: "하락장 프리셋" },
          ]}
          state={preset}
          setState={setPreset}
          disabled
        />
      </div>
      <Divider className="mt-3 mb-2" />
      <div className="flex place-content-between items-center">
        <div className="flex w-2/5 place-content-between items-center">
          <div className="font-semibold flex-start">목표가</div>
          <div className="font-normal">30,424,122 KRW</div>
        </div>
        <div className="flex w-2/5 place-content-between items-center">
          <div className="font-semibold">손절가</div>
          <div className="font-normal">30,171,233 KRW</div>
        </div>
      </div>
      <div className="flex place-content-between mt-3">
        <Button
          variant="contained"
          className="bg-gray-500 text-white text-base font-roboto font-semibold w-2/5 py-2 px-6"
          disabled
        >
          세팅 변경
        </Button>
        <Button
          variant="contained"
          color="error"
          className="text-white text-base font-roboto font-semibold w-2/5 py-2 px-6"
          onClick={() => setIsRunning(false)}
        >
          중지
        </Button>
      </div>
    </div>
  );
}

export default BotSettingRunning;
