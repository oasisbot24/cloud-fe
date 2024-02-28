import WinningRate from "@/components/common/WinningRate";
import ThreeCircularChart from "@/components/dashboard/ThreeCircularChart";

interface CoinItem {
  name: string;
  part: number;
}

interface TradeData {
  income: number;
  lose: number;
  coin: Array<CoinItem>;
}

export default function TradeLeft({ income, lose, coin }: TradeData) {
  return (
    <>
      <WinningRate income={income} lose={lose} />
      <div className="flex mt-5">
        <div>
          <div className="font-bold font-poppins text-lg">거래코인</div>
          <ThreeCircularChart coin={coin} />
        </div>
        <div className="flex flex-col ml-5 gap-3 mt-8 w-full">
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">
              {coin[0].name}
            </div>

            <div className="font-bold font-poppins text-base">
              {coin[0].part + "%"}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">
              {coin[1].name}
            </div>

            <div className="font-bold font-poppins text-base">
              {coin[1].part + "%"}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">
              {coin[2].name}
            </div>

            <div className="font-bold font-poppins text-base">
              {coin[2].part + "%"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
