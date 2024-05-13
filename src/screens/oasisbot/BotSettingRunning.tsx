import React, { useEffect, useState } from "react";
import { Button, Divider } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import botStop from "@/apis/botStop";
import { BotType } from "@/apis/getBot";
import { getPreset } from "@/apis/presets";
import Selectbox from "@/components/basic/Selectbox";
import settingAtom from "@/datas/setting";
import useBot from "@/hooks/bot";

interface Props {
  data: BotType | undefined;
}
function BotSettingRunning({ data }: Props) {
  const [setting, setSetting] = useAtom(settingAtom);
  const [preset, setPreset] = useState<string>("");
  const [presetList, setPresetList] = useState<any>([]);
  const [lossPrice, setLossPrice] = useState("");
  const [profitPrice, setProfitPrice] = useState("");

  const { stopBotMutation, dataPreset } = useBot();

  const stopBot = () => {
    stopBotMutation.mutate(setting.botStatus.presetId, {
      onSuccess: () => {
        setSetting({
          ...setting,
          botStatus: {
            isRunning: false,
            presetName: "",
            presetId: 0,
          },
        });
      },
    });
  };

  useEffect(() => {
    const list: React.SetStateAction<any[]> = [];
    if (dataPreset.data && dataPreset.data.length > 0) {
      if (preset === "") {
        setPreset(setting.botStatus.presetName);
      }
      dataPreset.data.map((item: any) => {
        const result = { value: item.presetName, itemLabel: item.presetName };

        list.push(result);
      });
    }
    setPresetList(list);
    setLossPrice(data?.lossCutPrice || "");
    setProfitPrice(data?.profitCutPrice || "");
  }, [dataPreset.data]);

  return (
    <div className="grow p-2.5 bg-white font-poppins font-semibold rounded-xl shadow-md">
      <div className="flex place-content-between items-center">
        <div className="flex">현재 상태</div>
        <div className="text-xl font-semibold text-scarlet">진입</div>
      </div>
      <div className="flex place-content-between mt-9 mb-20 items-center">
        <div className="flex">설정 프리셋</div>
        <Selectbox
          labelId="preset"
          selectLabel=""
          itemList={presetList}
          state={preset}
          setState={setPreset}
          disabled
        />
      </div>
      <Divider className="mt-3 mb-2" />
      <div className="flex place-content-between items-center">
        <div className="flex w-2/5 place-content-between items-center">
          <div className="font-semibold flex-start">목표가</div>
          <div className="font-normal">{profitPrice} KRW</div>
        </div>
        <div className="flex w-2/5 place-content-between items-center">
          <div className="font-semibold">손절가</div>
          <div className="font-normal">{lossPrice} KRW</div>
        </div>
      </div>
      <div className="flex place-content-between mt-3">
        <Button
          variant="contained"
          className="bg-gray-300 text-white text-base font-roboto font-semibold w-2/5 py-2 px-6"
          disabled
        >
          세팅 변경
        </Button>
        <Button
          variant="contained"
          color="error"
          className="text-white text-base font-roboto font-semibold w-2/5 py-2 px-6"
          onClick={stopBot}
        >
          중지
        </Button>
      </div>
    </div>
  );
}

export default BotSettingRunning;
