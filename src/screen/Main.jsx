import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
// import ChartsOverviewDemo from './ChartsOverviewDemo'

const Main = () => {
  return (
    <>
    {/* <ChartsOverviewDemo/> */}
    <Navbar/>
    <div className="flex">
      <Sidebar/>
      <Dashboard/>
    </div>
    </>
  )
}

export default Main