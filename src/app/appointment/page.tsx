import React from 'react'
import { doctors } from '../../../public/assets'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const MyAppoiment = () => {
  return (
    <div className='w-[90%] mx-auto my-10'>
        <h1 className="font-semibold text-lg text-muted-foreground my-8 ">My appointment</h1>
        <hr className="mb-4" />
        <div className=" flex flex-col gap-10 ">
            {
                doctors.slice(0,2).map(item=>(

                    <div key={item._id} className="flex gap-2 justify-between border-b pb-3">
                        <div className="flex gap-4">

                        <div className="w-[200px] h-[25vh] relative  hidden md:block " key={item._id}>
                            <Image src={item.image} alt='' fill className='object-cover'/>
                        </div>
                        
                        <div className="flex flex-col justify-between">
                       <h2 className="text-lg font-semibold text-black/80 capitalize">{item.name} </h2>
                       <p className="text-muted-foreground text-base">{item.speciality}</p>
                       <p className="text-base uppercase font-semibold text-black/80 my-3">Address:</p>
                       <p className="my-1 text-base uppercase font-semibold text-muted-foreground ">{item.address.line1}</p>
                       <p className="my-1 text-base uppercase font-semibold text-muted-foreground">{item.address.line2}</p>
                       <p className=" text-base uppercase font-semibold text-muted-foreground">Date & Time: 25 July, 2024 | 8:30am</p>
                        </div>
                        
                        </div>

                        <div className="flex flex-col gap-4  justify-end">
                            <Button variant={'outline' } className='min-w-[150px] hover:bg-bgprimary hover:text-white capitalize rounded-sm text-muted-foreground '>pay online</Button>
                            <Button variant={'outline' } className='min-w-[150px] hover:bg-red-500 hover:text-white capitalize rounded-sm text-muted-foreground '>cancel appointment</Button>
                        </div>
                  
                    </div>
                ))
            }
        </div>
    </div> 
  )
}

export default MyAppoiment