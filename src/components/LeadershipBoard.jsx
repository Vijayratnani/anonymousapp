import {leadsInfo} from "../constants/index.jsx"

const LeadershipBoard = () => {
  return (
    
    <div className="w-full position">
      {leadsInfo.map((lead,index)=>(
        <div key={index} className="flex items-center border-b border-neutral-400/80 
         p-5 hover:bg-neutral-200">
          <img src={lead.icon} type="img/png" className="w-10 h-10 rounded-full"/>
          <div className="ml-5">
            <h2 className="text-md bg-gradient-to-r from-neutral-500 to-neutral-800 text-transparent 
            bg-clip-text">{lead.title}</h2>
            <p className='text-sm'>{lead.text}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default LeadershipBoard;