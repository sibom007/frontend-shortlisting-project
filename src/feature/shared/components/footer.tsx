import BoldLogo from "@/assets/guide-&-help/BoldLogo.svg";
import Discord from "@/assets/footer/Discord.svg";
import In from "@/assets/footer/In.svg";
import Twter from "@/assets/footer/Twter.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <section>
      {/* top porsation */}
      <div className="bg-[#18181C]">
        <div className="px-41.25 pt-14.25 flex justify-between ">
          {/* images */}
          <div>
            <Image src={BoldLogo} width={56} height={47.07} alt="orbit" />
            <p className="text-[24px] text-muted-foreground mt-5.5">
              A good design is not only aesthetically <br /> pleasing, but also
              functional. It should be <br /> able to solve the problem{" "}
            </p>
          </div>
          {/* Links */}
          <div className="mb-7.75">
            <h1 className="text-[16px]">Sections</h1>
            <div className="grid grid-cols-3 text-left gap-26 text-muted-foreground">
              <div className="mt-3 space-y-5">
                <h4>home</h4>
                <h4>Section One</h4>
                <h4>Section Two</h4>
                <h4>Section Tree</h4>
              </div>
              <div className="mt-3 space-y-5">
                <h4>home</h4>
                <h4>Section One</h4>
                <h4>Section Two</h4>
                <h4>Section Tree</h4>
              </div>
              <div className="mt-3 space-y-5">
                <h4>home</h4>
                <h4>Section One</h4>
                <h4>Section Two</h4>
                <h4>Section Tree</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom porsation */}
      <div className="bg-black ">
        <div className="px-41.25 py-8 flex  justify-between items-center">
          <p>All Rights Reservd Inkyy.com 2022</p>
          <div className="flex gap-4">
            <Image src={Discord} width={40} height={40} alt="orbit" />
            <Image src={In} width={40} height={40} alt="orbit" />
            <Image src={Twter} width={40} height={40} alt="orbit" />
          </div>
        </div>
      </div>
    </section>
  );
};
