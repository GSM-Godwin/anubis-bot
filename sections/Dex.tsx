import Image from "next/image"
import Dexscreener from "@/assets/DEX.svg"

const Dex = () => {
  return (
    <div className="w-full">
      <Image 
        src={Dexscreener} 
        alt="dexscreener" 
        className="w-full px-10"    
    />
    </div>
  )
}

export default Dex
