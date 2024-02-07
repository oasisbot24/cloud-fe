
import Image from "next/image";
import Background from "../common/Background";
import CustomPaper from "../common/CustomPaper";
import Table from "../common/Table";
import TradeCard from "./TradeCard";
import CustomList from "./CustomList";
import PartnerImage from "./PartnerImage";

const row = ['접속 거래소','잔고','닉네임','사용시간']
const data = [['UPBIT 거래소','100,000 KRW','ALPHA','00:00:12']]
const listData = ['2024','업데이트 되었습니다']


export default function Dashboard() {
    return (
      <Background>
        <div className="p-5">
          <Table row={row} data={data}/>
        </div>
        <div className="px-5 flex flex-col gap-5 ">
          <CustomPaper data={'트레이드 스타일'} widthSize={'98%'}/>
          <TradeCard/>
        </div>
        <div className="flex">
          <div className="py-5 pl-10 flex-col w-full">
            <div className="relative z-10">
              <CustomPaper data={'제휴업체'} widthSize={'90%'}/>
              <PartnerImage/>
            </div>
          </div>
          
          <div className="py-5 pl-5 flex flex-col  w-full">
            <div className="relative z-10">
              <CustomPaper data={'OASIS 패치 노트'} widthSize={'90%'}/>
              <CustomList data={listData}/>
            </div>
          </div>
        </div>
      </Background>
      
    )

}