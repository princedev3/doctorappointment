"use client"
import { StarFilledIcon } from '@radix-ui/react-icons'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type doctorProc={
    _id: string;
    name: string;
    image:StaticImageData ;
    speciality: string;
    degree: string;
    experience: string;
    about: string;
    fees: number;
    address: {
        line1: string;
        line2: string;
    }
    }
const DoctorCard = ({item,key}:{item:doctorProc,key:string}) => {
  return (
    <Link href={`/appointment/${item._id}`}  key={key} className="shadow p-1 cursor-pointer rounded-md hover:-translate-y-2 duration-200 ease-in-out h-fit">
                        <div className="">
                            <Image src={item.image} alt='' width={150} height={150} className='object-cover bg-gray-100'/>
                        </div>
                      
                        <div className="my-4">
                            <p className="flex gap-5  text-sm items-center text-lime-600 "><StarFilledIcon className='w-4 h-4  text-lime-600 '/>Avaliable </p>
                            <h1 className="font-semibold text-sm">{item.name} </h1>
                            <p className="text-sm text-muted-foreground">{item.speciality} </p>
                        </div>
                    </Link> 
  )
}

export default DoctorCard