import React, { useState } from 'react'
// import { publicConcern } from '../constants'
// import { buttonInfo } from '../constants'

const PopUpPublicConcern = ({key}) => {
    const [mobileDrawerOpen,SetmobileDrawerOpen]= useState(false);

    const toggleNavbar=()=>{
        SetmobileDrawerOpen(!mobileDrawerOpen);
        console.log("toggled!")
    }

  return (
    <div className='relative ml-0 mt-0'>        
       

        <div class="absolute transform -translate-x-60 -translate-y-0 bg-customWhite2 p-6 rounded z-50">
            <div>
            {/* WILL IMPLIMENT IT LATER */}
            {/* {publicConcern.map((info)=>(
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
                            <div key={index} onClick={toggleNavbar} className='border border-customGrey4 rounded-md py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                                <img src={info.icon} alt="" srcSet="" />
                                <span>{info.text}</span>
                            </div>

                        ))}
                    </div>
                </div>
                ))} */}


            {/* <div  className='bg-customWhite opacity-95 mt-10 shadow-lg h-1/3 shadow-customGrey4 rounded-md py-5 px-3'> */}
                <div className='flex justify-between '>
                    <div className='flex'>
                        <img src={""} alt="" srcSet="" />
                        <div className='text-lg'>
                            <h5>STUDENT AFFAIRS</h5>
                            <div>June-18-2024</div>
                        </div>
                    </div>
                    <div className='flex items-center text-xl'>
                       265voices<img src={""}/>
                    </div>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl'>RESOUSES IN FORM OF IMAGE</h2>
                    <img src='' className='text-ellipsis mt-2'/>
                </div>
                    <div className='flex justify-between mt-5'>
                        <button onClick={showResourses} className='border bg-customVoilet text-customWhite3 border-customGrey5 py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                            <img src={""} alt="" srcSet="" />
                            <span>Show Resouses</span>
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </div>
        <div className="fixed inset-0 bg-customBlack bg-opacity-55 backdrop-blur-sm z-40"></div>
    </div>
  )
}
export default PopUpPublicConcern