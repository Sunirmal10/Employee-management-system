import { FaBriefcase, FaUserTie, FaWarehouse } from "react-icons/fa";
import { GrDashboard } from "react-icons/gr";
import { IoMdHelp, IoMdSettings } from "react-icons/io";
import { MdOutlineAttachMoney, MdSpaceDashboard } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { TiUserAdd } from "react-icons/ti";



export const sidebarItems = [
    {
        id: 1,
        name: "Dashboard",
        icon: <MdSpaceDashboard />,
        color: "",
        path: "/"
    },
    {
        id: 2,
        name: "Employees",
        icon: <PiUserListFill />,
        color: "",
        path: "/employees"
    },
    {
        id: 3,
        name: "Add Employee",
        icon: <TiUserAdd />,
        color: "",
        path: "/addemployee"
    },
    // {
    //     id: 4,
    //     name: "Departments",
    //     icon: <FaWarehouse />,
    //     color: "",
    //     path: "/departments"
    // },
    {
        id: 5,
        name: "Help",
        icon: <IoMdHelp />,
        color: "",
        path: "#"
    },
]

export const dashBoardWidgets = [
    {
        id: 1,
        name: "Departments",
        icon: <FaWarehouse className='mb-0.5'/>,
        quantity: "5",
        color: "bg-sky-300"
    },
    {
        id: 1,
        name: "Employees",
        icon: <FaUserTie  className='mb-0.5'/>,
        quantity: "40",
        color: "bg-orange-300"
    },
    {
        id: 1,
        name: "Projects",
        icon: <FaBriefcase className='mb-0.5'/>,
        quantity: "10",
        color: "bg-yellow-300"
    },
    {
        id: 1,
        name: "Total Salary",
        icon: <MdOutlineAttachMoney className='mb-0.5'/>,
        quantity: "$ 50k",
        color: "bg-green-300"
    },
]