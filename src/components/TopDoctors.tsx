"use client"
import React, { useContext } from 'react'

import  { StaticImageData } from 'next/image'

import { Button } from './ui/button'
import Link from 'next/link'
import { CreateDoctorContext } from './context/DoctorContext'
import DoctorCard from './DoctorCard'

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
const TopDoctors = () => {
    const doctors =useContext<doctorProc[]>(CreateDoctorContext)
 
  return (
    <div className='flex items-center justify-center flex-col gap-7 my-5'>
        <h1 className="font-semibold text-3xl ">Top Doctors to Book</h1>
        <p className="text-muted-foreground text-base text-center w-[60%] mx-auto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus voluptate magni facilis iure officiis sed? Eum eligendi nemo aliquid sint!</p>

        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-3  gap-10 " >
            {
                doctors?.slice(0,10).map((item)=>(
                    < DoctorCard item={item} key={item._id} />
                ))
            }
        </div>
        <Link href={"/doctors"}>
        <Button type='button' variant={'default'} size={'lg'}  className='text-lg bg-bgprimary py-4 px-5  hover:bg-bgprimary/80  '>show more</Button>
        </Link>
    </div>
  )
}

export default TopDoctors