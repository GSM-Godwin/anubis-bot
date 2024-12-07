import Image from "next/image"
import logo from "@/assets/logo.svg"
import { RiTelegram2Fill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="border-white border-2 bg-white bg-opacity-10 flex rounded-full m-10 lg:mx-20 justify-between items-center px-5 py-2">
      <Image src={logo} alt="logo" />
      <div className="gap-5 flex">
        <a href="/">Home</a>
        <a href="">Documentations</a>
        <a href="">Web Bot</a>
        <a href="">Tutorials</a>
      </div>
      <div className="flex gap-2">
        <RiTelegram2Fill />
        <FaTwitter />
        <FaTiktok />
      </div>
    </nav>
  )
}

export default Navbar
