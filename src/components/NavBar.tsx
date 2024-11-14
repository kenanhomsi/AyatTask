import { Avatar, Dropdown, Navbar } from "flowbite-react"
import { useLocation, useNavigate } from "react-router-dom"
import { RiArrowUpSLine } from "react-icons/ri";
import flag from '/icons/Flags.png'
import { BiLogOut } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { OpenChangePassword, OpenLogOut, OpenNavBarDropDown, OpenSideBar } from "../redux/Slices/PopUpSlice";
import { useGetProfile } from "../api/acounnt/useGetProfile";
import { ProfileImage } from "../utils/functions";

const NavBar = () => {
    const { data } = useGetProfile();
    const Title = useLocation().pathname.split('/')[1]
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleOpenSideBar = () => {
        dispatch(OpenSideBar());
    }
    const handleProfileClick = () => {
        navigate('/Profile')
    }
    const handleChangePassClick = () => {
        dispatch(OpenChangePassword())
    }
    const handleLogOutClick = () => {
        dispatch(OpenLogOut())
    }
    const HandleDropDownClic = () => {
        dispatch(OpenNavBarDropDown())
    }
    return (
        <Navbar fluid rounded className="w-full !px-10 py-4 bg-white">
            <Navbar.Brand href="/" className=" text-xl md:block hidden font-bold text-[#172A47]">{Title == '' ? 'Products' : Title}</Navbar.Brand>
            <button onClick={handleOpenSideBar} className=" md:hidden block  text-3xl ">
                <RiMenu4Line />
            </button>
            <div className="flex items-center md:order-2">
                <p className="pr-3 mr-2 cursor-pointer border-r">
                    <img src={flag} alt={flag} className="w-[25px] h-[18px]" />
                </p>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <div className="flex gap-1 items-end" onClick={HandleDropDownClic}>
                            {
                                data?.data &&
                                <Avatar alt="User settings" img={ProfileImage(data?.data.image)} rounded />
                            }
                            <div className="  flex-col  md:flex hidden items-start">
                                <p className=" text-xs font-normal text-[#8F9BBA]">My Account</p>
                                <p className=" text-sm font-bold text-[#172A47]">{data?.data && data?.data.userName}</p>
                            </div>
                            <RiArrowUpSLine className=" rotate-180 mb-4" />
                        </div>
                    }
                    className=" self-end md:block hidden text-[#0E3B64] text-sm font-medium"
                >
                    <Dropdown.Item className=" flex gap-2" onClick={handleProfileClick} > <IoMdPerson /> Profile</Dropdown.Item>
                    <Dropdown.Item className=" flex gap-2" onClick={handleChangePassClick} ><RiLockPasswordLine /> Update Password</Dropdown.Item>
                    <Dropdown.Item className=" flex gap-2 text-[#FF2C2C]" onClick={handleLogOutClick} > <BiLogOut /> Logout</Dropdown.Item>
                </Dropdown>
            </div>
        </Navbar>
    )
}

export default NavBar