import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#151934] z-50 shadow-sm px-25">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl text-white font-bold">Product</h1>
        <nav className="hidden md:flex gap-6 text-[#8F9BB7]">
          <Link
            className=" hover:text-white transition-all duration-300 ease-in-out"
            href="#"
          >
            Home
          </Link>
          <Link
            className=" hover:text-white transition-all duration-300 ease-in-out"
            href="#"
          >
            About
          </Link>
          <Link
            className=" hover:text-white transition-all duration-300 ease-in-out"
            href="#"
          >
            Features
          </Link>
          <Link
            className=" hover:text-white transition-all duration-300 ease-in-out"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className=" hover:text-white transition-all duration-300 ease-in-out"
            href="#"
          >
            Blog
          </Link>
        </nav>
        <Button className="px-2.5 py-1.5 rounded-[36px] bg-[#7214FF] hover:bg-[#B756FE] text-[#ffffff] cursor-pointer ">
          Get a demo
        </Button>
      </div>
    </header>
  );
}
