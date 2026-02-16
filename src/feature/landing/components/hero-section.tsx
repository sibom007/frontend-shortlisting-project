import { Button } from "@/components/ui/button";
import Image from "next/image";
import bgBall from "@/assets/hero-section/bgBall.png";
import rightTowBall from "@/assets/hero-section/rightTowBall.png";
import leftBall from "@/assets/hero-section/leftBall.png";
import line from "@/assets/hero-section/line.png";
import box from "@/assets/hero-section/box.png";
import darkLogo from "@/assets/hero-section/dark-logo.svg";
import loadingState from "@/assets/hero-section/loading-state.svg";
import card1down from "@/assets/hero-section/card-1-down.png";
import chart from "@/assets/hero-section/chart.png";
import group3 from "@/assets/hero-section/group- (3).png";
import group2 from "@/assets/hero-section/group- (2).png";
import group4 from "@/assets/hero-section/group- (4).png";
import group5 from "@/assets/hero-section/group- (5).png";
import group6 from "@/assets/hero-section/group- (6).png";
import group1 from "@/assets/hero-section/group- (1).png";
import grothHeader from "@/assets/hero-section/grothHeader.png";
import groth from "@/assets/hero-section/groth.png";
import { Separator } from "@/components/ui/separator";

export const HeroSection = () => {
  return (
    <section className="mt-24.5 px-41.25 relative">
      {/* Top Page */}
      <div className=" relative flex flex-col justify-center items-center ">
        <Image
          className="absolute -top-40 -z-10 "
          src={bgBall}
          height={530}
          width={530}
          alt="bgBall"
        />
        {Array.from({ length: 12 }).map((_, i) => (
          <Image
            key={i}
            className="absolute -ml-5 -z-10"
            src={line}
            width={1}
            height={851}
            alt={`line-${i}`}
            style={{
              left: `${i * 110.47}px`,
            }}
          />
        ))}
        <Image
          className=" absolute -top-28 mr-16"
          src={rightTowBall}
          height={64}
          width={64}
          alt="bgBall"
        />
        <Image
          className=" absolute -right-12 bottom-16"
          src={rightTowBall}
          height={96}
          width={96}
          alt="bgBall"
        />
        <Image
          className=" absolute -left-8 -bottom-6"
          src={leftBall}
          height={130}
          width={130}
          alt="bgBall"
        />

        <h1 className="text-[64px] text-center font-poppins mb-4.5">
          Beautiful Landing Page <br /> Design for You
        </h1>
        <p className="text-muted-foreground text-[18px] text-center mb-6.25">
          A good design is not only aesthetically pleasing, but also <br />
          functional. It should be able to solve the problem{" "}
        </p>
        <Button className="mb-17.25" variant={"landing"} size={"landingSize"}>
          Download Template
        </Button>
      </div>
      {/* down page */}
      <div
        className={
          "flex justify-center w-full h-full rounded-b-4xl bg-no-repeat bg-cover p-8 relative z-10"
        }
        style={{ backgroundImage: `url(${box.src})` }}>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 gap-6 items-stretch">
            {/* Left Tall Card */}
            <div className="bg-muted row-span-2 rounded-2xl p-6">
              <div className="flex justify-center items-center pb-5">
                <Image src={darkLogo} alt="logo" width={41} height={33} />
              </div>
              <Separator className="text-[#313139] w-46" />
              <div className="flex flex-col gap-5 mt-8.25 mb-11">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image
                    key={i}
                    src={loadingState}
                    width={346}
                    height={20}
                    alt={`line-${i}`}
                    style={{ left: `${i * 24}px` }}
                  />
                ))}
              </div>
              <div className="flex justify-center items-center ">
                <Image src={card1down} alt="image" width={106} height={81} />
              </div>
            </div>

            {/* Middle Top Card */}
            <div className="rounded-2xl bg-muted p-6 flex flex-col justify-center items-center ">
              <Image src={chart} alt="image" width={252} height={155} />
            </div>

            {/* Right Top Card */}
            <div className="rounded-2xl bg-muted p-6 flex flex-col items-center">
              <Image src={group3} alt="image" width={192} height={20} />
              <div
                className="space-y-1.25 h-full  flex flex-col items-center justify-center
                 bg-cover bg-no-repeat
              "
                style={{ backgroundImage: `url(${group1})` }}>
                <Image src={group2} alt="image" width={192} height={54} />
                <Image src={group4} alt="image" width={192} height={54} />
                <Image src={group5} alt="image" width={192} height={54} />
                <Image src={group6} alt="image" width={192} height={54} />
              </div>
            </div>

            {/* Middle Bottom Card */}
            <div className="rounded-2xl bg-muted p-5  flex flex=col items-center justify-center">
              <div>
                <Image
                  className="mb-4.5"
                  src={grothHeader}
                  alt="image"
                  width={192}
                  height={20}
                />
                <Separator />
                <Image
                  className="mt-7.5"
                  src={groth}
                  alt="image"
                  width={171.75}
                  height={93.34}
                />
              </div>
            </div>

            {/* Right Bottom Card */}
            <div className="rounded-2xl bg-muted ">{/* empty */}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
