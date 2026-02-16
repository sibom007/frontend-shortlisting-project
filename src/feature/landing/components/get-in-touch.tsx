import Image from "next/image";
import Earth from "@/assets/get-in-touch/Earth.svg";
import bottomRightBoll from "@/assets/get-in-touch/bottomRightBoll.svg";
import topLeftBoll from "@/assets/get-in-touch/topLeftBoll.svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const GetInTouch = () => {
  return (
    <section className="px-41.25 mt-72.75">
      <div className="flex items-center gap-15.5">
        {/* Images */}
        <div>
          <Image src={topLeftBoll} alt="Earth" width={64} height={64} />
          <Image src={Earth} alt="Earth" width={541.98} height={541.85} />
          <div className="flex justify-end">
            <Image src={bottomRightBoll} alt="Earth" width={96} height={96} />
          </div>
        </div>
        {/* Contents */}
        <div>
          <h1 className="text-[48px] font-poppins">Get In Touch</h1>
          <p className="text-[18px] font-poppins text-muted-foreground mb-7">
            A good design is not only aesthetically pleasing, but <br /> also
            functional. It should be able to solve the problem{" "}
          </p>
          {/* Froms */}
          <div className="space-y-4.5">
            <Input placeholder="Your email" />
            <Input placeholder="your name" />
            <Textarea placeholder="Write A message" className="h-39" />
            <Button variant={"landing"} size={"landingSize"}>
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
