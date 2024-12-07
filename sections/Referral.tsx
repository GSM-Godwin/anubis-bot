import Image from "next/image"
import globe from "@/assets/globe.svg"
import bg from "@/assets/referral-stars.svg"
import user from "@/assets/users.svg"
import detail from "@/assets/userdetail.svg"

const Referral = () => {
  return (
    <div 
        className="bg-white/5 backdrop-blur-lg flex flex-col m-5 md:m-10 lg:mt-0 lg:mx-20 py-10 md:py-20 rounded-3xl items-center"
        style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
        }}
    >
      <Image src={globe} alt="bg" />
      <h1 className="font-medium text-[32px] md:text-[64px] leading-[100%] text-center">Top Tier Referral Program</h1>
      <p className="text-[12px] md:text-[18px] pt-5 text-center">Refer Someone and be Eligibile to free Earnings of up to 35% on each Referral. <br /> Accumulate 5 Layers of Referral.  Earn from your Referral’s referrals </p>
      <div className="flex flex-wrap justify-evenly lg:gap-20">
        <div className="flex flex-col items-center bg-[#262A27] p-5 md:p-10 mt-12 w-[220px] md:w-[350px] rounded-3xl">
            <h3 className="md:text-[20px] font-light">Total Paid Out</h3>
            <div className="border border-[#E7FF87] bg-[#171717] md:text-[24px] font-bold w-full m-5 md:mb-10 flex items-center justify-center py-8 px-5 md:px-12 rounded-3xl">$400, 000.00</div>
            <Image src={user} alt="" />
            <p className="text-white/40 text-[14px] md:text-[16px] mt-2">12,229 users joined last month</p>
        </div>
        <div className="flex flex-col items-center bg-[#262A27] p-5 md:p-10 mt-12 w-[220px] md:w-[350px] rounded-3xl">
            <h3 className="md:text-[20px] font-light">Total Number of Refferals</h3>
            <div className="border border-[#E7FF87] bg-[#171717] md:text-[24px] font-bold w-full m-5 md:mb-10 flex items-center justify-center py-8 px-5 md:px-12 rounded-3xl">348, 593</div>
            <Image src={detail} alt="" />
            <p className="text-white/40 text-[12px] md:text-[16px] mt-2">1,452,524 total No. of users</p>
        </div>
        <div className="flex flex-col items-center bg-[#262A27] p-5 md:p-10 mt-12 w-[220px]  md:w-[350px] rounded-3xl">
            <h3 className="md:text-[20px] font-light">Total Rewards</h3>
            <div className="border border-[#E7FF87] bg-[#171717] md:text-[24px] font-bold w-full m-5 md:mb-10 flex items-center justify-center py-8 px-5 md:px-12 rounded-3xl">389 sol</div>
            <Image src={user} alt="" />
            <p className="text-white/40 text-[12px] md:text-[16px] mt-2">Top User has received 8 sol</p>
        </div>
      </div>

    </div>
  )
}

export default Referral
