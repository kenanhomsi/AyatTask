import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import { BiLogOut } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { closeNavBarDropDown, OpenChangePassword, OpenLogOut } from "../redux/Slices/PopUpSlice";
const NavbarDropDownInSmallDevices = () => {
    const NavBarDropDown = useAppSelector((state) => state.popUp.NavBarDropDown)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleProfileClick = () => {
        navigate('/Profile')
        dispatch(closeNavBarDropDown())
    }
    const handleChangePassClick = () => {
        dispatch(OpenChangePassword())
        dispatch(closeNavBarDropDown())
    }
    const handleLogOutClick = () => {
        dispatch(OpenLogOut())
        dispatch(closeNavBarDropDown())
    }
    return (
        <>     {NavBarDropDown &&
            <>
                <div className="absolute  w-full h-full  block md:hidden bg-gray-100 z-10  opacity-85">
                </div>
                <div className="absolute  block md:hidden  !transition-transform bottom-0 py-5 z-30 bg-white w-full rounded-t-3xl ">
                    <div className="text-[#0E3B64] text-base font-medium px-12 flex flex-col gap-8">
                        <div className=" flex items-center gap-2" onClick={handleProfileClick} > <IoMdPerson /> Profile</div>
                        <div className=" flex items-center gap-2" onClick={handleChangePassClick} ><RiLockPasswordLine /> Update Password</div>
                        <div className=" flex items-center gap-2 text-[#FF2C2C]" onClick={handleLogOutClick} > <BiLogOut /> Logout</div>
                    </div>
                </div>
            </>
        }
        </>
    )
}

export default NavbarDropDownInSmallDevices