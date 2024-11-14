import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../redux/Slices/PopUpSlice';
import { sidebarData } from '../utils/data';

const SideBarInSmallDevices = () => {
    const pathname = useLocation().pathname
    const SidBarState = useAppSelector((state) => state.popUp.SideBar)
    const dispatch = useDispatch();
    const handleSidbarClick = () => {
        dispatch(closeSideBar());
    }
    return (
        <>     {SidBarState &&
            <>
                <div className="absolute block md:hidden   w-full h-full bg-gray-100 z-10  opacity-85">
                </div>
                <div className="absolute block md:hidden   !transition-transform bottom-0 py-5 z-30 bg-white w-full rounded-t-3xl ">
                    <div className=" flex flex-col ">
                        {
                            sidebarData.map((ele) => (
                                <Link to={ele.path} onClick={handleSidbarClick} className={` flex items-center relative gap-4 pl-8 py-4  cursor-pointer ${pathname == ele.path ? 'text-secondry bg-[#E7FFFC]' : ' text-[#8F9BBA] bg-white'} `}>
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
            </>
        }
        </>

    )
}

export default SideBarInSmallDevices