import { Button } from "@/components/ui/button";
import freeToJoin from "@/assets/free-to-join/free-to-join.svg";
import Image from "next/image";

export const FreeToJoin = () => {
  return (
    <section className="px-41.25 relative ">
      <div className="bg-linear-to-r from-[#FF9898] to-[#8054FF] rounded-[40px] absolute -top-62.5">
        <div className="flex justify-center items-center">
          <div className="pt-24.75 pl-24.75 pb-18">
            <h4 className="text-[20px]">Love our Our Tool?</h4>
            <h1 className="mt-3 mb-3 text-[48px] font-poppins">
              Fell Free to Join our <br /> 15 Days Free Trial
            </h1>
            <Button variant={"landingBlack"} size={"landingSize"}>
              Download Template
            </Button>
          </div>
          <div>
            <Image src={freeToJoin} alt="freeToJoin" width={554} height={369} />
          </div>
        </div>
      </div>
    </section>
  );
};
