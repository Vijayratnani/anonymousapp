import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Main = () => {
  return (
    <><div className='text-customGrey'>
    <Navbar/>
    <div className="flex font-Julius">
      <Sidebar className='position'/>
      <Dashboard/>
    </div>
    </div>
    </>
  )
}

export default Main