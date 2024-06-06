"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { howToBuy } from "@/data/how-to-buy";
import { useRouter } from "next/navigation";

export default function HowToBuyPage() {
  const router = useRouter();
  return (
    <div className="black-background">
      <Navbar />
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-y-6 py-20">
        <h2 className="text-primary-200 font-semibold text-4xl">
          HOW TO BUY $FACE TOKENS
        </h2>
        <h3 className="text-primary-200 font-semibold text-3xl">
          How to Buy $FACE During Presale
        </h3>
        <p className="text-center text-xl font-[200]">
          To buy $FACE tokens during the presale, go to presale.pokerface.bet
          official website. After the presale, you can buy the tokens either
          directly from the official website or through a Decentralized Exchange
          (DEX).
        </p>
        <div className="w-full space-y-10">
          {howToBuy.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (index === 0) {
                  router.push("http://presale.pokerface.bet/");
                }
              }}
              className={`rounded-3xl border border-primary-200 bg-white/10 !p-10 !w-full space-y-4 ${
                index === 0 && "cursor-pointer"
              }`}
            >
              <h2 className="text-primary-200 font-semibold text-2xl">
                Step {index + 1}: {item.title}
              </h2>
              {item.description.map((dItem, index) => (
                <p key={index} className="font-[200] text-xl">
                  {dItem}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
