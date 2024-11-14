import { Link, useLocation } from 'react-router-dom'
import { sidebarData } from '../utils/data'
import Logo from '/icons/logo.png'
const SideBar = () => {
    const pathname = useLocation().pathname
    return (
        <div className="w-[17rem] h-full md:flex hidden flex-col pr-2">
            <div className=" pl-8 my-10">
                <img src={Logo} alt={Logo} className=' ' />
            </div>
            <div className="flex flex-col gap-3">
                <p className=' text-xs font-semibold text-[#8F9BBA] pl-8'>Items</p>
                <div className=" flex flex-col ">
                    {
                        sidebarData.map((ele, index) => (
                            <Link to={ele.path} key={index} className={` flex items-center relative gap-4 pl-8 py-4  cursor-pointer ${pathname == ele.path ? 'text-secondry bg-[#E7FFFC]' : ' text-[#8F9BBA] bg-white'} `}>
                                {pathname == ele.path &&
                                    <span className=' absolute left-0 h-full w-1 rounded-r-full bg-secondry'></span>
                                }
                                <span className=' text-2xl'>{ele.icon}</span>
                                <span className=' text-sm font-bold'>{ele.name}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default SideBar