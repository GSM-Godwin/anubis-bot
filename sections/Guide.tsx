import Image from "next/image"
import arrow from "@/assets/arrow-down.svg"
import stars from "@/assets/stars.svg"
import launch from "@/assets/launch.svg"
import bg from "@/assets/guide-bg.svg"

const Guide = () => {
  return (
    <div 
      className="flex flex-col my-10 lg:my-0 px-10 lg:px-20 items-center pb-10 lg:pb-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}  
    >
        <h1 className="text-[32px] lg:pt-20 md:text-[64px] mb-10 lg:mb-20 text-center leading-[100%] font-medium">Quick Guide to Anubis Bot</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-16">
        <div>
          <div className="relative">
            <div className="w-[70px] h-[70px] absolute inset-1/2 transform -translate-x-1/2 -top-8 rounded-full bg-[#48554A] border-8 border-black text-black items-center justify-center flex font-bold text-[24px]">1</div>
            <div className="bg-[#171717] px-10 rounded-3xl w-[250px] md:w-[320px] md:h-[400px] lg:h-[403px] lg:w-[365px]">
              <h3 className="font-semibold text-[20px] pt-20 pb-10">Install the Extension</h3>
              <p className="text-[16px] pb-5"><span className="text-[#87FF97]">Option 1:</span>Visit the Chrome Web Store and search for "Anubis Bot" to install directly.</p>
              <p className="text-[16px] pb-10 mb-10 md:pb-0"><span className="text-[#87FF97]">Option 2:</span>Download the extension from our official website, then follow the steps to install it locally.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="w-[70px] h-[70px] absolute inset-1/2 transform -translate-x-1/2 -top-8 rounded-full bg-[#E7FF87] border-8 border-black text-black items-center justify-center flex font-bold text-[24px]">2</div>
            <div className="bg-[#171717] px-10 rounded-3xl w-[250px] md:w-[320px] md:h-[400px] lg:h-[403px] lg:w-[365px]">
            <h3 className="font-semibold text-[20px] pt-20 pb-10">Launch Anubis Bot</h3>
              <p className="text-[16px] pb-10 mb-10 md:pb-0-5">Once the installation is complete, open the extension and log in to your account.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="w-[70px] h-[70px] absolute inset-1/2 transform -translate-x-1/2 -top-8 rounded-full bg-[#48554A] border-8 border-black text-black items-center justify-center flex font-bold text-[24px]">3</div>
            <div className="bg-[#171717] px-10 rounded-3xl w-[250px] md:w-[320px] md:h-[400px] lg:h-[403px] lg:w-[365px]">
              <h3 className="font-semibold text-[20px] pt-20 pb-10">Set Up Your Wallet</h3>
              <p className="text-[16px] pb-5">Generate a new wallet within Anubis, or import an existing allet using your private key.</p>
              <p className="text-[16px] pb-10 mb-10 md:pb-0">Make sure to securely save your waller details as Anubis does not store or manage your wallet.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="w-[70px] h-[70px] absolute inset-1/2 transform -translate-x-1/2 -top-8 rounded-full bg-[#48554A] border-8 border-black text-black items-center justify-center flex font-bold text-[24px]">4</div>
            <div className="bg-[#171717] px-10 rounded-3xl w-[250px] md:w-[320px] md:h-[400px] lg:h-[403px] lg:w-[365px]">
              <h3 className="font-semibold text-[20px] pt-20 pb-10">Configure Trade Settings</h3>
              <p className="text-[16px] pb-10 mb-10 md:pb-0">Customize your trade preferences, including slippage, fees, and any other parameters to match your strategy.</p>
            </div>
          </div>
        </div>
        <div className="lg:order-last">
          <div className="relative">
            <div className="w-[70px] h-[70px] absolute inset-1/2 transform -translate-x-1/2 -top-8 rounded-full bg-[#48554A] border-8 border-black text-black items-center justify-center flex font-bold text-[24px]">5</div>
            <div className="bg-[#171717] px-10 rounded-3xl w-[250px] md:w-[320px] md:h-[400px] lg:h-[403px] lg:w-[365px]">
              <h3 className="font-semibold text-[20px] pt-20 pb-10">Start Trading</h3>
              <p className="text-[16px] pb-10 mb-10 md:pb-0">Use Moon Buddy’s seamlessly on Dexscreener and execute trades instantly without switching apps.</p>
            </div>
          </div>
        </div>
        <div className="lg:order-none order-last -mt-20 md:-mt-0">
          <div className="items-center flex flex-col">
            <Image
              src={arrow}
              alt="arrow"
            />
            <p className="text-[16px] text-center font-semibold mb-2">Begin trading in under 30 seconds</p>
            <button className="text-[12px] md:text-[16px] text-[#080D1A] bg-[#E7FF87] font-semibold py-2 px-10 rounded-3xl">DOWNLOAD EXTENSION</button>
          </div>
          
        </div>
      </div>
      </div>
    )
}

export default Guide
