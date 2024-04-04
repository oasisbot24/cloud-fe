import ThreeCircularChart from "@/screens/dashboard/ThreeCircularChart";
import TwoCircularChart from "./TwoCircularChart";

interface CoinItem {
  name: string;
  ratio: number;
}

interface TradeData {
  winRate: number;
  lossRate: number;
  tradeCoin: Array<CoinItem>;
}

export default function TradeLeft({ winRate, lossRate, tradeCoin }: TradeData) {
  return (
    <>
      <div className="flex">
        <div>
          <div className="font-bold font-poppins text-lg">승률</div>
          <TwoCircularChart rate={winRate} />
        </div>
        <div className="flex flex-col gap-3 mt-12 ml-5 w-full">
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">수익</div>

            <div className="font-bold font-poppins text-base">
              {`${winRate}%`}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">손해</div>
            <div className="font-bold font-poppins text-base">
              {`${lossRate}%`}
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <div>
          <div className="font-bold font-poppins text-lg">거래코인</div>
          {tradeCoin?.length === 3 ? (
            <ThreeCircularChart tradeCoin={tradeCoin} />
          ) : tradeCoin?.length === 0 ? (
            <TwoCircularChart rate={0} />
          ) : (
            <TwoCircularChart rate={tradeCoin[0].ratio} />
          )}
        </div>
        <div className="flex flex-col ml-5 gap-3 mt-8 w-full">
          {tradeCoin &&
            tradeCoin?.map((coin, index) => (
              <div key={index} className="flex justify-between">
                <div className="font-light font-poppins text-base">
                  {coin.name === undefined ? "" : coin.name}
                </div>

                <div className="font-bold font-poppins text-base">
                  {coin.name === undefined ? "0%" : `${coin.ratio}%`}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
