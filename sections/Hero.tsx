import Navbar from "./Navbar"
import bg from "@/assets/herobg.svg"
import gif from "@/assets/Anubis.gif"
import Image from "next/image"

const Hero = () => {
  return (
    <div 
        className="flex flex-col p-5 md:px-10 lg:px-20 items-center lg:h-screen"
        style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >
      <Navbar />
      <h1 className="mt-20 absolute lg::mt-40 text-[70px] lg:text-[180px] leading-[90%] tracking-[8%] text-center font-bold">ANUBIS BOT</h1>
      <div className="relative top-20 md:-top-40">
        <Image src={gif} alt="gif" className="lg:w-[800px]" />
      </div>
      <h2 className=" md:-mt-96 text-[20px] lg:text-[100px] text-[#ECECEC] font-medium text-center leading-[90%] tracking-[-2%]">Snipe And Sell Tokens <br /> On-chain Instantly</h2>
      <button className="bg-[#E7FF87] rounded-3xl px-6 md:px-10 py-2 my-8 md:my-16 text-[#080D1A] font-semibold text-[12px] md:text-[16px]">DOWNLOAD BOT EXTENSION</button>
      <p className="font-medium text-[12px] md:text-[18px] text-[#E7E7E7] text-center">Anubis transforms the way traders interact with DeFi markets, focusing on a cohesive, high-speed trading experience <br /> that keeps research and execution in one place.</p>
    </div>
  )
}

export default Hero
