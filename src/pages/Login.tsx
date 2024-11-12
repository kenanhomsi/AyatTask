import LoginForm from '../components/LoginForm'
import loginLogo from '/images/LoginImage.png'
const Login = () => {
    return (
        <div className=" bg-white h-screen p-12">
            <div className="h-full  bg-Login-backgroundImage bg-cover bg-center rounded-[40px] flex items-center gap-40   justify-center">
                <div className="flex flex-col gap-4 items-center">
                    <img src={loginLogo} alt={loginLogo} className=' w-[16.4rem] h-[15.6rem]' />
                    <h2 className=' font-bold text-[32px] text-Primary'>Hi, Welcome back  ...</h2>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login