"use client"
import { CreateDoctorContext } from '@/components/context/DoctorContext'
import DoctorCard from '@/components/DoctorCard'
import { StaticImageData } from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

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

  type specialType = {
    specials: string
  }
const DoctorSpecial = () => {
  const doctors = useContext(CreateDoctorContext)
  const params = useParams<specialType>()

  const[doctorsArray,setDoctorsArray]=useState<doctorProc[]>([])

  const text = params.specials;

  const cleanedText = text.replace(/[^a-zA-Z]/g, " "); 
  const splitText = cleanedText.split(" ").filter(Boolean).join(" "); 
  
  
  useEffect(()=>{
const filterArray=doctors.filter(item=>item.speciality.toLowerCase().trim()===splitText.toLowerCase().trim())
setDoctorsArray(filterArray)
  },[doctors.length,params.specials, text])




  const router = useRouter()


  return (
    <div className='w-[90%] mx-auto flex flex-col'>
    <h1 className="my-10 text-muted-foreground">Broswse throught the doctors speciallist</h1>

    <div className="flex gap-10">

   <div className="flex flex-col gap-4">
    <p  onClick={()=> splitText==="General physician"?router.push("/doctors"):router.push("/doctors/General physician") } className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">general physician</p>
    <p onClick={()=> splitText==="gynecologist"?router.push("/doctors"):router.push("/doctors/gynecologist") }  className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">gynecologist</p>
    <p onClick={()=> splitText==="dermatologist"?router.push("/doctors"):router.push("/doctors/dermatologist") }  className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">dermatologist</p>
    <p onClick={()=> splitText==="pediatricians"?router.push("/doctors"):router.push("/doctors/pediatricians") }  className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">pediatricians</p>
    <p onClick={()=> splitText==="neurlogist"?router.push("/doctors"):router.push("/doctors/neurologist") }  className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">neurlogist</p>
    <p onClick={()=> splitText==="gastroenterologist"?router.push("/doctors"):router.push("/doctors/gastroenterologist") }  className="px-5 py-3 text-muted-foreground border capitalize  cursor-pointer">gastroenterologist</p>
   </div>

   <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-3  gap-10 ">
   {
              doctorsArray?.slice(0,10).map((item)=>(
                  < DoctorCard item={item} key={item._id}/>
              ))
          }
   </div>

    </div>

  </div>
  )
}

export default DoctorSpecial