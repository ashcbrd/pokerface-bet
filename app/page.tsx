/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import BackToTopButton from "@/components/back-to-top-button";
import Button from "@/components/button";
import Card from "@/components/card";
import CasinoBackground from "@/components/casino-background";
import CountdownItem from "@/components/countdown-item";
import Footer from "@/components/footer";
import GradientCard from "@/components/gradient-card";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import SideSeparator from "@/components/side-separator";
import TokenSaleCards from "@/components/token-sale-cards";
import { advantages } from "@/data/advantages";
import { casinoFeatures } from "@/data/casino-features";
import { howItWorks } from "@/data/how-it-works";
import { investmentOpportunity } from "@/data/investment-opportunity";
import { onlineLottoGame } from "@/data/online-lotto-game";
import { peerToPeerGaming } from "@/data/peer-to-peer-gaming";
import { presaleTokens } from "@/data/presale-tokens";
import { sportsGamesFeature } from "@/data/sports-games-feature";
import { uniqueFeatures } from "@/data/unique-features";
import { formatAmountDecimals, formatAmountCommas } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Swiper, SwiperSlide } from "swiper/react";

const countdownItems = [
  {
    label: "Days",
    value: 6,
  },
  {
    label: "Hours",
    value: 9,
  },
  {
    label: "Minutes",
    value: 33,
  },
  {
    label: "Seconds",
    value: 48,
  },
];

const tokenToDollarValue = 249.822;

export default function Home() {
  const [paymentToken, setPaymentToken] = useState("USDT");
  const [faceAmount, setFaceAmount] = useState(formatAmountDecimals(0));
  const [buyAmount, setBuyAmount] = useState(0);
  const [error, setError] = useState(null);
  const [isFlipped, setIsFlipped] = useState(
    new Array(uniqueFeatures.length).fill(false)
  );

  useEffect(() => {
    setFaceAmount(buyAmount * tokenToDollarValue);
  }, [buyAmount]);

  const handleMouseOver = (index: number) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = true;
    setIsFlipped(newIsFlipped);
  };

  const handleMouseOut = (index: number) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = false;
    setIsFlipped(newIsFlipped);
  };

  return (
    <main className="relative">
      <div className="z-10 relative">
        <BackToTopButton />
        <Navbar />

        {/* HERO SECTION */}
        <div className="flex flex-col gap-y-10 max-w-6xl mx-auto py-20">
          <Logo />
          <p className="font-[200] tracking-wide text-center text-lg">
            Introducing the $FACE ecosystem that integrates eGaming, casino
            elements, and cryptocurrency, this project promises to create a
            diverse and inclusive ecosystem that caters to a wide range of
            wagering activities and preferences. Emphasizing accessibility,
            security, and a community-driven approach, the $FACE Token is
            positioned to redefine engagement with online wagering. It&apos;s an
            invitation to be part of a transformative journey in the world of
            online betting
          </p>
          <video src="" className="w-full h-[500px] border" />
          <Link
            href="https://whitepaper.pokerface.bet/poker-face-white-paper"
            className="mx-auto"
          >
            <Button variant="secondary" className="!rounded px-8 py-3">
              WHITE PAPER
            </Button>
          </Link>
          <div className="w-max space-y-1">
            <p>Audited & KYC | 100% Secure & Verified</p>
            <img
              src="/solidproof.png"
              className="w-[160px] object-contain ml-auto mr-10"
              alt=""
            />
          </div>
        </div>

        <div className="black-background py-20">
          <div className="bg-dark-100 border-2 border-primary-200 rounded-lg w-[700px] mx-auto flex items-center justify-center py-10">
            <Card className="flex flex-col gap-y-2 items-center">
              <p>Stages: 1 / 8</p>
              <p className="font-semibold">BUY IN BEFORE PRICE INCREASES!</p>

              {/* Countdown Timer */}
              <div className="flex gap-x-2 mt-2">
                {countdownItems.map((time, index) => (
                  <CountdownItem
                    key={index}
                    timeLabel={time.label}
                    timeValue={time.value}
                  />
                ))}
              </div>

              <p>Raised USD: $1769.949</p>
              <p>Sold Tokens: 442487.217</p>
              <SideSeparator>
                <p>1 $FACE = $0.0040</p>
              </SideSeparator>
              <SideSeparator>
                <p>NEXT PRICE = $0.0060</p>
              </SideSeparator>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-x-1"
              >
                <img src="/bnb.svg" alt="BNB token logo" className="h-7" />
                BSC NETWORK
              </Button>
              <div className="flex gap-x-2 w-full">
                <Button
                  onClick={() => {
                    setPaymentToken("USDT");
                    setBuyAmount(0);
                  }}
                  variant={paymentToken === "USDT" ? "primary" : "outline"}
                  className="w-full flex items-center justify-center gap-x-1"
                >
                  <img src="/usdt.svg" alt="USDT token logo" className="h-7" />
                  USDT
                </Button>
                <Button
                  onClick={() => {
                    setPaymentToken("USDC");
                    setBuyAmount(0);
                  }}
                  variant={paymentToken === "USDC" ? "primary" : "outline"}
                  className="w-full flex items-center justify-center gap-x-1"
                >
                  <img src="/usdc.svg" alt="USDC token logo" className="h-7" />
                  USDC
                </Button>
              </div>
              <p className="w-max mr-auto">Amount in {paymentToken}</p>
              <div className="rounded-lg py-1 px-3 h-10 border border-primary-100 w-full flex items-center gap-x-2">
                <img
                  src={paymentToken === "USDT" ? "/usdt.svg" : "/usdc.svg"}
                  className="h-6"
                  alt="token"
                />
                <input
                  type="number"
                  value={buyAmount}
                  className="bg-transparent outline-none w-full text-sm"
                  onChange={(e) => setBuyAmount(e.target.valueAsNumber)}
                />
              </div>
              {error && (
                <p className="text-sm text-red-500 -mt-1 mr-auto">{error}</p>
              )}
              <p className="text-sm">
                You receive: {faceAmount ? formatAmountCommas(faceAmount) : 0}{" "}
                $FACE
              </p>
              <Button variant="primary" className="my-2 py-3">
                Connect Wallet
              </Button>
              <p className="text-primary-100 font-semibold text-sm">
                Refer & Earn: Get up to 15% Bonus!
              </p>
            </Card>
          </div>
        </div>

        <div className="black-background py-20 flex flex-col gap-y-6 items-center">
          <img src="/casino-screenshot.jpeg" className="mx-auto max-w-8xl" />
          <p className="text-3xl">Visit Pokerface Casino</p>
          <Button variant="primary" className="py-3 px-10">
            CLICK HERE
          </Button>
        </div>

        <div className="flex flex-col items-center pb-20 gap-y-6 black-background">
          <h2 className="text-primary-200 text-5xl font-bold">
            TOKEN SALE STAGE
          </h2>
          <div className="scroller max-w-7xl w-full flex overflow-x-scroll gap-x-10 py-4">
            {presaleTokens.map((token, index) => (
              <TokenSaleCards key={index} {...token} />
            ))}
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex gap-x-6 justify-between items-center">
            <div className="space-y-6">
              <h2 className="font-[200] tracking-wide text-xl">
                <span className="font-semibold">Mission:</span> To provide an
                unparalleled online gaming experience fueled by blockchain
                technology. We aim to break barriers, enhance transparency, and
                redefine rewards within the gaming ecosystem.
              </h2>
              <h2 className="font-[200] tracking-wide text-xl">
                <span className="font-semibold">Vision:</span> To become the
                leading online casino brand, setting the standard for secure,
                fair, and rewarding gaming experiences worldwide.
              </h2>
            </div>
            <img src="/img-7.png" className="w-[560px]" />
          </div>
        </div>

        <div className="black-background py-20 relative after:content-[''] after:bg-gradient-to-t after:from-primary-200/60 after:via-transparent after:to-transparent after:h-full after:w-full after:absolute after:top-0 after:left-0">
          <div className="z-10 relative max-w-6xl mx-auto flex items-center justify-between gap-x-6">
            <img src="/img-6.png" className="w-[560px]" />
            <div className="space-y-10">
              <div className="flex items-start gap-x-2 h-max">
                <div className="bg-primary-200 rounded-full h-14 w-14" />
                <h2 className="text-5xl font-bold">THE $FACE TOKEN</h2>
              </div>
              <div className="space-y-6">
                <h2 className="font-[200] tracking-wide text-xl">
                  $FACE, short for “Pokerface ,” is a utility token meticulously
                  crafted to transform the landscape of online gambling. With
                  $FACE, players gain access to exclusive benefits and
                  privileges within our gaming ecosystem.
                </h2>
                <h2 className="font-[200] tracking-wide text-xl">
                  Utility: $FACE serves as the primary currency for Peerto Peer
                  Game transactions within our ecosystem. From wagering on games
                  to redeeming rewards and bonuses, $FACE empowers users with
                  seamless and secure transactions
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="black-background relative py-10 after:content-[''] after:bg-gradient-to-b after:from-primary-200/60 after:via-transparent after:to-transparent after:h-full after:w-full after:absolute after:top-0 after:left-0 ">
          <div className="z-10 py-20 max-w-6xl mx-auto relative flex items-center gap-x-10 justify-between">
            <img
              src="/img-8.png"
              alt="tokens"
              className="w-40 absolute top-0 left-10"
            />
            <h2 className="text-primary-200 text-6xl font-semibold leading-snug">
              UNIQUE
              <br />
              FEATURES
            </h2>
            <div
              onMouseOut={() => setIsFlipped([false])}
              className="grid grid-cols-2 gap-4"
            >
              {uniqueFeatures.map((feature, index) => (
                <div
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                  key={index}
                >
                  <ReactCardFlip
                    key={index}
                    isFlipped={isFlipped[index]}
                    flipDirection="vertical"
                  >
                    <Card className="border-none min-w-[340px] max-w-[340px] min-h-[260px] p-10 flex flex-col items-center gap-y-6">
                      <img
                        src={feature.icon}
                        alt={feature.frontLabel}
                        className="w-20"
                      />
                      <p className="text-primary-100 font-semibold text-2xl text-center">
                        {feature.frontLabel}
                      </p>
                    </Card>
                    <Card className="border-none max-w-[340px] min-h-[260px] p-10 flex items-center justify-center">
                      <p className="font-[200] text-xl text-center tracking-wide">
                        {feature.backLabel}
                      </p>
                    </Card>
                  </ReactCardFlip>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-x-10">
            <div className="flex flex-col items-center gap-y-6">
              <h2 className="text-primary-200 font-semibold text-5xl">
                HOW IT WORKS
              </h2>
              <img src="/img-9.png" className="w-[360px]" alt="" />
            </div>
            <div className="flex h-full">
              <div className="flex flex-col items-center translate-x-[26px] z-0">
                <div className="w-3 h-3 rounded-full bg-zinc-500" />
                <div className="h-full w-1 bg-zinc-500" />
                <div className="w-3 h-3 rounded-full bg-zinc-500" />
              </div>
              <div className="space-y-10 py-20 z-10">
                {howItWorks.map((item, index) => (
                  <div key={index} className="flex gap-x-6">
                    <div className="h-10 w-10 rounded-full bg-primary-200 border-4 border-zinc-500 mt-2" />
                    <div className="z-10 w-[600px] border-l-4 border-primary-200 rounded relative after:content-[''] after:absolute after:top-4 after:-left-2 after:h-4 after:w-4 after:bg-white after:rotate-45 after:border-l-4 after:border-b-4 after:border-primary-200">
                      <div className="w-full h-full bg-white text-black py-6 px-4 z-10 relative rounded-r">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="font-[200] mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-x-10">
            <div className="space-y-10">
              <h2 className="text-primary-200 font-semibold text-5xl">
                TOKENOMICS
              </h2>
              <h3 className="text-5xl font-semibold">1000,000,000$FACE</h3>
              <table className="w-full">
                <thead className="bg-white text-black border">
                  <tr>
                    <th className="text-2xl py-4 px-6">Tax</th>
                    <th className="text-2xl py-4 px-6" colSpan={2}>
                      Deflationary Supply
                    </th>
                  </tr>
                </thead>
                <tbody className="border border-white font-[200]">
                  <tr>
                    <td className="text-center px-6 pb-2 pt-4 border-r-2 ">
                      Buy 5%
                    </td>
                    <td className="text-center px-6 pb-2 pt-4 border-r-2">
                      LP 0%
                    </td>
                    <td className="text-center px-6 pb-2 pt-4">Marketing 4%</td>
                  </tr>
                  <tr>
                    <td className="text-center px-6 pt-2 pb-4 border-r-2">
                      Sell 5%
                    </td>
                    <td className="text-center px-6 pt-2 pb-4 border-r-2">
                      LP 0%
                    </td>
                    <td className="text-center px-6 pt-2 pb-4">Marketing 4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img src="/chart-04.png" className="w-[500px]" />
          </div>
        </div>

        <div className="py-20 black-background">
          <div className="flex flex-col items-center max-w-6xl mx-auto gap-y-10">
            <h2 className="font-semibold text-primary-200 text-5xl">
              THE POKERFACE PROJECT
            </h2>
            <p className="text-xl text-center font-[200] max-w-3xl">
              Our online casino platform is more than just a place to play; it’s
              a gateway to an immersive and rewarding gaming experience. From
              classic casino games to innovative new titles, our platform offers
              something for every player.
            </p>
            <div className="grid grid-cols-3 w-full">
              {casinoFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="mx-auto overflow-hidden relative max-w-[320px] min-h-[540px] border-none p-6 flex flex-col items-center gap-y-8 after:content-[''] after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-primary-100 after:via-transparent after:to-transparent after:h-full after:w-full after:z-0"
                >
                  <img src={feature.img} className="z-10 w-[300px]" />
                  <h2 className="font-semibold text-2xl text-center z-10">
                    {feature.title}
                  </h2>
                  <p className="text-center font-[200] text-lg z-10">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-10 items-center">
            <h2 className="font-semibold text-primary-200 text-5xl">CASINO</h2>
            <div className="space-y-8 w-full">
              {sportsGamesFeature.map((feature, index) => (
                <div key={index} className="h-[300px] relative flex">
                  <img src={feature.img} alt={feature.title} className="" />
                  <div className="bg-primary-200 px-4 flex flex-col justify-center gap-y-4">
                    <h3 className="text-3xl font-semibold">{feature.title}</h3>
                    <p className="text-lg font-[200]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-10 items-center">
            <h2 className="font-semibold text-primary-200 text-5xl">
              ONLINE LOTTO GAME
            </h2>
            <div className="flex flex-wrap justify-center gap-10 relative">
              {onlineLottoGame.map((item, index) => (
                <div
                  key={index}
                  className="relative border rounded-3xl p-6 w-[500px] h-[240px] space-y-4"
                >
                  <img
                    src={item.ballIconImg}
                    alt={item.title}
                    className="w-16 absolute -top-6 -right-6"
                  />
                  <h3 className="font-semibold text-primary-200 text-2xl">
                    {item.title}
                  </h3>
                  <p className="font-[200] text-lg">{item.description}</p>
                </div>
              ))}
              <img
                src="/mobile-img.png"
                alt="mobile image"
                className="absolute -bottom-20 right-20 w-60"
              />
            </div>
          </div>
        </div>

        <div className="black-background  pt-40 pb-20">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-6">
            <h2 className="font-semibold text-primary-200 text-5xl">
              PEER TO PEER GAMING
            </h2>
            <p className="font-[200] text-center text-xl max-w-3xl">
              Engage in a thrilling peer-to-peer games with real time betting
              where players can challenge each other and win big!
            </p>
            <div className="flex w-full justify-evenly mt-8">
              {peerToPeerGaming.map((item, index) => (
                <img
                  className="w-32"
                  key={index}
                  src={item}
                  alt={`gaming image ${index + 1}`}
                />
              ))}
            </div>
            <img src="/peer-to-peer-big-image.jpeg" className="mt-20" />
          </div>
        </div>

        <div className="black-background py-20">
          <div className="relative max-w-6xl mx-auto flex flex-col gap-y-10 items-center">
            <img src="/img-10.png" className="w-60 absolute -top-28 right-20" />
            <h2 className="font-semibold text-primary-200 text-5xl">
              ADVANTAGES
            </h2>
            <div className="flex w-full justify-center mt-20">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="space-y-2 w-[380px] border-t-2 px-8 py-10 relative"
                >
                  <div className="w-3 h-3 rounded-full bg-white absolute -top-2 left-4" />
                  <img src={advantage.icon} className="w-20" />
                  <h3 className="text-2xl font-semibold">{advantage.title}</h3>
                  <p className="text-xl font-[200]">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20 h-full">
          <div className="max-w-6xl mx-auto flex h-max items-center gap-x-10 justify-evenly">
            <h2 className="font-semibold text-primary-200 text-5xl leading-snug">
              STAKING
              <br />
              REWARDS
            </h2>
            <div className="flex flex-col items-center gap-y-6 h-[340px]">
              <img src="/staking.svg" className="w-20" />
              <div className="h-32 border w-0 border-dashed" />
              <img src="/staking-2.svg" className="w-20" />
            </div>
            <div className="flex flex-col justify-between h-[340px]">
              <div>
                <h2 className="text-2xl font-semibold text-primary-200">
                  Earn passive income
                </h2>
                <p className="text-xl font-[200] w-[500px] mt-2">
                  When you stake your $FACE you earn USDT rewards profits from
                  the Casino.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary-200">
                  Access rewards instantly
                </h2>
                <p className="text-xl font-[200] w-[500px] mt-2">
                  You will immediately unlock rewards from staking that you can
                  use in Pokerface, or save them for later!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex items-center justify-evenly gap-x-10">
            <img src="/POKERFACE-graph.png" alt="graph" className="w-[500px]" />
            <div>
              <h2 className="font-semibold text-primary-200 text-5xl leading-snug">
                MARKET
                <br />
                OPPORTUNITY
              </h2>
              <p className="font-[200] text-xl w-[500px] mt-4">
                The global online gambling market is experiencing exponential
                growth, with projections reaching $127.3 billion by 2027
              </p>
              <p className="font-semibold text-[140px] mt-10 -mb-10">11.5%</p>
              <p className="font-semibold text-2xl">
                Compound annual growth rate (CAGR)
              </p>
            </div>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-10 items-center">
            <h2 className="font-semibold text-primary-200 text-5xl leading-snug text-center">
              HOW WE COMPARE TO THE <br />
              COMPETITION
            </h2>
            <img src="/POKERFACE-4.jpg" />
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-10 items-center">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              className="flex w-full bg-blue-500 gap-10"
            >
              <SwiperSlide className="bg-red-500">Slide 1</SwiperSlide>
              <SwiperSlide className="bg-red-500">Slide 2</SwiperSlide>
              <SwiperSlide className="bg-red-500">Slide 3</SwiperSlide>
              <SwiperSlide className="bg-red-500">Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-10">
            <h2 className="font-semibold text-primary-200 text-5xl">
              INVESTMENT OPPORTUNITY
            </h2>
            <div className="flex items-center justify-between gap-x-6">
              {investmentOpportunity.map((opportunity, index) => (
                <GradientCard
                  key={index}
                  className="min-w-[340px] max-w-[340px] min-h-[260px] space-y-4"
                >
                  <h2 className="z-10 relative text-primary-200 text-2xl font-semibold">
                    {opportunity.title}
                  </h2>
                  <p className="z-10 relative font-[200] text-xl">
                    {opportunity.description}
                  </p>
                </GradientCard>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-10">
            <h2 className="font-semibold text-primary-200 text-5xl text-center leading-snug">
              $FACE IS SET TO LAUNCH ON <br /> MULTIPLE EXCHANGES
            </h2>
            <div className="flex items-center justify-between gap-x-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <GradientCard
                  key={index}
                  className="min-w-[340px] max-w-[340px] min-h-[200px] flex flex-col space-y-4 items-center"
                >
                  <img src="/loading.svg" alt="loading" className="w-24" />
                  <p className="z-10 relative text-primary-200 text-2xl font-semibold">
                    Coming Soon
                  </p>
                </GradientCard>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-20">
            <h2 className="font-semibold text-primary-200 text-5xl text-center">
              POWERED BY
            </h2>
            <div className="grid grid-cols-4 gap-20 w-full">
              {Array.from({ length: 16 }).map((_, index) => (
                <img
                  className="h-10 w-40 object-contain m-auto"
                  key={index}
                  src={`/powered-${index + 1}.${
                    index === 13 || index === 15
                      ? "png"
                      : index === 14
                      ? "webp"
                      : "svg"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <CasinoBackground />
    </main>
  );
}
