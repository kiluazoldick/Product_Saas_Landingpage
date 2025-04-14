import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-35  bg-gradient-to-br from-[#151934] to-[#282D45] text-center">
      <div className="max-w-[1224px] mx-auto">
        <div className="mb-[50px]">
          <h1 className="text-5xl font-bold mb-6 text-linear-gradient bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent h-[76px]">
            A CRM dashboard for engineering teams
          </h1>
          <p className="text-lg text-[#8F9BB7] mb-8 ">
            Rorem ipsum dolor sit amet consectetur. Gravida convallis orci
            ultrices non. Ultricies tempor at ut cursus mi.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="rounded-[36px] bg-[#7214FF] hover:bg-[#B756FE] text-[#ffffff] cursor-pointer">
              Get a demo
            </Button>
            <Button
              className="rounded-[36px] bg-transparent text-[#ffffff] cursor-pointer"
              variant="outline"
            >
              View pricing
            </Button>
          </div>
        </div>
        <div className="items-center">
          <div className="max-w-[800px]item-center mx-auto">
            <Image
              src="/images/Hero image.png"
              alt="hero"
              width={800}
              height={800}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
