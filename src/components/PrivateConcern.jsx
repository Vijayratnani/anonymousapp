import React, { useState } from 'react'
import { publicConcern } from '../constants'
// import Dropdown from './Dropdown';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const PrivateConcern = () => {
    const [storyPopUp,SetstoryPopUp]= useState(false);
    const [resousesPopUp,SetresousesPopUp]= useState(false);

    const showStory=()=>{
        SetstoryPopUp(!storyPopUp);
        if(resousesPopUp){
            SetresousesPopUp(!resousesPopUp);
        }
    }

    const showResourses=()=>{
        SetresousesPopUp(!resousesPopUp);
        if(storyPopUp){
            SetstoryPopUp(!storyPopUp);
        }
    }

    const options = [
        'DATE REPORTED', 'Lorem', 'ipsum'
      ];
      const defaultOption = options[0];
      
  return (
    <div className="sm:w-full relative ml-0 2xl:ml-96 pb-5 border-l border-neutral-400/80 hover:border-neutral-700">
        
        <div className="max-w-6xl mx-auto mt-10 px-6">
        <div className='ml-0'>
        
        {storyPopUp && (<>
            <div className='relative ml-0 mt-0'>        
                <div className="fixed overflow-x-auto h-dvh inset-0 flex items-center justify-centertransform shadow-lg max-w-md mx-auto transform  bg-customWhite2 p-6 rounded z-50">
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

                <div className='flex justify-between '>
                    <div className='flex'>
                        <img src={""} alt="" srcSet="" />
                        <div className='text-lg'>
                            <h5>STUDENT AFFAIRS</h5>
                            <div>June-18-2024</div>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl'>SOMEONE HAS CREATED CHOAS OUTSIDE THE UNIVERSITY</h2>
                    <p className='text-ellipsis mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium veniam, voluptas earum delectus itaque pariatur ab id deleniti placeat doloribus nihil veritatis cupiditate quisquam accusamus dolorum, eum, error culpa. Iusto dicta quis, minus cum architecto, fugiat assumenda, quisquam atque minima quaerat culpa. Illo distinctio aliquam provident dicta quia hic officia iusto! Dolore reprehenderit voluptas eligendi esse voluptatem repudiandae tempora nisi commodi facere possimus sit dolorem libero architecto quo delectus voluptatum, tenetur numquam placeat corporis doloribus eum necessitatibus modi. Ut corporis minima sequi animi neque, sapiente accusantium voluptas totam minus quos natus delectus reprehenderit quo id deleniti soluta facere autem, velit dolor esse dolore est vero eius? Magnam error voluptatum quaerat commodi ratione facere quibusdam voluptatem nemo, provident incidunt possimus dolorem pariatur eaque hic dignissimos nisi sint ex sequi molestiae amet voluptatibus, ea iusto! Quas, ab porro iusto incidunt sapiente optio vitae eos ullam, temporibus nostrum, maiores velit sequi laborum.</p>
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
        <div className="fixed inset-0 bg-customBlack bg-opacity-55 backdrop-blur-sm z-40" onClick={showStory}></div>
    </div>
    </>
    )}
    {resousesPopUp && (<div className='relative ml-0 mt-0'>
        <div className="fixed transform -translate-x-60 -translate-y-0 bg-customWhite2 p-6 rounded z-50">
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
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl'>RESOUSES IN FORM OF IMAGE</h2>
                    <img src='' className='text-ellipsis mt-2'/>
                </div>
                    <div className='flex justify-between mt-5'>
                        <button onClick={showStory} className='border bg-customVoilet text-customWhite3 border-customGrey5 py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                            <img src={""} alt="" srcSet="" />
                            <span>SHOW STORY</span>
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </div>
        <div className="fixed inset-0 bg-customBlack bg-opacity-55 backdrop-blur-sm z-40" onClick={showResourses}></div>
    </div>
    )}
        </div>
            <div className='flex sm: sm:mx-auto justify-between mb-2 pb-2 border-b border-neutral-500 '>
                <h5 className="text-xl lg:text-2xl tracking-wide ">
                    WELCOME
                    VIJAY KUMAR
                </h5>
                <h5 className="text-base lg:text-xl tracking-wide">
                    PRIVATE CONCERN
                </h5>
            </div>
            <div className='flex justify-between text-black'>
                <h5 className='flex items-center py-1 px-3 bg-customGrey2 rounded-lg'>SORTED BY: <span>
                <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
                </span>
                </h5>
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
                        </div>
                        <div className='mt-3  text-ellipsis '>
                            <h2 className='text-xl'>{info.title2}</h2>
                            <p className='whitespace-normal overflow-hidden
                            mt-2 w-11/12 h-12 line-clamp-2'>
                                {info.text}
                            </p>
                        </div>
                        <div className='flex justify-between mt-5'>
                            <button onClick={showStory} className='border border-customGrey4 rounded-md py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                                <img src='' alt='Journey img'/>
                                <p>JOURNEY</p>
                            </button>
                            <button onClick={showStory} className='border border-customGrey4 rounded-md py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                                <img src='' alt='Vote img'/>
                                <p>READ FULL STORY</p>
                            </button>
                            <button onClick={showResourses} className='border flex border-customGrey4 rounded-md py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                                <img src='' alt='Vote img'/>
                                <span>RESOUSES</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default PrivateConcern