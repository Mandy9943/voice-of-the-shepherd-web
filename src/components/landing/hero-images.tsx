import { cn } from "@/lib/utils";
import Image from "next/image";

const imageAssets = [
  {
    src: "/stained-glass-religious-detail.png?query=ethereal+stained+glass+detail",
    alt: "Stained glass window",
    className: "bottom-0 sm:bottom-[-160px] md:bottom-0",
  },
  {
    src: "/dove-light-spiritual.png?query=glowing+dove+spiritual+light",
    alt: "Dove symbol",
    className:
      "bottom-[-100px] sm:bottom-[-240px] md:bottom-[-100px] lg:bottom-[-150px]  xl:bottom-[-100px] ",
  },
  {
    src: "/serene-landscape-cross.png?query=serene+landscape+distant+cross+misty",
    alt: "Calm landscape with cross",
    className: "bottom-[-320px] hidden md:hidden xl:block",
  },

  {
    src: "/ancient-religious-scroll.png?query=ancient+scroll+texture+soft+focus",
    alt: "Ancient scroll texture",
    className: "bottom-[-200px] xl:bottom-[-320px] hidden md:block",
  },
  {
    src: "/abstract-spiritual-light.png",
    alt: "Ethereal light beams",
    className:
      "bottom-[-100px] lg:bottom-[-150px]  xl:bottom-[-100px] hidden md:block",
  },
  {
    src: "/celestial-sky-soft-clouds.png",
    alt: "Celestial sky",
    className: "bottom-0 sm:bottom-[-160px] md:bottom-0",
  },
];

const HeroImages = () => {
  return (
    <div className="absolute bottom-0 w-full flex gap-4 justify-between">
      {imageAssets.map((image, index) => (
        <div
          key={index}
          className={cn(
            "relative aspect-[2/3] w-full rounded-lg overflow-hidden",
            image.className
          )}
        >
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className="object-cover"
            fill={true}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroImages;
