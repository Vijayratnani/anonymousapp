import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import { Routes,Route } from 'react-router-dom'
import PublicConcern from '../components/PublicConcern'
// import { Route } from '@mui/icons-material'

const Main = () => {
  return (
    <><div className='text-customGrey'>
    <Navbar/>
    <div className="flex ">
      <Sidebar className='position'/>
      <Routes>
      {/* <Dashboard/> */}
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/public_voice" element={<PublicConcern/>}/>
      </Routes>
    </div>
    </div>
    </>
  )
}

export default Main