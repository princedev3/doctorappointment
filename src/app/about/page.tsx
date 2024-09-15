import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-[90%] mx-auto flex flex-col'>
        <h1 className="text-center my-10 font-semibold uppercase tracking-wide text-xl text-muted-foreground">About us</h1>
        <div className="flex flex-col md:flex-row gap-10">
            <div className=" h-[70vh] md:h-[50vh] w-full  md:flex-[2] relative ">
                <Image src={"/about_image.png"} className='object-cover' alt='' fill/>
            </div>
            <div className="md:flex-[2] lg:flex-[3] text-justify text-sm text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ad magni? Vitae nesciunt earum numquam rem, minus dolorem doloremque libero cum doloribus, eaque quaerat quasi expedita, laudantium natus ipsum necessitatibus esse! Iusto sint atque repellat ea reprehenderit, quae omnis iste.
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ad magni? Vitae nesciunt earum numquam rem, minus dolorem doloremque libero cum doloribus, eaque quaerat quasi expedita, laudantium natus ipsum necessitatibus esse! Iusto sint atque repellat ea reprehenderit, quae omnis iste.
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ad magni? Vitae nesciunt earum numquam rem, minus dolorem doloremque libero cum doloribus, eaque quaerat quasi expedita, laudantium natus ipsum necessitatibus esse! Iusto sint atque repellat ea reprehenderit, quae omnis iste.
            </div>
        </div>

        <div className="my-10">
            <h1 className="my-5 uppercase">why <span className="font-bold ml-2">choose us</span></h1>
            <div className="flex flex-wrap">
              <div className="border p-5 w-full md:w-1/2 lg:w-1/3">
                   <h1 className="font-bold uppercase text-base mb-6">Efficiency:</h1>
                   <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia voluptatibus dicta dolorum, deleniti voluptates!</p>
              </div>
              <div className="border p-5 w-full md:w-1/2 lg:w-1/3">
                   <h1 className="font-bold uppercase text-base mb-6">convience:</h1>
                   <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia voluptatibus dicta dolorum, deleniti voluptates!</p>
              </div>
              <div className="border p-5 w-full md:w-1/2 lg:w-1/3">
                   <h1 className="font-bold uppercase text-base mb-6">personalization:</h1>
                   <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia voluptatibus dicta dolorum, deleniti voluptates!</p>
              </div>
            
              

            </div>
              
        </div>
    </div>
  )
}

export default About