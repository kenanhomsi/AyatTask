import React from "react"
import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"
import SideBarInSmallDevices from "../components/SideBarInSmallDevices"
import PopUpModal from "../components/PopUpModal"
import { closeChangePassword, closeLogOut } from "../redux/Slices/PopUpSlice"
import ChangePaswwordPopUp from "../components/ChangePaswwordPopUp"
import ChangePasswordInSmallDevices from "../components/ChangePasswordInSmallDevices"
import NavbarDropDownInSmallDevices from "../components/NavbarDropDownInSmallDevices"
import LogOutPopUp from "../components/LogOutPopUp"
import LogOutInSmallDevices from "../components/LogOutInSmallDevices"


const UserDashBoard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex  gap-2">
            <SideBar />
            <div className="flex flex-col w-full h-screen">
                <NavBar />
                {children}
            </div>
            <SideBarInSmallDevices />
            <NavbarDropDownInSmallDevices />
            <ChangePasswordInSmallDevices />
            <LogOutInSmallDevices />
            <PopUpModal
                title={<p className=" text-[#172A47] text-lg font-bold">Update Password</p>}
                type="ChangePassword"
                PopSize="xl"
                closeAction={closeChangePassword}
            >
                <ChangePaswwordPopUp />
            </PopUpModal>
            <PopUpModal
                title=""
                type="LogOut"
                PopSize="sm"
                closeAction={closeLogOut}
            >
                <LogOutPopUp />
            </PopUpModal>
        </div>
    )
}

export default UserDashBoard