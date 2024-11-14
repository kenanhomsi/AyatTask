import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { ProductsData } from "../Types";

export const getProductsFunc = async (): Promise<ProductsData> => {
    const response = await axiosInstance.get('/Product');
    return response.data;
};

export const useGetProducts = () => {
    const queryResult = useQuery<ProductsData, Error>({
        queryKey: ["Products"],
        queryFn: getProductsFunc,
        staleTime: 60000,
        refetchOnWindowFocus: false,
    });

    return queryResult
};

