import React from 'react'
import  { specialityData} from "../../public/assets"
import Image from 'next/image'
import Link from 'next/link'

const SpeciallityMenu = () => {
  return (
    <div id='appointment' className='flex items-center flex-col justify-center mt-10'>
        <h2 className="text-3xl font-medium">Find by Speciality</h2>
        <div className="mt-5">
            <p className="w-[60%] text-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempore modi aliquid ex quidem. Ea fugiat magni nesciunt nostrum ipsam!</p>
        </div>
 <div className="flex gap-10 md:gap-8 my-14 flex-wrap justify-center items-center">
    {
         specialityData.map((item,index)=>(
            <Link href={`/doctors/${item.speciality}`} key={index} className="flex flex-col gap-2 items-center justify-center">
                <Image src={item.image} alt='' width={70} height={70} className='object-cover'/>
                <p className="">{item.speciality} </p>
            </Link>
         ))
    }
 </div>
    </div>
  )
}

export default SpeciallityMenu