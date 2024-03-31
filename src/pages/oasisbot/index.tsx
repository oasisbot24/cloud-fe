/* Dependencies */
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import getBot from "@/apis/getBot";
import BotSetting from "@/components/oasisbot/BotSetting";
import BotSettingRunning from "@/components/oasisbot/BotSettingRunning";
import BotUseInfo from "@/components/oasisbot/BotUseInfo";
import ProfitPart from "@/components/oasisbot/ProfitPart";
import TransactionHistory from "@/components/oasisbot/TransactionHistory";
import TopNavLayout from "@/components/topnav/TopNavLayout";
import settingAtom from "@/datas/setting";
import useBot from "@/hooks/bot";

function OasisBot() {
  // const [setting] = useAtom(settingAtom);
  const [setting, setSetting] = useAtom(settingAtom);
  const { dataBot } = useBot();
  useEffect(() => {
    if (dataBot.data?.isRunning) {
      setSetting({
        ...setting,
        botStatus: {
          isRunning: true,
          presetName: dataBot.data?.presetName,
          presetId: dataBot.data?.id,
        },
      });
    }
  }, [dataBot.data]);

  return (
    <TopNavLayout>
      <BotUseInfo />
      <Stack direction="row" className="gap-4 mt-10">
        <Stack direction="column" className="grow basis-2/5 gap-4">
          <div className="grow h-5 py-2 px-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
            오아시스봇
          </div>
          {setting.botStatus.isRunning ? (
            <BotSettingRunning data={dataBot.data} />
          ) : (
            <BotSetting />
          )}
        </Stack>

        <Stack direction="column" className="grow basis-3/5 gap-4">
          <div className="grow h-5 py-2 px-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
            수익내역
          </div>
          <ProfitPart />
        </Stack>
      </Stack>

      <Stack direction="column" className="gap-4 mt-10">
        <div className="grow py-2 pl-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
          거래내역
        </div>
        <TransactionHistory data={dataBot.data} />
      </Stack>
    </TopNavLayout>
  );
}

export default OasisBot;
