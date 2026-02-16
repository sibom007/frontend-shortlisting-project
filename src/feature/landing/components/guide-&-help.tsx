import Image from "next/image";
import Orbit from "@/assets/guide-&-help/Orbit.png";
import OrbitLogo5 from "@/assets/guide-&-help/Orbit-Logo5.svg";
import BoldLogo from "@/assets/guide-&-help/BoldLogo.svg";
import OrbitLogo1 from "@/assets/guide-&-help/Orbit-Logo1.png";
import OrbitLogo2 from "@/assets/guide-&-help/Orbit-Logo2.png";
import OrbitLogo3 from "@/assets/guide-&-help/Orbit-Logo3.png";
import { Button } from "@/components/ui/button";

export const GuideAndHelp = () => {
  return (
    <section className="px-41.25 mt-7.75">
      <div className="flex gap-6 items-center">
        <div className="relative">
          <Image
            src={BoldLogo}
            width={65}
            height={53}
            className="absolute top-77.25 left-77.25"
            alt="orbit"
          />
          <Image src={Orbit} width={678} height={678} alt="orbit" />
          <Image
            src={OrbitLogo1}
            className="absolute top-52.5 right-36"
            width={66}
            height={66}
            alt="orbit"
          />
          <Image
            src={OrbitLogo2}
            className="absolute top-45 left-41"
            width={66}
            height={66}
            alt="orbit"
          />
          <Image
            src={OrbitLogo3}
            className="absolute top-121.25 left-62.5"
            width={66}
            height={66}
            alt="orbit"
          />
          <Image
            src={OrbitLogo2}
            className="absolute top-45 left-41"
            width={66}
            height={66}
            alt="orbit"
          />
          <Image
            src={OrbitLogo5}
            className="absolute top-95 left-35"
            width={32}
            height={32}
            alt="orbit"
          />
          <Image
            src={OrbitLogo5}
            className="absolute top-33.25 left-82.5"
            width={32}
            height={32}
            alt="orbit"
          />
          <Image
            src={OrbitLogo5}
            className="absolute top-107.5 right-41.5"
            width={32}
            height={32}
            alt="orbit"
          />
        </div>
        <div>
          <h1 className="text-[48px] font-poppins">
            Were here to <br /> guide and help <br /> you at all times
          </h1>
          <p className="text-[18px] font-poppins text-muted-foreground mt-3 mb-11.5">
            A good design is not only aesthetically <br /> pleasing, but also
            functional. It should be <br /> able to solve the problem{" "}
          </p>
          <Button variant={"landing"} size={"landingSize"}>
            Download
          </Button>
        </div>
      </div>
    </section>
  );
};
