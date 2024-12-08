"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "@/assets/arrow-down.svg";
import bg from "@/assets/guide-bg.svg";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { animate } from "motion";


const Guide = () => {
  const [activeStep, setActiveStep] = useState(null);
  
  const steps = [
    {
      number: 1,
      bgColor: "#48554A",
      title: "Install the Extension",
      description: [
        {
          label: "Option 1:",
          text: 'Visit the Chrome Web Store and search for "Anubis Bot" to install directly.',
        },
        {
          label: "Option 2:",
          text: "Download the extension from our official website, then follow the steps to install it locally.",
        },
      ],
      orderClass: "",
    },
    {
      number: 2,
      bgColor: "#E7FF87",
      title: "Launch Anubis Bot",
      description: [
        {
          text: "Once the installation is complete, open the extension and log in to your account.",
        },
      ],
      orderClass: "",
    },
    {
      number: 3,
      bgColor: "#48554A",
      title: "Set Up Your Wallet",
      description: [
        {
          text: "Generate a new wallet within Anubis, or import an existing wallet using your private key.",
        },
        {
          text: "Make sure to securely save your wallet details as Anubis does not store or manage your wallet.",
        },
      ],
      orderClass: "",
    },
    {
      number: 4,
      bgColor: "#48554A",
      title: "Configure Trade Settings",
      description: [
        {
          text: "Customize your trade preferences, including slippage, fees, and any other parameters to match your strategy.",
        },
      ],
      orderClass: "",
    },
    {
      number: 5,
      bgColor: "#48554A",
      title: "Start Trading",
      description: [
        {
          text: "Use Moon Buddy’s seamlessly on Dexscreener and execute trades instantly without switching apps.",
        },
      ],
      orderClass: "lg:order-last",
    },
  ];

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`

  useEffect(() => {
    animate(xPercentage, [0, 100, 100, 0, 0], {
      duration: 5,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop'
    })

    animate(yPercentage, [0, 0, 100, 100, 0], {
      duration: 5,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop'
    })
  }, [])

  return (
    <div
      className="flex flex-col my-10 lg:my-0 px-10 lg:px-20 items-center pb-10 lg:pb-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[32px] lg:pt-20 md:text-[64px] mb-10 lg:mb-20 text-center leading-[100%] font-medium">
        Quick Guide to Anubis Bot
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-16">
        {steps.map((step, index) => (
          <div key={index} className={step.orderClass}>
            <div className="relative">
            <div
                className={`z-50 w-[70px] h-[70px] absolute inset-1/2 transform -translate-x-1/2 -top-8 rounded-full border-8 border-black text-black items-center justify-center flex font-bold text-[24px] ${
                  activeStep === step.number
                    ? "bg-[#E7FF87]"
                    : "bg-[#48554A]"
                } transition-colors duration-300 cursor-pointer`}
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(step.number)}
              >
                {step.number}
              </div>
              <div 
                className={`bg-[#171717] px-10 rounded-3xl w-[250px] md:w-[320px] md:h-[400px] lg:h-[403px] lg:w-[365px]`}
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(step.number)}
              >
                <motion.div 
                  style={{
                    maskImage,
                  }}
                  className="absolute inset-0 -m-px rounded-3xl border border-[#E7FF87]">
                    
                  </motion.div>
                <h3 className="font-semibold text-[20px] pt-20 pb-10">{step.title}</h3>
                {step.description.map((desc, descIndex) => (
                  <p
                    key={descIndex}
                    className={`text-[16px] ${
                      descIndex === step.description.length - 1
                        ? "pb-10 mb-10 md:pb-0"
                        : "pb-5"
                    }`}
                  >
                    {desc.label && <span className="text-[#87FF97]">{desc.label} </span>}
                    {desc.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="lg:order-none order-last -mt-20 md:-mt-0">
          <div className="items-center flex flex-col">
            <Image src={arrow} alt="arrow" />
            <p className="text-[16px] text-center font-semibold mb-2">
              Begin trading in under 30 seconds
            </p>
            <button className="text-[12px] md:text-[16px] text-[#080D1A] bg-[#E7FF87] font-semibold py-2 px-10 rounded-3xl">
              DOWNLOAD EXTENSION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
