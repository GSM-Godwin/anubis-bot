import Navbar from "./Navbar"
import bg from "@/assets/herobg.svg"

const Hero = () => {
  return (
    <div 
        className="flex flex-col p-10 lg:px-20 items-center md:h-screen"
        style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
    >
      <Navbar />
      <h1 className="mt-40 text-[180px] leading-[90%] tracking-[8%] font-bold">ANUBIS BOT</h1>
      <h2 className="mt-10 text-[100px] text-[#ECECEC] font-medium text-center leading-[90%] tracking-[-2%]">Snipe And Sell Tokens <br /> On-chain Instantly</h2>
      <button className="bg-[#FFD08B] rounded-3xl px-10 py-2 my-16 text-[#080D1A] font-semibold text-[16px]">DOWNLOAD BOT EXTENSION</button>
      <p className="font-medium text-[18px] text-[#E7E7E7] text-center">Anubis transforms the way traders interact with DeFi markets, focusing on a cohesive, high-speed trading experience <br /> that keeps research and execution in one place.</p>
    </div>
  )
}

export default Hero
