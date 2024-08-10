import React from 'react'
import { publicConcern } from '../constants'
const PublicConcern = () => {
  return (
    <div className="sm:w-full ml-0 2xl:ml-96 border-l border-neutral-400/80 hover:border-neutral-700">
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
                <h5 className='px-4 py-3 bg-neutral-300 rounded-lg'>CATEGORY SHOWING: STUDENT AFFAIRS</h5>
                <h5 className='px-4 py-3 bg-neutral-300 rounded-lg'>SORTED BY: DATE REPORTED</h5>
            </div>
            <div className='text-black'>
                {publicConcern.map((info,index)=>(
                    <div key={index}>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <img src={info.icon1} alt="" srcSet="" />
                                <div>
                                    <h5>{info.title1}</h5>
                                    <div>{info.date}</div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                {info.number}{info.voices}{info.icon2}
                            </div>
                        </div>
                        <div>
                            <h2>{info.title2}</h2>
                            <p className='text-ellipsis'>{info.text}</p>
                        </div>
                        <div className='flex'>
                            <div>
                                <img src={''} alt="" srcSet="" />
                                <span>RAISE VOICE</span>
                            </div>
                            <div>
                                <img src={''} alt="" srcSet="" />
                                <span>READ FULL STORY</span>
                            </div>
                            <div>
                                <img src={''} alt="" srcSet="" />
                                <span>RESOURSES</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PublicConcern