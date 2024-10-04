import React, { useState,useEffect } from 'react'
import { publicConcern } from '../constants'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import raise_voice from '../assets/raise_voice.png';
import read_story from '../assets/read_story.png';
import resources from '../assets/resources.png';
import girl_boy from '../assets/girl_boy.png';
import voices from '../assets/voices.png';

const PublicConcern = () => {
    const [storyPopUp,SetstoryPopUp]= useState(false);
    const [resousesPopUp,SetresousesPopUp]= useState(false);

    const showStory = (e) => {
        e.stopPropagation(); // Prevent backdrop click
        SetstoryPopUp(!storyPopUp);
        if (resousesPopUp) {
            SetresousesPopUp(false); // Close resources if open
        }
    };

    const showResourses = (e) => {
        e.stopPropagation(); // Prevent backdrop click
        SetresousesPopUp(!resousesPopUp);
        if (storyPopUp) {
            SetstoryPopUp(false); // Close story if open
        }
    };

    const resetPopups = () => {
        SetstoryPopUp(false);
        SetresousesPopUp(false); // Close both popups
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.popup-content')) {
                resetPopups();
            }
        };

        // Add event listener to detect clicks outside
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const options = [
        'DATE REPORTED', 'Lorem', 'ipsum'
      ];
      const defaultOption = options[0];

      const options2 = [
        'STUDENT AFFAIRS', 'Lorem', 'ipsum'
      ];
      const defaultOption2 = options2[0];
  return (
    <div className="sm:w-full relative ml-0 2xl:ml-96 pb-5 border-l border-neutral-400/80 hover:border-neutral-700">
        
        <div className="max-w-6xl mx-auto mt-10 px-6">
        <div className='ml-0'>
        {storyPopUp && (<>
            <div className='relative'>
            <div className="fixed text-ellipsis top-20 left-10 right-10 bottom-auto flex justify-center items-center z-50 px-4 sm:px-6 lg:px-8 popup-content">
                <div className="relative w-full max-w-4xl h-2/3 shadow-lg transform 
                    bg-customWhite2 p-6 rounded">
                <div className='flex justify-between '>
                    <div className='flex items-center'>
                        <img src={girl_boy} alt="" srcSet="" className='object-contain h-20 ' />
                        <div className='text-lg pl-5'>
                            <h5>STUDENT AFFAIRS</h5>
                            <div>June-18-2024</div>
                        </div>
                    </div>
                    <div className='flex items-center text-xl'>
                        <img src={voices} className='object-contain h-16 pr-2'/>265{" "}voices
                    </div>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl'>SOMEONE HAS CREATED CHOAS OUTSIDE THE UNIVERSITY</h2>
                    <p className='text-ellipsis mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing 
                        elit. Illo laudantium veniam, voluptas earum delectus itaque pariatur ab id deleniti 
                        placeat doloribus nihil veritatis cupiditate quisquam accusamus dolorum, eum, error 
                        culpa. Iusto dicta quis, minus cum architecto, fugiat assumenda, quisquam atque 
                        minima quaerat culpa. Illo distinctio aliquam provident dicta quia hic officia 
                        iusto! Dolore reprehenderit voluptas eligendi esse voluptatem repudiandae tempora 
                        nisi commodi facere possimus sit dolorem libero architecto quo delectus voluptatum, 
                        tenetur numquam placeat corporis doloribus eum necessitatibus modi. Ut corporis 
                        minima sequi animi neque, sapiente accusantium voluptas totam minus quos natus 
                        delectus reprehenderit quo id deleniti soluta facere autem, velit dolor esse dolore 
                        est vero eius? Magnam error voluptatum quaerat commodi ratione facere quibusdam 
                        voluptatem nemo, provident incidunt possimus dolorem pariatur eaque hic dignissimos 
                        nisi sint ex sequi molestiae amet voluptatibus, ea iusto! Quas, ab porro iusto 
                        incidunt sapiente optio vitae eos ullam, temporibus nostrum, maiores velit sequi 
                        laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eum 
                        quo maiores velit omnis, voluptates facilis blanditiis aliquam ipsum vero? Lorem 
                        ipsum dolor sit amet, consectetur adipisicing elit. Nobis doloremque itaque quidem 
                        nemo repudiandae obcaecati possimus distinctio quae ipsam illum ipsa aperiam 
                        doloribus eligendi, incidunt, alias blanditiis quis eveniet architecto.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsa saepe 
                        ut facilis harum ea unde modi natus, sint quis.
                        </p>
                </div>
                    <div className='flex justify-between mt-5'>
                        <button onClick={showResourses} className='border flex items-center bg-customVoilet text-customWhite3 border-customGrey5 py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                            <img src={resources} alt="" srcSet="" className='pr-2 w-8'/>
                            <span>Show Resouses</span>
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </div>
        <div className="fixed inset-0 bg-customBlack bg-opacity-55 backdrop-blur-sm z-40" onClick={resetPopups}></div>
    </div>
    </>
    )}
    {resousesPopUp && (<div className='relative'>
        <div>
            <div className="fixed inset-0 flex justify-center items-center z-50 px-4 sm:px-6 lg:px-8 popup-content">
                <div className="relative w-full max-w-4xl overflow-x-auto h-2/3 shadow-lg transform 
                    bg-customWhite2 p-6 rounded" onClick={(e) => e.stopPropagation()}
                    >
                <div className='flex justify-between '>
                    <div className='flex items-center'>
                        <img src={girl_boy} alt="" srcSet="" className='object-contain h-20'/>
                        <div className='text-lg'>
                            <h5>STUDENT AFFAIRS</h5>
                            <div>June-18-2024</div>
                        </div>
                    </div>
                    <div className='flex items-center text-xl'>
                        <img src={voices} className='object-contain h-16 pr-2'/>265{" "}voices
                    </div>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl'>RESOUSES IN FORM OF IMAGE</h2>
                    <img src='' className='text-ellipsis mt-2'/>
                </div>
                    <div className='flex justify-between mt-5'>
                        <button onClick={showStory} className='border flex items-center bg-customVoilet text-customWhite3 border-customGrey5 py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                            <img src={read_story} alt="" srcSet="" className='pr-2 w-10'/>
                            <span>SHOW STORY</span>
                        </button>
                    </div>
                </div>
        </div>
        </div>
        <div className="fixed inset-0 bg-customBlack bg-opacity-55 backdrop-blur-sm z-40" onClick={resetPopups}></div>
    </div>
    )}
        </div>
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
            <h5 className='flex items-center py-1 px-3 bg-customGrey2 rounded-lg'>CATEGORY SHOWING: 
                <Dropdown options={options2} value={defaultOption2} placeholder="Select an option"/>
                </h5>
                
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
                                <img src={girl_boy} alt="" srcSet="" className='object-contain h-20'/>
                                <div className='text-lg'>
                                    <h5>{info.title1}</h5>
                                    <div>{info.date}</div>
                                </div>
                            </div>
                            <div className='flex items-center text-xl'>
                                {info.number}{info.voices}<img src={voices} className='object-contain h-16 pr-2'/>
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
                            <button className='border flex items-center border-customGrey4 rounded-md py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                                <img src={raise_voice} alt='Vote img' className='pr-2 w-10'/>
                                <p>RAISE VOICE</p>
                            </button>
                            <button onClick={showStory} className='border flex items-center border-customGrey4 rounded-md py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                                <img src={read_story} alt='Vote img' className='pr-2 w-10'/>
                                <p>READ FULL STORY</p>
                            </button>
                            <button onClick={showResourses} className='border flex items-center border-customGrey4 rounded-md py-1 px-2 shadow-md shadow-customGrey3 drop-shadow-2xl'>
                                <img src={resources} alt='Vote img' className='pr-2 w-8'/>
                                <span>RESOURSES</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default PublicConcern