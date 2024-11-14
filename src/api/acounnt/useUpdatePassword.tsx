import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { UpdatePasswordINputs } from "../../Types";
export const UpdatePasswordFunc = async (payload: UpdatePasswordINputs) => {
    try {
        const response = await axiosInstance.post('/Account/UpdatePassword', payload);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
export const useUpdatePassword = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: UpdatePasswordFunc,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Profile"] });
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    });

    return mutation;
};