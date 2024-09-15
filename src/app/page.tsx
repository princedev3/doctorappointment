"use client"

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import SpeciallityMenu from "@/components/SpeciallityMenu";
import TopDoctors from "@/components/TopDoctors";
import CreateAccount from "@/components/context/CreateAccount";



export default  function Home() {
  const imageArray=[
   {
    img: "/profile_pic.png",
    name:"dr john"
   },
   {
    img: "/doc15.png",
    name:"dr bellomy"
   },
   {
    img:  "/doc5.png",
    name:"dr jake"
   },
    
  
  ]

  return (
    <div className="w-[90%] mx-auto flex flex-col gap-5 h-full">
    <div className=" h-[80vh] bg-bgprimary rounded-3xl mt-5  flex  items-center justify-between">
      <div className="p-10 flex-1 flex flex-col gap-6">

        <div className="">
        <h1 className=" capitalize text-white font-semibold text-3xl xl:text-5xl  tracking-wide">
          book appointment 
        </h1>
        <br className="hidden  lg:block"/>
        <h1 className=" capitalize text-white font-semibold text-3xl xl:text-5xl tracking-wide">
          with trusted doctors
        </h1>
        </div>


<div className="flex items-center mb-4">
  {
    imageArray.map((item,index)=>(
      <TooltipProvider key={index} >
  <Tooltip>
    <TooltipTrigger key={index} className={`absolute  `} style={{marginLeft:index*25}} >
      <Image src={item.img} alt="" width={30} height={30} className="rounded-full border bg-slate-600"/>
    </TooltipTrigger>
    <TooltipContent>
      <p>{item.name} </p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
    ))

  }
  <div className="text-white ml-[100px] text-sm cursor-pointer">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo enim praesentium quam nobis perspiciatis, nisi neque maiores ipsum laboriosam.
  </div>
 
</div>


        <a  href="#appointment"  className="py-3 px-6 bg-white rounded-3xl text-bgprimary w-fit flex items-center gap-3">
         <span className="mr-1">book an appointment</span> <ArrowRight className="w-3 h-3"/>
        </a>


      </div>

      <div className="relative  flex-1 h-[60vh] md:flex items-end justify-end self-end hidden ">
        <Image src={"/header_img.png"} alt='' className="object-contain" fill/>
      </div>
   
    </div>
    <SpeciallityMenu/>
    <TopDoctors/>
    <CreateAccount/>
    </div>
  );
}
