import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useLocation } from "react-router-dom";

import {
    useTable,
    usePagination,
    TableInstance,
    Row,
} from 'react-table';
import { ProfileImage } from "../utils/functions";
interface GeneralTableProps<T> {
    data: T[];
    columns: {
        Header: string,
        accessor: string,
    }[];
}
const GeneralTable = <T extends object>({ data, columns }: GeneralTableProps<T>) => {
    const Title = useLocation().pathname.split('/')[1]
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        state: { pageIndex, pageSize },
        setPageSize,
        canPreviousPage,
        canNextPage,
        gotoPage,
        nextPage,
        previousPage,
        pageCount,
        pageOptions,
    }: TableInstance<T> = useTable<T>(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 },
        },
        usePagination
    );
    return (
        <div className="w-[90%] max-h-[75vh] overflow-y-auto   bg-white  rounded-2xl shadow-generalTableShadow ">
            <h6 className="block md:hidden py-4 pl-6  text-[17px] font-semibold text-[#1C252E]">{Title == '' ? 'Products' : Title}</h6>
            <table {...getTableProps()} className="w-full table-auto !p-2  border-b shadow-generalTableUnderShadow border-separate border-spacing-y-2">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="px-8 !py-3 text-start bg-[#F8FAFF]  text-[#657397] font-semibold text-sm"
                                    key={column.id}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}   >
                    {page.map((row: Row<T>) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className=" cursor-pointer group" key={row.id} >
                                {row.cells.map((cell, index) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className={`${index == 0 ? ' border border-r-0 rounded-l-2xl  ' : 'border border-l-0 rounded-r-2xl group-hover:underline'} px-8 py-4 text-[#172A47]  group-hover:!text-secondry  !border-[#ECF3FF]  group-hover:bg-[#E7FFFC]`}
                                        key={cell.id}
                                    >
                                        {
                                            cell.column.id == 'name' ? <p className="flex gap-1">
                                                {cell.value.text &&
                                                    <>
                                                        <img src={ProfileImage(cell.value.image)} alt={cell.value.image} className=" w-[30px] h-[30px] rounded-full" />
                                                        <span>{cell.value.text}</span>
                                                    </>
                                                }
                                            </p> : `# ${cell.value}`
                                        }
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="flex px-4 pb-3 text-[#212B36] justify-between items-center mt-3">
                <div className=" hidden md:block text-sm font-normal text-[#8F9BBA]">
                    {(pageIndex + 1) * pageSize - pageSize + 1} - {(pageIndex + 1) * pageSize} of {pageOptions.length * pageSize}
                </div>
                <div className=' flex gap-5'>
                    <div className='flex items-center  gap-8'>
                        <div className=" flex  items-center gap-2">
                            <p className=" hidden md:block">Rows per page</p>
                            <select
                                value={pageSize}
                                onChange={(e) => setPageSize(Number(e.target.value))}
                                className=" p-2 bg-white border border-[#D9E3F4]  rounded-md"
                            >
                                {[5, 10, 20, 30, 40, 50].map((size) => (
                                    <option key={size} value={size}>
                                        <p className="  hidden md:block">Show</p>
                                        <p>{size}</p>
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className=" md:block hidden">
                            Page{' '}
                            {pageIndex + 1} of {pageOptions.length}
                        </div>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <button
                            onClick={() => gotoPage(0)}
                            disabled={!canPreviousPage}
                            className=" p-2 bg-white border border-[#D9E3F4] hover:bg-gray-300 rounded-md"
                        >
                            <MdOutlineKeyboardDoubleArrowLeft />
                        </button>
                        <button
                            onClick={previousPage}
                            disabled={!canPreviousPage}
                            className=" p-2 bg-white border border-[#D9E3F4] hover:bg-gray-300 rounded-md"
                        >
                            <IoIosArrowBack />
                        </button>
                        <div className=" text-[10px] block md:hidden">
                            {pageIndex + 1} of {pageOptions.length}
                        </div>
                        <button
                            onClick={nextPage}
                            disabled={!canNextPage}
                            className=" p-2 bg-white border border-[#D9E3F4] hover:bg-gray-300 rounded-md"
                        >
                            <IoIosArrowBack className=" rotate-180" />
                        </button>
                        <button
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                            className=" p-2 bg-white border border-[#D9E3F4] hover:bg-gray-300 rounded-md"
                        >
                            <MdOutlineKeyboardDoubleArrowLeft className=" rotate-180" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GeneralTable;