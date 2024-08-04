// import React from 'react'
import {sidebarInfo} from "../constants/index.jsx"

const Sidebar = () => {
  return (
    <div className="w-1/4 shadow-lg shadow-blue-300">
      {sidebarInfo.map((info,index)=>(
        <div key={index} className="flex items-center shadow-lg border-b border-neutral-400/80 hover:border-neutral-700 p-5">
          <img src={info.icon} type="img/png" className="w-24 h-24"/>
          <div className="ml-5">
            <h2 className="text-xl bg-gradient-to-r from-blue-500 to-blue-950 text-transparent 
            bg-clip-text">{info.title}</h2>
            <p>{info.text}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar