import {leadsInfo} from "../constants/index.jsx"

const LeadershipBoard = () => {
  return (
    
    <div className="w-full sm:w-11/12">
      {leadsInfo.map((lead,index)=>(
        <div key={index} className="flex items-center border-b border-neutral-400/80 
         p-5 hover:bg-neutral-200">
          <img src={lead.icon} type="img/png" className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"/>
          <div className="ml-5">
            <h2 className="text-xs lg:text-sm text-black font-semibold">{lead.title}</h2>
            <p className='font-thin lg:font-normal text-xs text-customGrey'>{lead.text}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default LeadershipBoard;