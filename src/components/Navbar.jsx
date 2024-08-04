import logo from "../assets/logo.png"
import notification from "../assets/notification.png"
import announcement from "../assets/announcement.png"
import vijay from "../assets/vijay.png"
// import { students } from "../constants/index"
import uit from "../assets/uit.png"


const Navbar = () =>{
    // const [mobileDrawerOpen,SetmobileDrawerOpen]= useState(false);

    // const toggleNavbar=()=>{
    //     SetmobileDrawerOpen(!mobileDrawerOpen);
    // }
    return (
        <>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 shadow-lg">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-14 w-14 mr-2" src={logo} alt="" srcset="" />
                        <span className="text-2xl tracking-tight">
                            ANONYMOUS APP
                        </span>
                    </div>
                    <img className="rounded-full h-16 w-16 m-2" src={uit} alt="" srcset="" />
                </div>
                <div className="flex items-center flex-shrink-0">
                    <div className="flex mx-3">
                        <img className="h-10 w-10 mr-2" src={notification} alt="" srcset="" />
                        <img className="h-10 w-10 mr-2" src={announcement} alt="" srcset="" />
                    </div>
                    <div className="mx-2">
                        <div>Vijay Kumar</div>
                        <div>21F-BSCS-30</div>
                    </div>
                    <img className=" rounded-full h-14 w-14 mr-2" src={vijay} alt="" srcset="" />
                </div>
                    {/* <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item,index)=>(
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        )
                        )}
                    </ul> */}
                    {/* <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                            Create an Account
                        </a>
                    </div> */}
                    {/* <div className="lg:hidden md:flex flex-col flex-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ?<X/>:<Menu/>}
                        </button>
                    </div> */}
            </div>
         </div>
        {/*{mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                    {navItems.map((item,index)=>(
                        <li key={index} className="py-4">
                        <a href={item.href}>{item.label}</a>
                        </li>
                    ))
                    }
                </ul>
                <div className="flex space-x-6">
                    <a href="#" className="py-2 px-3 rounded-md border">Sing In</a>
                    <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                    Create an Account
                    </a>
                </div>
            </div>
        )} */}
        </nav>
        </>
    );
};

export default Navbar;