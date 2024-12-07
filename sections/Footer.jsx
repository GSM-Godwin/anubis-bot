import { FaTwitter } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa6";
import bg from "@/assets/footerbg.svg"
import gif from "@/assets/Anubis.gif"
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col">
        <div 
        className="mx-5 md:mx-10 lg:mx-20 pb-5 md:p-10 items-center flex flex-col rounded-3xl"
        style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
        }}
        >
            <h1 className="text-32px md:text-[64px] lg:text-[144px] leading-[90%] mt-5 md:mt-10 font-black text-center">ANUBIS BOT</h1>
            <Image src={gif} alt="gif" className="w-[100px] md:w-[200px] lg:w-[500px]" />
            <button className="font-semibold text-[12px] md:text-[20px] py-1 md:py-2 px-5 md:px-10 text-[#004F55] bg-[#FFD08B] rounded-2xl">DOWNLOAD EXTENSION</button>
        </div>
        <div className="flex flex-col md:flex-row justify-between p-10 lg:p-20">
            <p className="md:text-[23px] text-center md:text-left font-bold">© 2024.ANUBIS</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-[16px] lg:text-[24px]">
                <div className="flex gap-2 items-center justify-center">
                    <FaTwitter />
                    <p>Medium</p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <RiTelegram2Fill />
                    <p>Telegram</p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <FaTwitter />
                    <p>Twitter</p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <FaDiscord />
                    <p>Discord</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
