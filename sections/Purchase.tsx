import Image from "next/image"
import left from "@/assets/purchase-left.svg"
import right from "@/assets/purchase-right.svg"
import arrow from "@/assets/arrow-right.svg"

const Purchase = () => {
  return (
    <div className="flex flex-col items-center mx-10 lg:mx-20">
      <h1 className="text-center mt-10 lg:mt-32 leading-[100%] text-[32px] md:text-[64px] font-medium">Instantaneous <br />Token Purchasing</h1>
      <p className="text-center mt-2 mb-10 text-[16px] font-medium">Directly trade tokens as they analyze them on Dexscreener, avoiding any need to switch between apps or platforms.</p>
      <div className="flex w-full md:flex-row flex-col">
        <div className="md:w-[60%]">
            <Image
                src={left}
                alt=""
                className="w-full"
            />
        </div>
        <div className="md:w-[35%] flex flex-col ">
            <Image
                src={right}
                alt=""
                className="w-full"
            />
            <div className="">
                <Image 
                    src={arrow}
                    alt="arrow"
                    className="mt-[-90px] md:mt-[-100px] md:ml-10 w-[20%]"
                />
                <div className="flex flex-col justify-center items-center  md:mt-10 lg:mt-[-50px]">
                    <p>Begin tading in under 30 seconds</p>
                    <button className="bg-[#FFD08B] py-2 px-10 text-[#080D1A] text-[12px] lg:text-[16px] font-semibold rounded-3xl">DOWNLOAD EXTENSION</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase
