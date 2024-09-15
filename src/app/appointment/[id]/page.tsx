"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { doctorProc, doctors } from '../../../../public/assets'
import Image, { StaticImageData } from 'next/image'
import dayjs, { Dayjs } from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers'
import RelatedDoctor from '@/components/RelatedDoctor'



const DoctorIdPage = () => {
    const {id} = useParams()
    const [doctorObject,setDocorObject]=useState<doctorProc>()
    
useEffect(()=>{
const findSingleDoctor= doctors.find(item=>item._id===id)
setDocorObject(findSingleDoctor)
},[id])

const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

if (value) {
    const formattedDateTime = value.format('MM/DD/YYYY hh:mm A');
    console.log(formattedDateTime); 
  }

  return (
    <div className='w-[90%] mx-auto my-10 flex flex-col gap-10'>
        <div className="flex gap-10 flex-col md:flex-row ">
        <div className="w-full md:w-[30%] lg:w-[20%] h-[50vh] md:h-[40vh] relative bg-bgprimary rounded-3xl overflow-hidden">
         <Image src={doctorObject?.image as StaticImageData  } alt='' fill className='object-cover'/>
        </div>
        <div className="w-full md:w-[70%] lg:w-[80%] md:border rounded-3xl p-10 ">
            <div className="flex items-center mb-8 md:mb-0 gap-2">
            <h1 className="font-bold text-2xl ">{doctorObject?.name} </h1>
            <Image src={"/verified_icon.svg"} width={15} height={15} className='object-cover' alt=''/>
            </div>
            <div className="flex items-center gap-3 my-2">
            <p className="text-muted-foreground text-sm">{doctorObject?.degree} - {doctorObject?.speciality} </p>
            <p className="border rounded-full py-1 px-3">{doctorObject?.experience} </p>
            </div>
             <div className=" flex  gap-2 my-3 flex-col">
                <div className="flex items-center gap-2">
             <h2 className="font-bold text-xl  text-muted-foreground ">About</h2>    
             <Image src={"/info_icon.svg"} width={15} height={15} className='object-cover text-gray-200 ' alt=''/>
                </div>
             <p className="text-muted-foreground">{doctorObject?.about} </p>
             <p className="text-muted-foreground">Appointment Fee: ${doctorObject?.fees} </p>
             </div>
        </div>
        </div>


        <DemoContainer   components={['DateTimePicker', 'DateTimePicker']}>
        <DemoItem>
        <DateTimePicker
        views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
          label="book an appoinmemt"
          value={value}
          onChange={(newValue) => setValue(newValue)}
       
        />
    </DemoItem>
        </DemoContainer>

        <div className="flex items-center w-full justify-center">
            <RelatedDoctor/>
        </div>
      
    </div>
  )
}
  
export default DoctorIdPage