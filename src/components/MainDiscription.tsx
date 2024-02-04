import Image from "next/image";

export default function MainDiscription() {
  return (
      <div className="flex flex-col bg-black justify-end">
        <div className="flex  justify-around m-auto ">
          <div className="flex flex-col ">
            <div className="text-xl font-poppins font-medium text-[#BDBDBD] ">
              The futer of crypto-trading
            </div>
            <div className="text-4xl font-poppins font-semibold text-[#F5F5F5] mt-2">
              안정적인 투자를 위해
            </div>
            <div className="text-4xl font-poppins font-semibold text-[#8859EC] mt-1">
              가상화폐 자동매매는
            </div>
            <div className="text-4xl font-poppins font-semibold text-[#8859EC] mt-1">
              오아시스에서
            </div>
            <div className="text-xl font-poppins font-medium text-[#BDBDBD] mt-2">
              search for the vein of money
            </div>
          </div>
          <Image
            src="/main/bitcoin-logo.png"
            alt="bitcoin-logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{width:'20%', height:'auto'}}
            
          />
        </div> 
        
        <div className="relative ">
          <Image
            src="/main/hero-bg.png"
            alt="hero-bg"
            width={0}
            height={0}
            sizes="100vw"
            style={{width:'100%', height:'auto'}}
          />
          <Image
            src="/main/connections.png"
            alt="connections"
            width={0}
            height={0}
            sizes="100vw"
            style={{width:'100%', height:'auto'}}
            className="absolute inset-x-0 top-0 "
          />
        </div>
          
      </div>
  )
}