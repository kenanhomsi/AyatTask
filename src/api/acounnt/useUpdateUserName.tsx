import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { UpdateUserNameINputs } from "../../Types";

export const UpdateUserNameFunc = async (payload: UpdateUserNameINputs) => {
    try {
        const response = await axiosInstance.post('/Account/UpdateUserName', payload);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const useUpdateUserName = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: UpdateUserNameFunc,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Profile"] });
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    });

    return mutation;
};