"use client"
import React, { createContext, useEffect, useState } from 'react'
import { doctors } from '../../../public/assets';
import { StaticImageData } from 'next/image';

type doctorProc={
    _id: string;
    name: string;
    image: StaticImageData;
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

export const CreateDoctorContext = createContext<doctorProc[]>([])

const DoctorContext = ({children}:{children:React.ReactNode}) => {

    const[mounted,setMounted]=useState(false)

    useEffect(()=>{
        setMounted(true)
    },[mounted])
  

    if(mounted){  
        return (
          <CreateDoctorContext.Provider value={doctors}>{children} </CreateDoctorContext.Provider>
        )
    }
}

export default DoctorContext