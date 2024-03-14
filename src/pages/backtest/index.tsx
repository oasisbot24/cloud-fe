import { Stack } from "@mui/material";
import BackTestSetting from "@/components/backtest/BackTestSetting";
import BackTestStatus from "@/components/backtest/BackTestStatus";
import BotUseInfo from "@/components/oasisbot/BotUseInfo";
import TransactionHistory from "@/components/oasisbot/TransactionHistory";
import TopNavLayout from "@/components/topnav/TopNavLayout";

function BackTest() {
  return (
    <TopNavLayout>
      <BotUseInfo />
      <Stack direction="column" className="gap-4 mt-10">
        <Stack direction="row" className="grow gap-4">
          <div className="grow h-5 py-2 px-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
            백테스트
          </div>
        </Stack>
        <Stack direction="row" className="grow gap-4">
          <Stack direction="column" className="grow basis-2/5 gap-4">
            <BackTestSetting />
          </Stack>
          <Stack direction="column" className="grow basis-3/5 gap-4">
            <BackTestStatus />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column" className="gap-4 mt-10">
        <div className="grow py-2 pl-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
          거래내역
        </div>
        <TransactionHistory />
      </Stack>
    </TopNavLayout>
  );
}

export default BackTest;
