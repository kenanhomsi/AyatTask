import React from "react"

const UserDashBoard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="">Navbar</div>
            <div className="flex">
                <div className="">sideBar</div>
                {children}
            </div>
        </div>
    )
}

export default UserDashBoard