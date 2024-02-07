/* Dependencies */
import React, { useState } from "react";

/* Components */
import TopNavLayout from "@/components/TopNavLayout";
import BotUseInfo from "@/components/oasisbot/BotUseInfo";
import BotSetting from "@/components/oasisbot/BotSetting";
import BotSettingRunning from "@/components/oasisbot/BotSettingRunning";
import ProfitPart from "@/components/oasisbot/ProfitPart";
import TransactionHistory from "@/components/oasisbot/TransactionHistory";

function OasisBot() {
  const [isRunning, setIsRunning] = useState<boolean>(false);

  return (
    <TopNavLayout>
      <BotUseInfo />
      <div className="flex flex-col mt-10">
        <div className="flex grow">
          <div className="grow basis-2/5 mr-5 py-2 pl-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
            오아시스봇
          </div>
          <div className="grow basis-3/5 py-2 pl-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
            수익내역
          </div>
        </div>
        <div className="flex grow mt-3">
          {!isRunning ? (
            <BotSetting setIsRunning={setIsRunning} />
          ) : (
            <BotSettingRunning setIsRunning={setIsRunning} />
          )}
          <ProfitPart />
        </div>
      </div>
      <div className="mt-10">
        <div className="grow py-2 pl-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
          거래내역
        </div>
        <TransactionHistory />
      </div>
    </TopNavLayout>
  );
}

export default OasisBot;
