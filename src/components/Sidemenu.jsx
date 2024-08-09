import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 
import logo from "../../public/logo.png"
import { useNavigate } from 'react-router-dom';

function Sidemenu() {
    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const navigate = useNavigate();
    const Menus = [
        { title:"Revenue", src: "chart"},
        {
            title:"Shoppable Video", 
            src: "blankimg",
            dropdown:true,
            items:[
                {title: "Shoppable list"}
            ]
        },
        {
            title:"Story", 
            src: "blankimg",
            dropdown:true,
            items:[
                {title: "Other"}
            ]
        },
        {
            title:"Live Commerce",
            src: "blankimg",
            dropdown:true,
            items:[
                {title: "Other"}
            ]
        },
        { 
            title:"Playlist Manager", 
            src: "blankimg",
            dropdown:true,
            items:[
                {title: "Product Playlist"}
            ]
        },
        { title:"One Click Post", src: "blankclick"},
        { title:"Calender", src: "calender"},
        { title:"Hire Influencer", src: "setting"},
    ];
    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index); // Toggle dropdown
    };
    const handleclick = (itemclick) =>{
        if(itemclick === "Product Playlist"){
            navigate("/playlist")
        }
    }

    return (
        <>
            <div className="">
                <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-[#27272F] relative `}>
                    <img src="../src/assets/control.png" className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-3 border-[#27272F] ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                    <div className="gap-x-4 items-center ">
                        <img src={logo} className="cursor-pointer origin-left duration-300 w-32" />
                    </div>
                    <ul className={`pt-12 ${!open && "pt-20"}`}>
                        {Menus.map((menu, index) => (
                            <React.Fragment key={index}>
                                <li
                                    className="text-gray-300 text-base font-medium flex items-center gap-x-4 cursor-pointer p-3 hover:bg-light-white rounded-md"
                                    onClick={() => {
                                        if (menu.dropdown) {
                                            toggleDropdown(index);
                                        }
                                    }}
                                >
                                    <img className="w-9" src={`../src/assets/${menu.src}.png`} />
                                    <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                                    {menu.dropdown && open && (
                                        <span className="ml-auto">
                                        {dropdownOpen === index ? (
                                          <FiChevronUp />
                                        ) : (
                                          <FiChevronDown />
                                        )}
                                      </span>
                                    )}
                                </li>
                                {menu.dropdown && dropdownOpen === index && open && (
                                    <ul className="pl-12">
                                        {menu.items.map((items, ind) => (
                                            <li
                                                key={ind}
                                                className="text-gray-300 text-base font-medium flex items-center gap-x-4 cursor-pointer p-3 hover:bg-light-white rounded-md"
                                                onClick={() => handleclick(items.title)}
                                            >
                                                <span>{items.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default Sidemenu