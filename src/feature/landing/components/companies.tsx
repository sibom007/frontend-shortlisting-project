import textImg1 from "@/assets/companies/textImg1.svg";
import textImg2 from "@/assets/companies/textImg2.svg";
import textImg3 from "@/assets/companies/textImg3.svg";
import textImg4 from "@/assets/companies/textImg4.svg";
import textImg5 from "@/assets/companies/textImg5.svg";
import textImg6 from "@/assets/companies/textImg6.svg";
import Image from "next/image";

const Template = [
  {
    img: textImg1,
  },
  {
    img: textImg2,
  },
  {
    img: textImg3,
  },
  {
    img: textImg4,
  },
  {
    img: textImg5,
  },
  {
    img: textImg6,
  },
];

export const Companies = () => {
  return (
    <section className="px-41.25  bg-[#18181C] mt-11">
      <div className="pt-28 mb-17.5 flex justify-center items-center text-center h-full">
        <h1 className="text-[48px] font-poppins font-semibold">
          Companies we Worked <br /> With in SInce 2015
        </h1>
      </div>
      <div className="flex gap-7.5 pb-80.75">
        {Template.map((item, i) => {
          return (
            <div
              key={i}
              className="w-40 h-23 bg-[#000000] rounded-[10px] flex justify-center items-center">
              <Image
                src={item.img}
                alt="images"
                width={101.07}
                height={37.76}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
