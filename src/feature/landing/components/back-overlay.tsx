import Image from "next/image";
import middleShap from "@/assets/back-overlay/middleShap.png";

export const BackOverly = () => {
  return (
    <section className="absolute top-198.25 -z-20 w-full h-225 pointer-events-none">
      {/* 1 — TOP OVERLAY SHAPE */}
      <div
        className="absolute top-10 left-0 w-full h-129 z-20 bg-background
        "
        style={{
          clipPath: "ellipse(70% 40% at 50% 0%)",
        }}
      />

      {/* 2 — MIDDLE BASE SHAPE (MAIN WAVE IMAGE) */}
      <Image
        src={middleShap}
        alt="middle-shape"
        className="absolute top-20 left-0 w-full h-150 z-10 bg-linear-to-r from-[#FF9898] to-[#8054FF]"
        priority
      />

      {/* 3 — BOTTOM OVERLAY SHAPE (CUTTING CURVE) */}
      <div
        className="absolute top-44 left-0 w-full h-129 z-20  bg-background
       "
        style={{
          clipPath: "ellipse(70% 45% at 50% 100%)",
        }}
      />
    </section>
  );
};
