import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { ProfileData } from "../../Types";

export const getProfileFunc = async (): Promise<ProfileData> => {
    const response = await axiosInstance.get('/Account/Profile');
    return response.data;
};

export const useGetProfile = () => {
    const queryResult = useQuery<ProfileData, Error>({
        queryKey: ["Profile"],
        queryFn: getProfileFunc,
        staleTime: 60000,
        refetchOnWindowFocus: false,
    });

    return queryResult
};

