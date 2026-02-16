import G1 from "@/assets/feature-boxs/G1.svg";
import G2 from "@/assets/feature-boxs/G2.svg";
import G3 from "@/assets/feature-boxs/G3.svg";
import G4 from "@/assets/feature-boxs/G4.svg";
import G5 from "@/assets/feature-boxs/G5.svg";
import G6 from "@/assets/feature-boxs/G6.svg";
import Image from "next/image";

const features = [
  {
    img: G1,
    title: "Fully Customizable",
    content:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
  },
  {
    img: G2,
    title: "Fully Customizable",
    content:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
  },
  {
    img: G3,
    title: "Fully Customizable",
    content:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
  },
  {
    img: G4,
    title: "Fully Customizable",
    content:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
  },
  {
    img: G5,
    title: "Fully Customizable",
    content:
      "A good design is not only aesthetically pleasing,  but also functional. It should be able to solve the problem ",
  },
  {
    img: G6,
    title: "Fully Customizable",
    content:
      "A good design is not only aesthetically pleasing,  but also functional. It should be able to solve the problem ",
  },
];

export const FeatureBoxes = () => {
  return (
    <section className="px-41.25 mt-24.25">
      {/* title */}
      <div className="mb-8.25">
        <h1 className="text-[48px] font-semibold font-poppins">
          Feature Boxes
        </h1>
        <p className="text-[18px] font-poppins mt-1.25">
          A good design is not only aesthetically pleasing, but also <br />{" "}
          functional. It should be able to solve the problem{" "}
        </p>
      </div>
      {/* grid content */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5 ">
          {features.map((item, i) => {
            return (
              <div
                key={i}
                className="w-87.5 h-92.75 bg-[#18181C] rounded-[20px]">
                <div className="flex flex-col justify-center items-center h-full">
                  <div
                    className={`w-26 h-26 rounded-[20px] bg-[#222228] ${i === 2 ? "bg-linear-to-r from-[#FF9898] to-[#8054FF]" : ""} flex items-center justify-center mb-9.75`}>
                    <Image src={item.img} width={44} height={44} alt="locn" />
                  </div>
                  <div className="text-center ">
                    <h1 className="text-[20px] font-poppins ">{item.title}</h1>
                    <p className="text-[14px]  font-poppins w-75.75 mt-3.75 text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
