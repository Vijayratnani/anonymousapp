import { stats } from '../constants'
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// import { PieChart } from '@mui/x-charts/PieChart';

// import {ButtonUsage} from ''

// import React from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '../theme';
// // import ChartComponent from './components/ChartComponent';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import PieChartComponent from './PieChartComponent';

// import {PieChartComponent} from './PieChartComponent'

import BarChartComponent from './BarChartComponent'


import LeadershipBoard from './LeadershipBoard'

const Dashboard = () => {
  return (
    
    <div className="w-3/4 border-l border-neutral-400/80 hover:border-neutral-700">
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <div className='flex justify-between mb-2 pb-2 border-b border-neutral-500 '>
          <h5 className="text-xl  tracking-wide">
            WELCOME
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              {" "}VIJAY KUMAR
            </span>
          </h5>
            <h5 className="text-xl  tracking-wide">
              DASHBOARD
            </h5>
        </div>
        <div>
          <h5>YOUR CONCERN STATS</h5>
          <div className="flex ">
            {stats.map((val,index)=>(
              <div key={index} className="flex items-center w-1/3 p-5 m-5
              bg-gradient-to-r from-blue-400 to-blue-600">
                <img src={val.icon} type="img/png" className="w-24 h-auto bg-neutral-400 rounded-full"/>
                <div className="ml-5 bg-gradient-to-l from-neutral-100 to-blue-950 text-transparent 
                bg-clip-text">
                  <h2 className="text-xl ">{val.number}</h2>
                  <p>{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className='text-xl'>LEADERSHIP BOARD</h5>
          <p>WHICH DEPARTMENT HAVE BEST PERFORMANCE OVERALL</p>
          <div className='flex items-center flex-wrap'>
            <div className="p-2 w-full lg:w-1/2">
            <LeadershipBoard/>
                
            </div>
            <div className="p-2 w-full lg:w-1/2">

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
        <div>
          <h5 className='text-xl'>PERFORMANCE MATRIC</h5>
          <p>NO OF PUBLIC CONCERNED REPORTED VS RESOLVED</p>
          <div className='flex items-center flex-wrap'>
            <div className="p-2 w-full">
            <BarChartComponent/>
            </div>
          </div>
        </div>
        <div>
          <h5 className='text-xl'>GENDER RATIO</h5>
          <p>NO OF MALE AND FEMALE USING THIS APPLICATION</p>
          <div className='flex items-center justify-center flex-wrap'>
            <div className="p-2 w-full lg:w-1/2 border-r border-dashed border-neutral-500">
                <img src={boy} type="img/jpg" alt="Code" className=''/>
                <p className='text-center'>12000 MALE STUDENT</p>
            </div>
            <div className="p-2 w-full lg:w-1/2">
                <img src={girl} type="img/jpg" alt="Code" />
                <p className='text-center'>1000 FEMALE STUDENT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;