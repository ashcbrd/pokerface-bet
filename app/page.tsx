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
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { roadmap } from "@/data/roadmap";
import CustomNavigation from "@/components/custom-navigation";

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
        <div className="flex flex-col gap-y-10 max-w-6xl mx-auto py-20 px-8 laptop:px-0">
          <Logo />
          <p className="font-[200] tracking-wide text-center text-base tablet:text-lg">
            Introducing the $FACE ecosystem that integrates eGaming, casino
            elements, and cryptocurrency, this project promises to create a
            diverse and inclusive ecosystem that caters to a wide range of
            wagering activities and preferences. Emphasizing accessibility,
            security, and a community-driven approach, the $FACE Token is
            positioned to redefine engagement with online wagering. It&apos;s an
            invitation to be part of a transformative journey in the world of
            online betting
          </p>
          <video
            controls
            className="w-full tablet:w-[400px] mx-auto laptop:w-full"
          >
            <source src="/Pokerface-Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Link
            href="https://whitepaper.pokerface.bet/poker-face-white-paper"
            className="mx-auto"
          >
            <Button variant="secondary" className="!rounded px-8 py-3">
              WHITE PAPER
            </Button>
          </Link>
          <div className="w-max space-y-1 mx-auto laptop:mx-0">
            <p>Audited & KYC | 100% Secure & Verified</p>
            <img
              src="/solidproof.png"
              className="w-[160px] object-contain ml-auto mr-10"
              alt=""
            />
          </div>
        </div>

        <div className="black-background py-20">
          <div className="bg-dark-100 border-2 border-primary-200 rounded-lg w-max px-10 laptop:px-0 laptop:w-full max-w-[700px] mx-auto flex items-center justify-center py-10">
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

        <div className="black-background py-20 flex flex-col gap-y-6 items-center  px-8 laptop:px-0">
          <img src="/casino-screenshot.jpeg" className="mx-auto max-w-8xl" />
          <p className="text-2xl laptop:text-3xl font-[500]">
            Visit Pokerface Casino
          </p>
          <Button variant="primary" className="py-3 px-10">
            CLICK HERE
          </Button>
        </div>

        <div className="flex flex-col items-center pb-20 gap-y-6 black-background">
          <h2 className="text-primary-200 text-4xl laptop:text-5xl font-bold">
            TOKEN SALE STAGE
          </h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={10}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 2,
            }}
            navigation={{
              prevEl: ".custom-prev-button",
              nextEl: ".custom-next-button",
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full !px-6"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            {presaleTokens.map((item, index) => (
              <SwiperSlide key={index}>
                <TokenSaleCards key={index} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="black-background py-20 px-8 laptop:px-0">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-6 laptop:flex-row gap-x-6 justify-between items-center">
            <div className="space-y-6">
              <h2 className="font-[200] tracking-wide text-sm tablet:text-xl">
                <span className="font-semibold">Mission:</span> To provide an
                unparalleled online gaming experience fueled by blockchain
                technology. We aim to break barriers, enhance transparency, and
                redefine rewards within the gaming ecosystem.
              </h2>
              <h2 className="font-[200] tracking-wide text-sm tablet:text-xl">
                <span className="font-semibold">Vision:</span> To become the
                leading online casino brand, setting the standard for secure,
                fair, and rewarding gaming experiences worldwide.
              </h2>
            </div>
            <img src="/img-7.png" className="w-full laptop:w-[560px]" />
          </div>
        </div>

        <div className="black-background py-20 relative after:content-[''] after:bg-gradient-to-t after:from-primary-200/60 after:via-transparent after:to-transparent after:h-full after:w-full after:absolute after:top-0 after:left-0 px-8 laptop:px-0">
          <div className="z-10 relative max-w-6xl gap-y-8 mx-auto flex flex-col-reverse laptop:flex items-center justify-between gap-x-6">
            <img src="/img-6.png" className="w-full laptop:w-[560px]" />
            <div className="space-y-10">
              <div className="flex items-start gap-x-2 h-max">
                <div className="bg-primary-200 rounded-full h-8 w-8 tablet:h-14 tablet:w-14" />
                <h2 className="text-xl tablet:text-5xl font-bold">
                  THE $FACE TOKEN
                </h2>
              </div>
              <div className="space-y-6">
                <h2 className="font-[200] tracking-wide text-sm tablet:text-xl">
                  $FACE, short for “Pokerface ,” is a utility token meticulously
                  crafted to transform the landscape of online gambling. With
                  $FACE, players gain access to exclusive benefits and
                  privileges within our gaming ecosystem.
                </h2>
                <h2 className="font-[200] tracking-wide text-sm tablet:text-xl">
                  Utility: $FACE serves as the primary currency for Peerto Peer
                  Game transactions within our ecosystem. From wagering on games
                  to redeeming rewards and bonuses, $FACE empowers users with
                  seamless and secure transactions
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 laptop:px-0 black-background relative py-10 after:content-[''] after:bg-gradient-to-b after:from-primary-200/60 after:via-transparent after:to-transparent after:h-full after:w-full after:absolute after:top-0 after:left-0 ">
          <div className="z-10 py-20 max-w-6xl mx-auto relative flex flex-col laptop:flex-row gap-y-6 items-center gap-x-10 justify-between">
            <img
              src="/img-8.png"
              alt="tokens"
              className="w-40 absolute top-0 left-10 hidden laptop:block"
            />
            <h2 className="text-primary-200 text-4xl laptop:text-5xl font-semibold leading-snug">
              UNIQUE <br className="hidden laptop:block" />
              FEATURES
            </h2>
            <div
              onMouseOut={() => setIsFlipped([false])}
              className="grid grid-cols-1 tablet:grid-cols-2 gap-4 w-full"
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
                    <Card className="border-none tablet:min-w-[340px] min-w-full tablet:max-w-[340px] min-h-[260px] p-10 laptop:px-14 flex flex-col items-center gap-y-6 justify-center">
                      <img
                        src={feature.icon}
                        alt={feature.frontLabel}
                        className="w-20"
                      />
                      <p className="text-primary-100 font-semibold text-xl laptop:text-2xl text-center">
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

        <div className="black-background py-20 px-8 laptop:px-0">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-10 laptop:flex-row items-center justify-between gap-x-10">
            <div className="flex flex-col items-center gap-y-6">
              <h2 className="text-primary-200 font-semibold text-4xl laptop:text-5xl">
                HOW IT WORKS
              </h2>
              <img
                src="/img-9.png"
                className="w-[90%] laptop:w-[360px]"
                alt=""
              />
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
                        <h3 className="text-base tablet:text-xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="font-[200] mt-2 text-sm tablet:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          id="tokenomics"
          className="black-background py-20 px-8 laptop:px-0"
        >
          <div className="max-w-6xl mx-auto flex flex-col laptop:flex-row gap-y-10 items-center justify-between gap-x-10">
            <div className="gap-y-6 tablet:gap-y-10 flex flex-col items-center laptop:items-start">
              <h2 className="text-primary-200 font-semibold text-4xl laptop:text-5xl">
                TOKENOMICS
              </h2>
              <h3 className="text-2xl tablet:text-4xl laptop:text-5xl font-semibold">
                1000,000,000$FACE
              </h3>
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
            <img src="/chart-04.png" className="laptop:w-[500px] w-[90%]" />
          </div>
        </div>

        <div className="py-20 black-background px-6 laptop:px-0">
          <div className="flex flex-col items-center max-w-6xl mx-auto gap-y-10">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl">
              THE POKERFACE PROJECT
            </h2>
            <p className="text-base tablet:text-lg laptop:text-xl text-center font-[200] max-w-3xl">
              Our online casino platform is more than just a place to play; it’s
              a gateway to an immersive and rewarding gaming experience. From
              classic casino games to innovative new titles, our platform offers
              something for every player.
            </p>
            <div className="grid grid-cols-1 tablet:grid-cols-3 w-full space-y-10 gap-10 tablet:space-y-0">
              {casinoFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="mx-auto overflow-hidden relative min-w-full tablet:w-[200px] laptop:w-[320px] max-w-[320px] min-h-[600px] laptop:min-h-[540px] border-none p-6 flex flex-col items-center gap-y-8 after:content-[''] after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-primary-100 after:via-transparent after:to-transparent after:h-full after:w-full after:z-0"
                >
                  <img
                    src={feature.img}
                    className="z-10 w-full tablet:w-[300px]"
                  />
                  <h2 className="font-semibold text-xl laptop:text-2xl text-center z-10">
                    {feature.title}
                  </h2>
                  <p className="text-center font-[200] text-md laptop:text-lg z-10">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20 px-8 laptop:px-0">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-10 items-center">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl">
              CASINO
            </h2>
            <div className="space-y-8 w-full">
              {sportsGamesFeature.map((feature, index) => (
                <div
                  key={index}
                  className="h-max tablet:h-[200px] laptop:h-[300px] relative flex flex-col tablet:flex-row"
                >
                  <img src={feature.img} alt={feature.title} />
                  <div className="bg-primary-200 px-4 flex flex-col items-center tablet:items-start justify-center py-8 tablet:py-0 rounded-b-3xl tablet:rounded-b-none">
                    <h3 className="text-md tablet:text-xl laptop:text-3xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-base tablet:text-md laptop:text-lg font-[200] text-center tablet:text-start mt-6 tablet:mt-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-10 items-center">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl">
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
                  <h3 className="font-semibold text-primary-200 text-xl laptop:text-2xl">
                    {item.title}
                  </h3>
                  <p className="font-[200] laptop:text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
              <img
                src="/mobile-img.png"
                alt="mobile image"
                className="absolute -bottom-20 right-20 w-60 hidden laptop:block"
              />
            </div>
          </div>
        </div>

        <div className="black-background  pt-40 pb-20">
          <div className="max-w-6xl w-[80%] laptop:w-full mx-auto flex flex-col items-center gap-y-6">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl">
              PEER TO PEER GAMING
            </h2>
            <p className="font-[200] text-center text-lg laptop:text-xl max-w-3xl">
              Engage in a thrilling peer-to-peer games with real time betting
              where players can challenge each other and win big!
            </p>
            <div className="flex w-full justify-evenly mt-8">
              {peerToPeerGaming.map((item, index) => (
                <img
                  className="w-16 tablet:w-20 laptop:w-32"
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
            <img
              src="/img-10.png"
              className="w-32 laptop:w-60 absolute -top-28 right-20"
            />
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl">
              ADVANTAGES
            </h2>
            <div className="hidden laptop:flex w-full justify-center mt-20">
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
            <div className="laptop:hidden flex w-full justify-center mt-20 px-4">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 0,
                  modifier: 2,
                }}
                navigation={{
                  prevEl: ".custom-prev-button",
                  nextEl: ".custom-next-button",
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full !px-6"
              >
                {advantages.map((advantage, index) => (
                  <SwiperSlide key={index}>
                    <div
                      key={index}
                      className="space-y-2 w-full border-t-2 px-10 py-10 relative"
                    >
                      <div className="w-3 h-3 rounded-full bg-white absolute -top-2 left-4" />
                      <img src={advantage.icon} className="w-20" />
                      <h3 className="text-2xl font-semibold">
                        {advantage.title}
                      </h3>
                      <p className="text-xl font-[200]">
                        {advantage.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute flex laptop:hidden w-full left-0 right-0 items-center m-auto top-0 bottom-0 justify-between z-[999] mt-60 px-10">
                <CustomNavigation onClick={() => {}} direction="prev" />
                <CustomNavigation onClick={() => {}} direction="next" />
              </div>
            </div>
          </div>
        </div>

        <div className="black-background py-20 h-full">
          <div className="max-w-6xl mx-auto flex flex-col laptop:flex-row gap-y-10 h-max items-center gap-x-10 justify-evenly">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl leading-snug">
              STAKING
              <br className="hidden laptop:block" />
              REWARDS
            </h2>
            <div className="flex gap-x-10">
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
                    You will immediately unlock rewards from staking that you
                    can use in Pokerface, or save them for later!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="black-background py-20 px-4 laptop:px-0">
          <div className="max-w-6xl mx-auto flex-col-reverse laptop:flex-col gap-y-4 flex items-center justify-evenly gap-x-10">
            <img src="/POKERFACE-graph.png" alt="graph" className="w-[500px]" />
            <div className="flex flex-col items-center laptop:items-start px-6 laptop:px-0">
              <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl leading-snug">
                MARKET <br className="hidden laptop:block" />
                OPPORTUNITY
              </h2>
              <p className="font-[200] text-lg laptop:text-xl laptop:w-[500px] mt-4 text-center laptop:text-start">
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

        <div className="black-background py-20 px-10 laptop:px-0">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-10 items-center">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl leading-snug text-center">
              HOW WE COMPARE TO THE <br />
              COMPETITION
            </h2>
            <img src="/POKERFACE-4.jpg" />
          </div>
        </div>

        <div className="black-background py-20">
          <div className="max-w-6xl mx-auto flex flex-col gap-y-10 items-center relative">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl">
              ROADMAP
            </h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={10}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 2,
              }}
              navigation={{
                prevEl: ".custom-prev-button",
                nextEl: ".custom-next-button",
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full !px-6"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
            >
              {roadmap.map((item, index) => (
                <SwiperSlide key={index}>
                  <p className="font-semibold text-2xl px-6 py-2 rounded-full bg-primary-100 w-max absolute mx-auto right-0 left-0 z-[99]">
                    Phase {index + 1}
                  </p>
                  <div className="mt-6 border-2 border-primary-100 rounded-3xl p-6 min-h-[400px] w-[360px] mx-auto relative flex flex-col justify-center">
                    {item.phase && <p>{item.phase}</p>}
                    <div className="space-y-1 mt-6">
                      {item.items.map((rItem, index) => (
                        <p key={index}>• {rItem}</p>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute flex w-full left-0 right-0 items-center m-auto top-0 bottom-0 justify-between z-[999] mt-20">
              <CustomNavigation onClick={() => {}} direction="prev" />
              <CustomNavigation onClick={() => {}} direction="next" />
            </div>
          </div>
        </div>

        <div className="black-background py-20 px-4 laptop:px-0">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-10">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl">
              INVESTMENT OPPORTUNITY
            </h2>
            <div className="flex flex-col tablet:flex-row gap-y-8 items-center justify-between gap-x-6">
              {investmentOpportunity.map((opportunity, index) => (
                <GradientCard
                  key={index}
                  className="laptop:min-w-[340px] w-full tablet:max-w-[260px] laptop:max-w-[340px] tablet:min-h-[260px] space-y-4"
                >
                  <h2 className="z-10 relative text-primary-200 text-lg laptop:text-2xl font-semibold">
                    {opportunity.title}
                  </h2>
                  <p className="z-10 relative font-[200] text-md laptop:text-xl">
                    {opportunity.description}
                  </p>
                </GradientCard>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20 px-4 laptop:px-0">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-10">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl text-center leading-snug">
              $FACE IS SET TO LAUNCH ON <br /> MULTIPLE EXCHANGES
            </h2>
            <div className="flex flex-col tablet:flex-row gap-y-8 items-center justify-between gap-x-6 w-full">
              {Array.from({ length: 3 }).map((_, index) => (
                <GradientCard
                  key={index}
                  className="laptop:min-w-[340px] min-w-[240px] w-full laptop:max-w-[340px] min-h-[200px] flex flex-col space-y-4 items-center"
                >
                  <img src="/loading.svg" alt="loading" className="w-24" />
                  <p className="z-10 relative text-primary-200 text-xl laptop:text-2xl font-semibold">
                    Coming Soon
                  </p>
                </GradientCard>
              ))}
            </div>
          </div>
        </div>

        <div className="black-background py-20 px-4 laptop:px-0">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-20">
            <h2 className="font-semibold text-primary-200 text-4xl laptop:text-5xl text-center">
              POWERED BY
            </h2>
            <div className="grid grid-cols-1 tablet:grid-cols-4 gap-20 w-full">
              {Array.from({ length: 16 }).map((_, index) => (
                <img
                  className="h-10 w-24 laptop:w-40 object-contain m-auto"
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
