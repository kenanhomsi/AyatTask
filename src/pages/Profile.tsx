import { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { useGetProfile } from "../api/acounnt/useGetProfile";
import { ProfileImage } from "../utils/functions";
import { useUpdateImage } from "../api/acounnt/useUpdateImage";
import { useUpdateUserName } from "../api/acounnt/useUpdateUserName";

const Profile = () => {
    const [UserName, SetUserName] = useState('');
    const [ImageFile, SetImageFile] = useState<File>();
    const { data, isSuccess } = useGetProfile();
    const [ImageUrl, SetImageUrl] = useState('');
    const { mutate: MutateImage, error: uploadImageError } = useUpdateImage();
    const { mutate, error, isSuccess: UpdateUserSuccess, isPending } = useUpdateUserName();
    const filePickerRef = useRef<HTMLInputElement>(null);
    const handleIamgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            SetImageFile(file)
            SetImageUrl(URL.createObjectURL(file))
        }

    }
    const HandlSave = () => {
        mutate({
            userName: UserName
        })
        if (ImageFile) {
            MutateImage({
                File: ImageFile!
            })
        }


    }
    useEffect(() => {
        if (data?.data && isSuccess) {
            SetUserName(data.data.userName)
            if (data.data.image) SetImageUrl(ProfileImage(data.data.image))
        }
    }, [data, isSuccess])
    return (

        <div className=" bg-[rgb(244,245,250)] w-full flex rounded-tl-[20px] items-start md:pt-16 p-5 justify-center h-full">
            <div className=" md:w-[75%] w-full flex md:flex-row flex-col md:gap-10">
                <div className={`bg-white flex flex-col gap-3 items-center md:w-[12rem] w-full ${ImageUrl ? 'md:min-h-[11rem]' : 'md:h-[11rem]'}  md:rounded-2xl rounded-t-2xl py-4 px-6`}>
                    <input className=' hidden' type='file' accept='image/*' ref={filePickerRef} onChange={handleIamgeChange} />
                    {!ImageUrl && <div className="  cursor-pointer w-[9rem] h-[9rem] rounded-full  outline outline-[#75757533] border-[7px] border-white bg-[#E7FFFC] flex flex-col gap-1 items-center justify-center"
                        onClick={() => filePickerRef.current?.click()}
                    >
                        <FiUser className="text-[#4ADDCA] text-lg" />
                        <p className="text-[#4ADDCA] text-xs">Profile picture</p>
                        <p className=" text-[#8F9BBA] text-[10px] font-normal">jpeg ,jpg ,png ,gif</p>
                    </div>}
                    {
                        ImageUrl && <img src={ImageUrl} alt={ImageUrl} className=" w-[9rem] h-[9rem] rounded-full  " />
                    }
                    {
                        ImageUrl && <button onClick={() => filePickerRef.current?.click()} className=" bg-[#F4F5FA] flex gap-2 items-center  p-2 rounded-md  text-sm font-normal text-[#8F9BBA]"><CiEdit /> Edit</button>
                    }
                </div>
                <div className=" md:flex-1 w-full  flex flex-col md:gap-8 gap-3">
                    <div className=" w-full flex flex-col gap-5 p-6 md:rounded-2xl rounded-b-2xl bg-white ">
                        <p className=" text-[#172A47] text-xs  font-semibold">Your INFO</p>
                        <div className="flex flex-col ">
                            <label htmlFor="userName" className=" bg-white text-xs relative bottom-[-6px] w-fit left-5 font-normal text-[#637381]">Username</label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                value={UserName}
                                onChange={(e) => SetUserName(e.target.value)}
                                className="border py-4 px-[14px] rounded-[50px] border-outline text-dark text-sm font-normal"
                                placeholder="Username"
                            />
                        </div>
                    </div>
                    <button onClick={HandlSave} className=" self-end px-8 py-2 bg-[#4ADDCA] text-white text-sm font-bold md:w-fit w-full rounded-full">{isPending ? '...loading' : 'Save'}</button>
                    {error && <p className=" text-red-500">{error.message}</p>}
                    {uploadImageError && <p className=" text-red-500">{uploadImageError.message}</p>}
                    {UpdateUserSuccess && <p className=" text-green-500">Update Successed</p>}

                </div>
            </div>
        </div>
    )
}

export default Profile