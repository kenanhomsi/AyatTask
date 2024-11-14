import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { DrugData } from "../Types";

export const getDrugFunc = async (): Promise<DrugData> => {
    const response = await axiosInstance.get('/Drug');
    return response.data;
};

export const useGetDrug = () => {
    const queryResult = useQuery<DrugData, Error>({
        queryKey: ["Drug"],
        queryFn: getDrugFunc,
        staleTime: 60000,
        refetchOnWindowFocus: false,
    });

    return queryResult
};

