import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Main = () => {
  return (
    <>
    <Navbar/>
    <div className="flex">
      <Sidebar className='position'/>
      <Dashboard/>
    </div>
    </>
  )
}

export default Main