import LoginForm from '../components/LoginForm'
import loginLogo from '/images/LoginImage.png'
import SideImage from '/images/loginSideImage.png'
import flag from '/icons/Flags.png'

const Login = () => {
    return (
        <div className=" bg-white h-screen  md:p-12 p-3" >
            <div className=" relative h-full  bg-Login-backgroundImage bg-cover bg-center rounded-[40px] flex md:flex-row md:gap-40  flex-col  gap-10 items-center   justify-center">
                <div className="flex flex-col gap-4 items-center">
                    <img src={loginLogo} alt={loginLogo} className=' md:w-[16.4rem]  md:h-[15.6rem] w-[11rem] h-[8rem]' />
                    <h2 className=' font-bold text-[32px] text-Primary md:block hidden'>Hi, Welcome back  ...</h2>
                </div>
                <LoginForm />
                <button className='bg-white w-fit p-2 flex items-center gap-2 absolute top-5 md:left-5 right-5 rounded-full'>
                    <img src={flag} alt={flag} />
                    <span>العربية</span>
                </button>
                <img src={SideImage} alt={SideImage} className=' absolute top-0 right-0' />
                <img src={SideImage} alt={SideImage} className='absolute bottom-0 rotate-180 left-0' />
            </div>
        </div>
    )
}

export default Login