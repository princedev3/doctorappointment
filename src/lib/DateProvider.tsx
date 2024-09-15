"use client"
import React, { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const DateProvider = ({children}:{children:React.ReactNode}) => {
    const [mounted,setMounted] =useState(false)
    useEffect(()=>{
        setMounted(true)
    },[mounted])
    
    if(mounted){
        return (
             <LocalizationProvider dateAdapter={AdapterDayjs}>{children} </LocalizationProvider>
        )
    }
}

export default DateProvider