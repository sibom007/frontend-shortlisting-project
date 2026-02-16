import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-41.25">
      <div className="flex gap-2.25 items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          className="w-10.25 h-8.25"
          width={410}
          height={330}
        />
        <h1 className="text-3xl font-semibold">Squid</h1>
      </div>
      <div className="flex items-center gap-8.25">
        <button>Home</button>
        <Button variant={"landing"} size={"landingSize"}>
          Download Template
        </Button>
      </div>
    </div>
  );
};
