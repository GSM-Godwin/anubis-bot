import Image from "next/image"
import logo from "@/assets/logo.svg"
import { RiTelegram2Fill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="border-white border-2 bg-white bg-opacity-10 w-full flex rounded-full justify-between items-center px-5 py-2">
        <div className="text-white text-[24px] flex items-center">
            <Image src={logo} alt="logo" />
            <p>ANUBIS</p>
        </div>
      <div className="gap-5 flex text-[18px]">
        <a href="/">Home</a>
        <a href="">Documentations</a>
        <a href="">Web Bot</a>
        <a href="">Tutorials</a>
      </div>
      <div className="flex gap-3 text-[24px]">
        <RiTelegram2Fill />
        <FaTwitter />
        <FaTiktok className="text-[19px]" />
      </div>
    </nav>
  )
}

export default Navbar
