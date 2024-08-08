import { stats } from '../constants'
import male from "../assets/male.jpg"
import female from "../assets/female.jpg"

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import PieChartComponent from './PieChartComponent';

import BarChartComponent from './BarChartComponent'

import LeadershipBoard from './LeadershipBoard'

const Dashboard = () => {
  return (
    
    <div className="sm:w-full ml-0 2xl:ml-96 border-l border-neutral-400/80 hover:border-neutral-700">
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <div className='flex sm: sm:mx-auto justify-between mb-2 pb-2 border-b border-neutral-500 '>
          <h5 className="text-xl lg:text-2xl tracking-wide ">
            WELCOME
            VIJAY KUMAR
          </h5>
            <h5 className="text-base lg:text-xl tracking-wide">
              DASHBOARD
            </h5>
        </div>
        <div>
          <h5 className='text-base lg:text-xl'>YOUR CONCERN STATS</h5>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-1">
            {stats.map((val,index)=>(
              <div key={index} className="flex items-center p-5 m-2 lg:m-5 sm:w-11/12 
              bg-customBlue bg-opacity-65">
                <img src={val.icon} type="img/png" className="w-12 sm:w-18 lg:w-24 xl:w-30 2xl:w-36 h-auto
                p-0 sm:p-1 lg:p-2 xl:p-4 2xl:p-6 bg-neutral-400 rounded-full"/>
                <div className="ml-5 text-neutral-50 pr-5">
                  <h2 className="sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl ">{val.number}</h2>
                  <p className='text-xs sm:text-smlg:text-base'>{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-10'>
          <h5 className='text-base lg:text-xl'>LEADERSHIP BOARD</h5>
          <p className='text-xs sm:text-sm lg:text-base'>WHICH DEPARTMENT HAVE BEST PERFORMANCE OVERALL</p>
          <div className='flex items-center flex-wrap'>
            <div className="p-2 w-full lg:w-fit xl:w-1/2">
            <LeadershipBoard/>
                
            </div>
            <div className="p-2 w-11/12 lg:w-1/2">

              <ThemeProvider theme={theme}>
                <CssBaseline />
                <PieChartComponent />
              </ThemeProvider>
            </div>
            {/* <div className="w-full p-2 lg:w-1/12">
                 Series Component Can be added 
            </div> */}
          </div>
        </div>
        <div className='mt-10'>
          <h5 className='text-base lg:text-xl'>PERFORMANCE MATRIC</h5>
          <p className='text-xs sm:text-sm lg:text-base'>NO OF PUBLIC CONCERNED REPORTED VS RESOLVED</p>
          <div className='flex items-center flex-wrap'>
            <div className="p-2 mt-2 h-fit w-11/12">
            <BarChartComponent/>
            </div>
          </div>
        </div>
        <div className='mt-10 mb-10'>
          <h5 className='text-base lg:text-xl'>GENDER RATIO</h5>
          <p className='text-xs sm:text-sm lg:text-base'>NO OF MALE AND FEMALE USING THIS APPLICATION</p>
          <div className='flex items-center justify-center flex-wrap h-4/5'>
            <div className="p-2 w-full lg:w-1/2 bg-cover bg-center h-1/3 ">
                <img src={male} type="img/jpg" alt="Code" className='h-full w-full border-none
                border-r lg:border-dashed border-neutral-500 '/>
                <p className='text-center m-5 mb-10'>12000 MALE STUDENT</p>
            </div>
            <div className="p-2 w-full h-full lg:w-1/2 bg-cover bg-center ">
                <img src={female} type="img/jpg" alt="Code" className='h-auto w-screen'/>
                <p className='text-center  m-5'>1000 FEMALE STUDENT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;