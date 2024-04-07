import React, { useEffect, useState } from "react";
import { Button, Divider } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Selectbox from "@/components/basic/Selectbox";
import OasisbotInput from "@/components/input/OasisbotInput";
import settingAtom from "@/datas/setting";
import useBot from "@/hooks/bot";

function BotSetting() {
  const [setting, setSetting] = useAtom(settingAtom);
  const [preset, setPreset] = useState<string>("");
  const [presetId, setPresetId] = useState<number>(0);
  const [coin, setCoin] = useState<string>("");
  const [coinId, setCoinId] = useState<number>(0);
  const [price, setPrice] = useState<string>("");
  const [leverage, setLeverage] = useState<string>("");
  const [presetList, setPresetList] = useState<any>([]);
  const [coinList, setCoinList] = useState<any>([]);

  const { stratBotMutation, dataPreset, dataCoin } = useBot();
  const startBot = () => {
    if (price === "") {
      return;
    }

    const result = {
      botName: preset,
      presetId: presetId,
      coinId: coinId,
      startBalance: parseInt(price),
      leverage: leverage,
    };
    stratBotMutation.mutate(result, {
      onSuccess: () => {
        setSetting({
          ...setting,
          botStatus: {
            isRunning: true,
            presetName: preset,
            presetId: presetId,
          },
        });
      },
    });
  };

  useEffect(() => {
    const list: React.SetStateAction<any[]> = [];
    if (dataPreset.data && dataPreset.data.length > 0) {
      if (preset === "") {
        setPreset(dataPreset.data[0].presetName);
        setPresetId(dataPreset.data[0].id);
      }
      dataPreset.data.map((item: any) => {
        const result = {
          value: item.presetName,
          itemLabel: item.presetName,
          id: item.id,
        };

        list.push(result);
      });
    }
    setPresetList(list);
  }, [dataPreset.data]);

  useEffect(() => {
    const list: React.SetStateAction<any[]> = [];
    if (dataCoin.data && dataCoin.data.length > 0) {
      if (coin === "") {
        setCoin(dataCoin.data[0].coinName);
        setCoinId(dataCoin.data[0].id);
      }
      dataCoin.data.map((item: any) => {
        const result = {
          value: item.coinName,
          itemLabel: item.coinName,
          id: item.id,
        };
        list.push(result);
      });
    }

    setCoinList(list);
  }, [dataCoin.data]);

  const handlePreset = (e: any) => {
    presetList.map((item: any) => {
      if (item.itemLabel === e) {
        setPresetId(item.id);
      }
    });
    setPreset(e);
  };

  const handleCoin = (e: any) => {
    coinList.map((item: any) => {
      if (item.itemLabel === e) {
        setCoinId(item.id);
      }
    });

    setCoin(e);
  };

  return (
    <div className="grow p-2.5 bg-white font-roboto font-semibold rounded-xl shadow-md">
      <div className="flex place-content-between">
        <div className="flex items-center">설정 프리셋</div>
        <Selectbox
          labelId="preset"
          selectLabel=""
          itemList={presetList}
          state={preset}
          setState={handlePreset}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">매매종목</div>
        <Selectbox
          labelId="coin"
          selectLabel=""
          itemList={coinList}
          state={coin}
          setState={handleCoin}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">거래금액</div>
        <OasisbotInput id="price" value={price} setValue={setPrice} />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">레버리지</div>
        <OasisbotInput id="leverage" value={leverage} setValue={setLeverage} />
      </div>
      <Divider className="mt-3 mb-2" />
      <div className="flex place-content-between">
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
          onClick={startBot}
        >
          저장 후 실행
        </Button>
      </div>
    </div>
  );
}

export default BotSetting;
