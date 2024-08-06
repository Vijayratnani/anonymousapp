import {leadsInfo} from "../constants/index.jsx"

const LeadershipBoard = () => {
  return (
    
    <div className="w-full ">
      {leadsInfo.map((lead,index)=>(
        <div key={index} className="flex items-center border-b border-neutral-400/80 
         p-5 hover:bg-neutral-200">
          <img src={lead.icon} type="img/png" className="w-8 h-8 rounded-full"/>
          <div className="ml-5">
            <h2 className="text-sm text-black">{lead.title}</h2>
            <p className='text-xs text-customGrey'>{lead.text}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default LeadershipBoard;