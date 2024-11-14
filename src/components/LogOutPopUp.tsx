import { useDispatch } from 'react-redux'
import LogOutIcon from '/icons/logOut.png'
import { closeLogOut } from '../redux/Slices/PopUpSlice';
import { logout } from '../redux/Slices/UserSlice';
const LogOutPopUp = () => {
    const dispatch = useDispatch();
    const handleCancelClick = () => {
        dispatch(closeLogOut())
    }
    const handleLogOutlClick = () => {
        dispatch(logout());
        dispatch(closeLogOut())
    }
    return (
        <div className=' flex flex-col gap-7'>
            <div className=" flex flex-col items-center justify-center">
                <img src={LogOutIcon} alt={LogOutIcon} className='w-[70px]  h-[70px]' />
                <h3 className='text-[#172A47]  font-semibold'>Logout</h3>
                <p className='text-[#8F9BBA] text-sm font-normal'>Are you sure want to Logout?</p>
            </div>
            <div className=" flex justify-evenly w-full">
                <button onClick={handleCancelClick} className=" px-8 py-[6px] rounded-full bg-[#F4F8FF] text-[#657397] text-sm font-semibold">Cancel</button>
                <button onClick={handleLogOutlClick} className=" px-8 py-[6px] rounded-full bg-[#FF2C2C] text-white text-sm font-semibold">Logout</button>
            </div>
        </div>
    )
}

export default LogOutPopUp