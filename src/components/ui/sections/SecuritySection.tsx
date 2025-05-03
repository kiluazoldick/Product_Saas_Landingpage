import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, CornerUpLeft, CornerUpRight, X } from "lucide-react";

export default function SecurityAppsSection() {
    return (
        <section className="py-20 bg-[#0E1330] text-gray-800 h-[1444px]">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6 text-linear-gradient bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
                    Essential apps that protect your
                </h2>
                <h2 className="text-3xl font-bold mb-[60px]">
                    📧
                    <span className="text-linear-gradient bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
                        Email,
                    </span>{" "}
                    📆
                    <span className="text-linear-gradient bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
                        Events,
                    </span>{" "}
                    📄
                    <span className="text-linear-gradient bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
                        Files,
                    </span>{" "}
                    📒
                    <span className="text-linear-gradient bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
                        Documents
                    </span>
                </h2>

                <div className="max-w-7xl w-full mx-auto bg-gradient-to-r from-[#111130] to-[#1a1a40] rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 ">
                    <div className="md:w-1/2 space-y-5 my-auto " >
                        <h3 className="text-3xl text-white md:text-4xl font-bold text-start mb-4">End-to-end encrypted inbox and messages</h3>
                        <p className="text-gray-300 text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deserunt tempora repellendus. Voluptatum molestias dolorem quasi ut quae corporis vero natus magni exercitationem, accusamus dolor consequuntur.
                        </p>
                        <Button className="bg-transparent hover:bg-white/10 border border-white/30 rounded-full px-6 py-2 transition-colors mr-80">
                            Learn More
                        </Button>
                    </div>
                    {/* Second side */}
                    <div className="md:w-1/2 p-4 space-y-4 rounded-lg border bg-[#0d0d25] text-gray-50">
                        {/* Icons */}
                        <div className=" flex flex-row justify-between ">
                            <div className=" flex flex-row space-x-5">
                                <X className="border rounded-md  " />
                                <ArrowDown className=" border rounded-md " />
                                <ArrowUp className="border rounded-md " />
                            </div>
                            <div className="flex flex-row space-x-5">
                                <CornerUpLeft className="border border-black bg-[#3f93ac] rounded-md  " />
                                <CornerUpLeft className="border rounded-md " />
                                <CornerUpRight className="border rounded-md " />
                            </div>
                        </div>
                        {/* Content */}
                        <div className="space-y-3">
                            <h3 className="font-bold text-xl text-start">
                                Invitation to present at Bsides
                            </h3>
                            <div className="flex flex-col gap-5 border-[#dfdede]">
                                <div className=" border border-[#dfdede] rounded-md p-2 space-y-3">
                                    <div className="w-full flex flex-row justify-between">
                                        <div className="flex items-start  gap-3">
                                            <div className="bg-amber-200 rounded-lg h-10 w-10"></div>
                                            <span className="flex flex-col self-start">
                                                <h4 className="text-md">R. Baynham</h4>
                                                <p className="text-xs">thratuy.nute@gmail.com</p>
                                            </span>
                                        </div>
                                        <div>Feb 8, 2024</div>
                                    </div>
                                    <p className="text-start">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat saepe alias. Debitis 
                                    </p>
                                </div>
                               
                                <div className=" border border-[#b7b7b7] rounded-md p-2 space-y-3">
                                    <div className="w-full flex flex-row justify-between">
                                        <div className="flex items-start  gap-3">
                                            <div className="bg-blue-400 rounded-lg h-10 w-10"></div>
                                            <span className="flex flex-col self-start">
                                                <h4 className="text-md">Cooper Christin</h4>
                                                <p className="text-xs">cooper@gmail.com</p>
                                            </span>
                                        </div>
                                        <div>Feb 8, 2024</div>
                                    </div>
                                    <p className="text-start">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat saepe alias. Debitis 
                                    </p>
                                </div>
                                {/* <div></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Button className="rounded-[36px] bg-[#7214FF] hover:bg-[#B756FE] text-[#ffffff] cursor-pointer">
                        Get a started
                    </Button>
                    <Button
                        className="rounded-[36px] bg-transparent text-[#ffffff] cursor-pointer"
                        variant="outline"
                    >
                        Browse all features
                    </Button>
                </div>
            </div>
        </section>
    );
}