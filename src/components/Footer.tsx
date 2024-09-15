import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className=' flex h-20 items-center flex-col justify-between w-[90%] mx-auto my-16 '>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex-1">
             <Image src={"/logo.svg"} width={100} height={100} alt='' className=''/>
             <p className="mt-4 text-sm text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto et non dolores ex tempore, laboriosam qui delectus culpa alias?
             </p>
            </div>
            <div className="flex  flex-col justify-center lg:items-center">
               <div className="text-sm text-muted-foreground">
               <h2 className=" text-lg uppercase text-black/80 mb-3 tracking-wide font-semibold">Company</h2>
                <p className="">Home</p>
                <p className="">about us</p>
                <p className="">Contact us</p>
                <p className="">privacy & policy</p>
               </div>
            </div>
            <div className="flex  lg:justify-end">
          <div className="flex flex-col">
          <h2 className="   text-lg uppercase text-black/80 mb-3 tracking-wide font-semibold">get in touch</h2>
                <a href='tel:+35853157776' className="text-sm text-muted-foreground">+35853157776</a>
                <a href='mailto:marvinprice232@gmail.com' className="text-sm text-muted-foreground">marvinprice232@gmail.com</a>
       
          </div>
               
            </div>
        </div>
        <div className="border-t border-gray-300 w-full my-7 flex items-center justify-center border-spacing-4 ">

          <p className="my-4 text-sm text-muted-foreground">  prescripto &copy; Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, voluptas.</p>
        </div>
    </div>
  )
}

export default Footer