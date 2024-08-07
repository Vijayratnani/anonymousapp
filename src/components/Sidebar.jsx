// import React from 'react'
import {sidebarInfo} from "../constants/index.jsx"

const Sidebar = () => {
  return (
    <div className="w-96 fixed hidden 2xl:block sm:hidden">
      {sidebarInfo.map((info,index)=>(
        <div key={index} className="flex items-center border-b border-neutral-400/80 hover:border-neutral-700 p-4">
          <img src={info.icon} type="img/png" className="w-20 h-20"/>
          <div className="ml-5">
            <h2 className="text-xl text-customBlue">{info.title}</h2>
            <p>{info.text}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar