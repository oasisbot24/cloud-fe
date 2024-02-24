import CustomList from "../common/CustomList";
import CustomPaper from "../common/CustomPaper";
import CustomTable from "../common/CustomTable";
import PartnerImage from "./PartnerImage";
import TradeCard from "./TradeCard";

const listData = ["2024", "업데이트 되었습니다"];
const coin = [
  { name: "비트코인", part: 70 },
  { name: "이더리움", part: 20 },
  { name: "기타", part: 10 },
];
const tradeData = {
  duration: "0.32일",
  holding: "0.32일",
  transactions: "1,233회",
  balance: "7,300,232 KRW",
  volatility: "13.2%",
  income: "+40.5%",
  lose: "-5.2%",
};

export default function Dashboard() {
  return (
    <div>
      <div className="pt-5">
        <CustomTable />
      </div>
      <div className="pt-5 flex flex-col gap-5  w-full">
        <CustomPaper data={"트레이드 스타일"} />
        <TradeCard income={75} lose={25} coin={coin} trade={tradeData} />
      </div>
      <div className="flex pt-5  w-full md:flex-col sm: flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full">
          <CustomPaper data={"제휴업체"} />
          <PartnerImage />
        </div>

        <div className="flex flex-col w-full md:pt-5 sm:pt-5 lg:pt-0">
          <CustomPaper data={"OASIS 패치 노트"} />
          <CustomList data={listData} />
        </div>
      </div>
    </div>
  );
}
