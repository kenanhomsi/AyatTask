import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { LoginValues } from "../../Types";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

export const loginFunc = async (payload: LoginValues) => {
    try {
        const response = await axiosInstance.post('/Account/Login', payload);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mutation = useMutation({
        mutationFn: loginFunc,
        onSuccess: (data) => {
            dispatch(login({
                user: data.data,
            }))
            navigate('/');
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    });

    return mutation;
};