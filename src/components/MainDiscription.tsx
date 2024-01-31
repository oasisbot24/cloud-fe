export default function MainDiscription() {
  return (
      <div className="flex flex-col bg-black justify-end ">
        <div className="flex flex-wrap m-auto">
          <img src="main/landing-text.png" className=" mt-10" />
          <img src="main/bitcoin-logo.png" className="2xl:w-72 2xl:h-72 xl:w-72 xl:h-72 lg:w-72 lg:h-72 md:w-64 md:h-64 sm:w-64 sm:h-64" />
        </div> 
       
        <div className="relative ">
          <img src="main/hero-bg.png"/>
          <img src="main/connections.png" className="absolute inset-x-0 top-0 "/>
        </div>
          
      </div>
  )
}