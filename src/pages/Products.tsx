import { useEffect, useState } from "react";
import { useGetProducts } from "../api/useGetProduct";
import GeneralTable from "../components/GeneralTable"
import { MedicineArrayType } from "./Medicine";

const Products = () => {
    const [ProductsArray, SetProductsArray] = useState<MedicineArrayType[]>([])

    const ProductsColumns = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
    ]
    const { data, isLoading, isSuccess } = useGetProducts();
    useEffect(() => {
        const newArray = data?.data.map((ele) => {
            return {
                id: ele.id,
                name: {
                    text: ele.name,
                    image: ele.image
                }
            }
        })
        SetProductsArray(newArray!)
    }, [data, isSuccess])
    return (
        <div className=" bg-[#F4F5FA] flex rounded-tl-[20px] items-start pt-16 justify-center h-full">
            {
                isLoading && <p>...loading</p>
            }
            {
                data && !isLoading && ProductsArray &&
                <GeneralTable data={ProductsArray} columns={ProductsColumns} />
            }
        </div>
    )
}

export default Products