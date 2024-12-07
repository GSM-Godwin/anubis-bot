import Dex from "@/sections/Dex";
import Faq from "@/sections/Faq";
import Footer from "@/sections/Footer"
import Guide from "@/sections/Guide";
import Hero from "@/sections/Hero";
import Purchase from "@/sections/Purchase";
import Referral from "@/sections/Referral";

export default function Home() {
  return (
    <>
      <Hero />
      <Dex />
      <Purchase />
      <Guide />
      <Referral />
      <Faq />
      <Footer />
    </>
  );
}
