import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { ChangPasswordType } from "../Types";
import { closeChangePassword } from "../redux/Slices/PopUpSlice";
import { useUpdatePassword } from "../api/acounnt/useUpdatePassword";
const ChangePaswwordPopUp = () => {
    const dispatch = useDispatch()
    const { mutate, isSuccess, isError, error } = useUpdatePassword()
    const [showPassword, setShowPassword] = useState({
        old: false,
        New: false,
        Confirm: false,
    });
    const addNewProjectValidationSchema = () => {
        return Yup.object({
            OldPassword: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long").matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
            NewPassword: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long").matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
            ConfirmPassword: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long").matches(/[A-Z]/, 'Password must contain at least one uppercase letter').
                oneOf([Yup.ref('NewPassword')], 'Passwords must match')
        })
    };

    const initialValues = {
        OldPassword: '',
        NewPassword: '',
        ConfirmPassword: '',
    };
    const handleSubmit = (values: ChangPasswordType) => {
        console.log(values)
        mutate({
            newPassword: values.NewPassword,
            confirmPassword: values.ConfirmPassword,
            oldPassword: values.OldPassword,
        })
    };
    useEffect(() => {
        if (isSuccess) dispatch(closeChangePassword())
    }, [isSuccess])
    const handelCancel = () => {
        dispatch(closeChangePassword())
    }
    return (
        <div className=" w-full">
            <Formik
                initialValues={initialValues}
                validationSchema={addNewProjectValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-4 lg:w-full ">
                        <div className="relative w-full ">
                            <Field
                                type={showPassword.old ? "text" : "password"}
                                id="OldPassword"
                                name="OldPassword"
                                placeholder='OldPassword'
                                className="border w-full py-4 px-[14px] rounded-[50px] border-outline text-dark text-sm font-normal"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword({
                                    ...showPassword,
                                    old: !showPassword.old
                                })}
                                className=" absolute right-6 top-7 transform -translate-y-1/2"
                            >
                                {showPassword ? <VscEyeClosed /> : <VscEye />}
                            </button>
                            <ErrorMessage
                                name="OldPassword"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="relative w-full ">
                            <Field
                                type={showPassword.old ? "text" : "password"}
                                id="NewPassword"
                                name="NewPassword"
                                placeholder='NewPassword'
                                className="border w-full py-4 px-[14px] rounded-[50px] border-outline text-dark text-sm font-normal"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword({
                                    ...showPassword,
                                    New: !showPassword.New
                                })}
                                className=" absolute right-6 top-7 transform -translate-y-1/2"
                            >
                                {showPassword ? <VscEyeClosed /> : <VscEye />}
                            </button>
                            <ErrorMessage
                                name="NewPassword"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="relative w-full ">
                            <Field
                                type={showPassword.old ? "text" : "password"}
                                id="ConfirmPassword"
                                name="ConfirmPassword"
                                placeholder='ConfirmPassword'
                                className="border w-full py-4 px-[14px] rounded-[50px] border-outline text-dark text-sm font-normal"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword({
                                    ...showPassword,
                                    Confirm: !showPassword.Confirm
                                })}
                                className=" absolute right-6 top-7 transform -translate-y-1/2"
                            >
                                {showPassword ? <VscEyeClosed /> : <VscEye />}
                            </button>
                            <ErrorMessage
                                name="ConfirmPassword"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className=" flex gap-5 self-end">
                            <button
                                type="button"
                                onClick={handelCancel}
                                className="py-[11px]  font-bold px-[32px] bg-[#F4F8FF] text-[#657397] hover:border-[#657397] rounded-[50px] border  transition-colors"
                            >Cancel</button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="py-[11px]  font-bold px-[32px] bg-secondry text-white rounded-[50px] border hover:border-secondry hover:bg-white transition-colors hover:text-secondry"
                            >
                                {isSubmitting ? "Submitting..." : "Save"}
                            </button>
                        </div>
                        {
                            isError && <p className="text-red-500">{error.message}</p>
                        }
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ChangePaswwordPopUp