import { useEffect, useState } from "react";
import { useGetDrug } from "../api/useGetDrags";
import GeneralTable from "../components/GeneralTable";
export interface MedicineArrayType {
    id: number; name: { text: string; image: string; };
}
const Medicine = () => {
    const [MedicineArray, SetMedicineArray] = useState<MedicineArrayType[]>([])
    const MedicineColumns = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
    ]
    const { data, isLoading, isSuccess } = useGetDrug();
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
        SetMedicineArray(newArray!)
    }, [data, isSuccess])
    return (
        <div className=" bg-[#F4F5FA] flex rounded-tl-[20px] items-start pt-16 justify-center h-full">
            {
                isLoading && <h2>...loading</h2>
            }
            {
                data && !isLoading && MedicineArray &&
                <GeneralTable data={MedicineArray} columns={MedicineColumns} />
            }
        </div>
    )
}

export default Medicine