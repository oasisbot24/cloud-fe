import { Divider } from "@mui/material";

interface TradeData {
  trade: {
    duration: string;
    holding: string;
    transactions: string;
    balance: string;
    volatility: string;
    income: string;
    lose: string;
  };
}

export default function TradeRight({ trade }: TradeData) {
  return (
    <>
      <div className="flex flex-col w-full h-2/3 justify-around">
        <div className="flex justify-between">
          <div className="font-semibold font-poppins text-base">
            평균 진입 대기시간
          </div>

          <div className="font-light font-poppins text-base">
            {trade?.duration}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold font-poppins text-base">
            진입 후 평균 보유시간
          </div>

          <div className="font-light font-poppins text-base">
            {trade?.holding}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold font-poppins text-base">
            월 평균 매매 횟수
          </div>

          <div className="font-light font-poppins text-base">
            {trade?.transactions}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold font-poppins text-base">
            최대 도달 잔고
          </div>

          <div className="font-light font-poppins text-base">
            {trade?.balance}
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col w-full h-1/3 justify-around mt-3">
        <div className="flex justify-between">
          <div className="font-semibold font-poppins text-base">변동성</div>

          <div className="font-light font-poppins text-base">
            {trade?.volatility}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold font-poppins text-base">
            최대 수익 / 손실
          </div>
          <div className="flex">
            <div className="font-semibold font-poppins text-base text-[#DF5656]">
              {trade?.income}
            </div>
            <div className="font-semibold font-poppins text-base">
              &nbsp; / {trade?.lose}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
