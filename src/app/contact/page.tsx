"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResult("Sending....");
      const forms = event.target as HTMLFormElement
      const formData = new FormData(forms);
  
      formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL_SEND as string);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        forms .reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='w-[90%] mx-auto  flex flex-col gap-10'>
        <div className="">
            <h1 className="font-bold text-xl my-10 uppercase text-center">contact us</h1>
            <div className="flex flex-col md:flex-row gap-16 w-full xl:w-[70%] mx-auto ">
                <div className=" w-full md:flex-1 h-[50vh]  relative">
                    <Image src='/contact_image.png' fill alt='' className='object-cover rounded-sm'/>
                </div>
                <div className="flex-1 flex flex-col justify-between ">
                    <p className="my-4 text-muted-foreground font-semibold text-xl">our office</p>
                    <p className="my-4 text-muted-foreground  text-base">54709 wilms station <br /> suitue 350,lagos Nigeria</p>
                    <p className=" text-muted-foreground  text-base">tel: +358 4531 57776</p>
                    <p className=" text-muted-foreground  text-base cursor-pointer">Email: marvinprince232@gmail.com</p>

                    <h3 className="my-4 text-muted-foreground font-semibold text-xl uppercase">careers at Prescripto</h3>
                    <p className="my-4 text-muted-foreground text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aliquid molestiae!</p>
                    <p className="my-4 border p-4 w-fit capitalize cursor-pointer">explore jobs</p>
                </div>
            </div>

          
        </div>


        <div className="flex flex-col gap-4 my-10">
      
      <form onSubmit={onSubmit} className=' flex flex-col gap-3 w-[100%] lg:w-[70%] mx-auto '>
        <h2 className="font-semibold text-lg text-gray-600 text-center">Do your have a message for us?</h2>
        <p className="text-sm text-muted-foreground mb-10 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quidem?</p>
        <div className="flex flex-col md:flex-row gap-6 items-center w-full">
        <input type="text" placeholder='Names' name="name" required className='border rounded-sm p-2 w-full'/>
        <input type="email" name="email" placeholder='Email' required className='border rounded-sm p-2 w-full'/>
        </div>
        <textarea name="message" placeholder='message' required className='border rounded-sm p-2 resize-none'></textarea>

        <Button type="submit" variant={'default'} className='bg-bgprimary w-fit my-6'>Submit Form</Button>

      </form>
      <span>{result}</span>

    </div>
       
    </div>
  )
}

export default Contact