import { Divider } from "@mui/material";

export default function TradeRight(){
  return(
    <>
    <div className="flex flex-col w-full h-2/3 justify-around">
      <div className="flex justify-between">
        <div className="font-semibold font-poppins text-base">
          평균 진입 대기시간
        </div>
        
        <div className="font-light font-poppins text-base">
          0.32일
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold font-poppins text-base">
          진입 후 평균 보유시간
        </div>
        
        <div className="font-light font-poppins text-base">
          0.32일
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold font-poppins text-base">
          월 평균 매매 횟수
        </div>
        
        <div className="font-light font-poppins text-base">
          1,233회
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold font-poppins text-base">
          최대 도달 잔고
        </div>
        
        <div className="font-light font-poppins text-base">
          7,300,232 KRW
        </div>
      </div>
    </div>
    <Divider/>
    <div className="flex flex-col w-full h-1/3 justify-around mt-3">
      <div className="flex justify-between">
        <div className="font-semibold font-poppins text-base">
          변동성
        </div>
        
        <div className="font-light font-poppins text-base">
          13.2%
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold font-poppins text-base">
          최대 수익 / 손실
        </div>
        <div className="flex">
          <div className="font-semibold font-poppins text-base text-[#DF5656]">
            +40.5%
          </div>
          <div className="font-semibold font-poppins text-base">
            / -5.2%
          </div>
        </div>
      </div>
    </div>

    </>
  )
}