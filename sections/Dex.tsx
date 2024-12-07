import Image from "next/image"
import Dexscreener from "@/assets/DEX.svg"

const Dex = () => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20">
      <Image 
        src={Dexscreener} 
        alt="dexscreener" 
        className="w-full"    
    />
    </div>
  )
}

export default Dex
