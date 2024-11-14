import { useAppSelector } from "../redux/store"
import LogOutPopUp from "./LogOutPopUp"

const LogOutInSmallDevices = () => {
    const LogOutState = useAppSelector((state) => state.popUp.LogOut)
    return (
        <>     {LogOutState &&
            <>
                <div className="absolute block md:hidden   w-full h-full  z-10  bg-slate-400 opacity-25">
                </div>
                <div className="absolute  block md:hidden  !transition-transform bottom-0 py-10 px-2 z-30 bg-white w-full rounded-t-3xl ">
                    <LogOutPopUp />
                </div>
            </>
        }
        </>
    )
}

export default LogOutInSmallDevices