"use client"
import { CreateDoctorContext } from '@/components/context/DoctorContext'
import DoctorCard from '@/components/DoctorCard'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const DoctorPage = () => {
  const doctors = useContext(CreateDoctorContext)
  
  const router = useRouter()
  return (
    <div className='w-[90%] mx-auto fles flex-col'>
      <h1 className="my-10 text-muted-foreground">Broswse throught the doctors speciallist</h1>

      <div className="flex gap-10">

     <div className="flex flex-col gap-4">
      <p   onClick={()=>router.push("/doctors/General physician") }  className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">general physician</p>
      <p onClick={()=>router.push("/doctors/gynecologist") } className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">gynecologist</p>
      <p onClick={()=>router.push("/doctors/dermatologist") } className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">dermatologist</p>
      <p onClick={()=>router.push("/doctors/pediatricians") } className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">pediatricians</p>
      <p onClick={()=>router.push("/doctors/neurlogist") } className="px-5 py-3 text-muted-foreground border capitalize cursor-pointer">neurlogist</p>
      <p onClick={()=>router.push("/doctors/gastroenterologist") } className="px-5 py-3 text-muted-foreground border capitalize  cursor-pointer">gastroenterologist</p>
     </div>

     <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-3  gap-10 ">
     {
                doctors?.map((item)=>(
                    < DoctorCard item={item} key={item._id}/>
                ))
            }
     </div>

      </div>

    </div>
  )
}

export default DoctorPage