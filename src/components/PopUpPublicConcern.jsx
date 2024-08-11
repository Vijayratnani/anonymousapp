import React, { useState } from 'react'
import { publicConcern } from '../constants'
import { buttonInfo } from '../constants'

const PopUpPublicConcern = ({key}) => {
    const [mobileDrawerOpen,SetmobileDrawerOpen]= useState(false);

    const toggleNavbar=()=>{
        SetmobileDrawerOpen(!mobileDrawerOpen);
        console.log("toggled!")
    }

  return (
    <div className='relative'>        
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

        <div class="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded z-50">
            {/* <p className='p-96 h-20 bg-black text-white'>this is fixed</p> */}
        <div>
            {publicConcern.map((info)=>(
                <div key={key} className='bg-customWhite opacity-95 mt-10 shadow-lg h-1/3 shadow-customGrey4 rounded-md py-5 px-3'>
                    <div className='flex justify-between '>
                        <div className='flex'>
                            <img src={info.icon1} alt="" srcSet="" />
                            <div className='text-lg'>
                                <h5>{info.title1}</h5>
                                <div>{info.date}</div>
                            </div>
                        </div>
                        <div className='flex items-center text-xl'>
                            {info.number}{info.voices}{info.icon2}
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h2 className='text-xl'>{info.title2}</h2>
                        <p className='text-ellipsis mt-2'>{info.text}</p>
                    </div>
                    <div className='flex justify-between mt-5'>
                        {buttonInfo.map((info,index)=>( 
                            // <button onClick={toggleNavbar} className="p-2">
                            //     {mobileDrawerOpen ?<X/>:<MenuIcon/>}
                            // </button>
                            <div key={index} onClick={toggleNavbar} className='border border-customGrey4 rounded-md py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                                <img src={info.icon} alt="" srcSet="" />
                                <span>{info.text}</span>
                            </div>

                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
  )
}
export default PopUpPublicConcern