import Circular from "./Circular";

export default function TradeLeft() {
    return(
      <>
      <div className="flex">
        <div>
          <div className="font-bold font-poppins text-lg">
            승률
          </div>
          <Circular/>
        </div>
        <div className="flex flex-col gap-3 mt-12 ml-5 w-full">
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">
              수익
            </div>
            
            <div className="font-bold font-poppins text-base">
              80%
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">
              손해
            </div>
            <div className="font-bold font-poppins text-base">
              80%
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <div>
          <div className="font-bold font-poppins text-lg">
            거래코인
          </div>
          <Circular/>
        </div >
        <div className="flex flex-col ml-5 gap-3 mt-8 w-full">
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">
              Bitcoin
            </div>
            
            <div className="font-bold font-poppins text-base">
              80%
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">
            Etherium
            </div>
            
            <div className="font-bold font-poppins text-base">
              80%
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-light font-poppins text-base">
            Tether
            </div>
            
            <div className="font-bold font-poppins text-base">
              80%
            </div>
          </div>
        </div>
      </div>
      </>
    )
}