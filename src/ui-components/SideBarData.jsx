import React from "react";
import * as IoIcons from "react-icons/io";


export const SidebarData = [

{

    title: 'Beta',
    path: "",
    icon: <IoIcons.IoIosCloudUpload/>,
    cName: "nav-text"
},
{

    title: 'Beta',
    path: "",
    icon: <IoIcons.IoIosCloud/>,
    cName: "nav-text"
},
{

    title: 'Beta',
    path: "",
    icon: <IoIcons.IoIosCloudy/>,
    cName: "nav-text"
},
{

    title: '',
    path: "",
    icon: <></>
},
{

    title: 'Updates',
    path: "/Updates",
    icon: <IoIcons.IoIosPaper/>,
    cName: "nav-text"
},
/*{

    title: 'Profile',
    path: "/Profile",
    icon: <IoIcons.IoIosSettings/>,
    cName: "nav-text"
}, */
{

    title: 'Logout',
    path: "/Logout",
    icon: <IoIcons.IoMdExit/>,
    cName: "nav-text"
    
}
]

export default SidebarData
