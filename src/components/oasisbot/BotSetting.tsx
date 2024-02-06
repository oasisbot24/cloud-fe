import React, { useState } from "react";
import { Button, Divider } from "@mui/material";
import Selectbox from "@/components/basic/Selectbox";
import OasisbotInput from "@/components/input/oasisbotInput";

function BotSetting() {
  const [preset, setPreset] = useState<string>("high");
  const [coin, setCoin] = useState<string>("BTC");
  const [price, setPrice] = useState<string>("");
  const [leverage, setLeverage] = useState<string>("");

  return (
    <div className="bot grow basis-2/5 mr-5 p-2.5 bg-white font-roboto font-semibold rounded-xl shadow-md">
      <div className="presets flex place-content-between">
        <div className="label flex items-center">설정 프리셋</div>
        <Selectbox
          labelId="preset"
          selectLabel=""
          itemList={[
            { value: "high", itemLabel: "상승장 프리셋" },
            { value: "low", itemLabel: "하락장 프리셋" },
          ]}
          state={preset}
          setState={setPreset}
        />
      </div>
      <div className="coin flex place-content-between mt-4">
        <div className="label flex items-center">매매종목</div>
        <Selectbox
          labelId="coin"
          selectLabel=""
          itemList={[
            { value: "BTC", itemLabel: "비트코인" },
            { value: "ETH", itemLabel: "이더리움" },
            { value: "DOGE", itemLabel: "도지코인" },
          ]}
          state={coin}
          setState={setCoin}
        />
      </div>
      <div className="presets flex place-content-between mt-4">
        <div className="label flex items-center">거래금액</div>
        <OasisbotInput id="price" value={price} setValue={setPrice} />
      </div>
      <div className="presets flex place-content-between mt-4">
        <div className="label flex items-center">레버리지</div>
        <OasisbotInput id="leverage" value={leverage} setValue={setLeverage} />
      </div>
      <Divider className="mt-3 mb-2" />
      <div className="btnGroup flex place-content-between">
        <Button
          variant="contained"
          className="bg-gray-500 text-white text-base font-roboto font-semibold w-2/5 py-2 px-6"
          // disabled
        >
          세팅 변경
        </Button>
        <Button
          variant="contained"
          className="bg-navy text-white text-base font-roboto font-semibold w-2/5 py-2 px-6"
        >
          저장 후 실행
        </Button>
      </div>
    </div>
  );
}

export default BotSetting;
