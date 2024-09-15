"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { doctors } from '../../public/assets'
import { StaticImageData } from 'next/image'
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
const RelatedDoctor = () => {
    const {id} =useParams()
    const[doctorList,setDoctorList]=useState<doctorProc[]>([])


    useEffect(()=>{
const findDoctor = doctors.find(item=>item._id===id)
const relatedDoc = doctors.filter(item=>item.speciality ===findDoctor?.speciality && item._id !==id)
setDoctorList(relatedDoc)
    },[id])

    
  return (
    <div className='flex items-center w-full justify-center flex-col'>
        <h1 className="text-xl font-semibold text-muted-foreground">Related Doctors</h1>
        <p className="text-muted-foreground my-3 text-base text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, labore?</p>

        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-3  gap-10 ">
   {
              doctorList?.map((item)=>(
                  < DoctorCard item={item} key={item._id} />
              ))
          }
   </div>
    </div>
  )
}

export default RelatedDoctor