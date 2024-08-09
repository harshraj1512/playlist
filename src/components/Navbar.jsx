import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiAtom } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <div className="min-w-fit container pr-4 pt-6">
        <div className="navbar bg-[#27272F] rounded-xl ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Design Studio</a>
          </div>
          <div className="flex-none gap-2">
            <button className="btn btn-ghost border-solid border-2 border-sky-500">
              <div className="indicator gap-2 items-center">
                <span className=" text-xl rounded-md text-sky-500">
                  <MdOutlineContactSupport />
                </span>
                <a>Support Request</a>
              </div>
            </button>
            <button className="btn btn-ghost border-solid border-2 border-sky-500">
              <div className="indicator gap-2 items-center">
                <span className="text-base rounded-md text-sky-500">
                  <BiAtom />
                </span>
                <a>Product Tour</a>
              </div>
            </button>
            <div className="form-control relative">
              <input
                type="text"
                placeholder="Search Project"
                className="input input-bordered w-24 md:w-auto"
              />
              <span className="absolute right-2 top-3 p-1 border-solid border border-slate-500 rounded-md text-gray-500">
                <FiSearch />
              </span>
            </div>
            <button className="btn btn-ghost btn-square border-solid border-2 border-sky-500">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs bg-slate-500 badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center btn btn-ghost avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
                <a className="text-lg font-medium ml-2 text-white">Leonardo C</a>
                <span className="text-base rounded-md text-white text-2xl">
                  <RiArrowDropDownLine />
                </span>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
