import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { UpdateImageINputs } from "../../Types";

export const UpdateImageFunc = async (payload: UpdateImageINputs) => {
    try {
        const response = await axiosInstance.post('/Account/UpdateImage', payload,
            {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const useUpdateImage = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: UpdateImageFunc,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Profile"] });
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    });

    return mutation;
};