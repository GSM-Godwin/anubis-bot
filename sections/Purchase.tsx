import Image from "next/image"
import left from "@/assets/purchase-left.svg"
import right from "@/assets/purchase-right.svg"
import arrow from "@/assets/arrow-right.svg"

const Purchase = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mx-10 lg:mx-20">
      <h1 className="text-center mt-32 leading-[100%] text-[64px] font-medium">Instantaneous <br />Token Purchasing</h1>
      <p className="text-center mt-2 mb-10 text-[16px] font-medium">Directly trade tokens as they analyze them on Dexscreener, avoiding any need to switch between apps or platforms.</p>
      <div className="flex w-full">
        <div className="w-[60%] border-2 border-white">
            <Image
                src={left}
                alt=""
                
            />
        </div>
        <div className="w-[35%] border-2 border-white"></div>
      </div>
    </div>
  )
}

export default Purchase
