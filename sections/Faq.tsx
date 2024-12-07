"use client"

import FaqItem from "@/components/FaqItem";
import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState<number | false>(false);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  const faqData = [
    {
      title: "How much does Anubis charge to use their bot/tools?",
      desc: "The answer to this question is not yet provided so we are going to be making use to this text as a placeholder for now at least till an answer is available.",
    },
    {
      title: "Is Anubis safe?",
      desc: "The answer to this question is not yet provided so we are going to be making use to this text as a placeholder for now at least till an answer is available.",
    },
    {
      title: "What slippage and gas settings do you recommend?",
      desc: "The answer to this question is not yet provided so we are going to be making use to this text as a placeholder for now at least till an answer is available.",
    },
    {
      title: "Will Anubis service continue if my device is offline?",
      desc: "The answer to this question is not yet provided so we are going to be making use to this text as a placeholder for now at least till an answer is available.",
    },
    {
      title: "What's Anubis bot advantages over Telegram bots?",
      desc: "The answer to this question is not yet provided so we are going to be making use to this text as a placeholder for now at least till an answer is available.",
    },
    {
      title: "Is Anubis wallet non-custodial?",
      desc: "The answer to this question is not yet provided so we are going to be making use to this text as a placeholder for now at least till an answer is available.",
    },
  ];

  return (
    <div className="bg-[#0C0C0C] flex flex-col mb-10 lg:mb-20">
      <h1 className="flex justify-center leading-[100%] text-center text-[32px] md:text-[64px] font-medium">
        Frequently Asked Questions
      </h1>
      <div className="">
        <div className="md:mr-20">
          {faqData.map((data, index) => (
            <FaqItem
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
