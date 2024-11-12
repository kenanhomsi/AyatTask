import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { LoginValues } from "../../Types";

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
    const mutation = useMutation({
        mutationFn: loginFunc,
        onSuccess: (data) => {
            console.log('Login successful:', data);
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    });

    return mutation;
};