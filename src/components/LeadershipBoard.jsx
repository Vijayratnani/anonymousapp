import {leadsInfo} from "../constants/index.jsx"

const LeadershipBoard = () => {
  return (
    <div className=" shadow-lg shadow-blue-300 w-full">
      {leadsInfo.map((lead,index)=>(
        <div key={index} className="flex items-center shadow-lg border-b border-neutral-400/80 
        hover:border-neutral-700 p-5 hover:bg-neutral-200">
          <img src={lead.icon} type="img/png" className="w-10 h-10 rounded-full"/>
          <div className="ml-5">
            <h2 className="text-md bg-gradient-to-r from-blue-500 to-blue-800 text-transparent 
            bg-clip-text">{lead.title}</h2>
            <p className='text-sm'>{lead.text}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default LeadershipBoard;