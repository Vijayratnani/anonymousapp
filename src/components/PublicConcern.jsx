import React, { useState } from 'react'
import { publicConcern } from '../constants'
import { buttonInfo } from '../constants'
import PopUpPublicConcern from './PopUpPublicConcern'

const PublicConcern = () => {
    const [mobileDrawerOpen,SetmobileDrawerOpen]= useState(false);

    const toggleNavbar=()=>{
        SetmobileDrawerOpen(!mobileDrawerOpen);
        console.log("toggled!")
    }
  return (
    <div className="sm:w-full relative ml-0 2xl:ml-96 pb-5 border-l border-neutral-400/80 hover:border-neutral-700">
        <div className="max-w-6xl mx-auto mt-10 px-6">
            <div className='flex sm: sm:mx-auto justify-between mb-2 pb-2 border-b border-neutral-500 '>
                <h5 className="text-xl lg:text-2xl tracking-wide ">
                    WELCOME
                    VIJAY KUMAR
                </h5>
                <h5 className="text-base lg:text-xl tracking-wide">
                    PUBLIC VOICES
                </h5>
            </div>
            <div className='flex justify-between text-black'>
                <h5 className='px-4 py-3 bg-customGrey2 rounded-lg'>CATEGORY SHOWING: STUDENT AFFAIRS</h5>
                <h5 className='px-4 py-3 bg-customGrey2 rounded-lg'>SORTED BY: DATE REPORTED</h5>
            </div>
            <div className='text-black'>
                {publicConcern.map((info,index)=>(
                    <div key={index} className='bg-customWhite opacity-95 mt-10 shadow-lg h-1/3 shadow-customGrey4 rounded-md py-5 px-3'>
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
                                <button key={index} onClick={toggleNavbar} className='border border-customGrey4 rounded-md py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                                    <img src={info.icon} alt="" srcSet="" />
                                    <span>{info.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='h-screen'>
        {mobileDrawerOpen && (<PopUpPublicConcern key='index'/>)}
        </div>
    </div>
  )
}

export default PublicConcern