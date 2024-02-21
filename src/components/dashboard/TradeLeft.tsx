import ThreeCircularChart from "./ThreeCircularChart";
import TwoCircularChart from "./TwoCircularChart";

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
      <div className="flex">
        <div>
          <div className="font-bold font-poppins text-lg">승률</div>
          <TwoCircularChart income={income} />
        </div>
        <div className="flex flex-col gap-3 mt-12 ml-5 w-full">
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">수익</div>

            <div className="font-bold font-poppins text-base">
              {income + "%"}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">손해</div>
            <div className="font-bold font-poppins text-base">{lose + "%"}</div>
          </div>
        </div>
      </div>
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
