import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { useLogin } from "../api/acounnt/useLogin";
import { LoginValues } from "../Types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/Slices/UserSlice";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const addNewProjectValidationSchema = () => {
        return Yup.object({
            userName: Yup.string()
                .required("userName is required")
                .min(3, "userName must be at least 3 characters long"),
            Password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters long")
                .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        })
    };

    const { mutate, isError, error, isSuccess, data } = useLogin();
    const initialValues = {
        userName: "",
        Password: ""
    };
    const handleSubmit = (values: LoginValues) => {
        mutate(values)
    };
    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            dispatch(login({
                user: data.data,
            }))
            navigate('/');
        }
    }, [isSuccess, data])
    return (
        <div className=" bg-white py-10 px-6 rounded-[30px]">
            <Formik
                initialValues={initialValues}
                validationSchema={addNewProjectValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-4 lg:w-[25rem] md:w-[21rem] w-[18rem]">
                        <div className="flex flex-col ">
                            <label htmlFor="userName" className=" bg-white text-xs relative bottom-[-6px] w-fit left-5 font-normal text-[#637381]">Username</label>
                            <Field
                                type="text"
                                id="userName"
                                name="userName"
                                className="border py-4 px-[14px] rounded-[50px] border-outline text-dark text-sm font-normal"
                                placeholder="Username"
                            />
                            <ErrorMessage
                                name="userName"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="relative w-full ">
                            <Field
                                type={showPassword ? "text" : "password"}
                                id="Password"
                                name="Password"
                                placeholder='Password'
                                className="border w-full py-4 px-[14px] rounded-[50px] border-outline text-dark text-sm font-normal"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className=" absolute right-6 top-7 transform -translate-y-1/2"
                            >
                                {showPassword ? <VscEyeClosed /> : <VscEye />}
                            </button>
                            <ErrorMessage
                                name="Password"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="py-[11px]  font-bold px-[32px] bg-secondry text-white rounded-[50px] border hover:border-secondry hover:bg-white transition-colors hover:text-secondry"
                        >
                            {isSubmitting ? "Submitting..." : "Login"}
                        </button>
                        {
                            isError && <p className="text-red-500">{error.message}</p>
                        }
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm