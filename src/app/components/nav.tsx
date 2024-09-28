"use client";
import { sign } from "crypto";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Nav() {
  const [isMenuopen, setMenuopen] = useState(false);

  function toggle() {
    setMenuopen(!isMenuopen);
  }
  
  useEffect(() => {
    const sidebar = document.querySelector(".nav1") as HTMLElement;

    if(sidebar){
      if(isMenuopen){
        sidebar.style.display = "block";
      }
      else{
      sidebar.style.display = "none"
      }
    }
   


  }, [isMenuopen]);

  return (
    <div>
      <div className="max-h-full fixed top-0 w-full z-10 opacity-90 flex justify-between flex-wrap p-4 pr-11  font-bold items-center bg-gray-700 text-white text-xl sm:h-14 ">
        <h1 className="text-center text-pink-500 sm:text-[27px] text-[20px] pl-2">
          Portfolio
        </h1>

        {/* nav1 */}
        <div className=" nav1 hidden  bg-gray-900 h-[100px] text-center absolute right-0 w-[100%] top-[60px] ">
          <ul className=" gap-8 text-[15px] sm:text-xl sm:gap-12 ">
            <Link href={"/"} className="logo duration-150 ease-linear ">
              <li>Home</li>
            </Link>
            <Link href={"/about"} className="logo duration-150 ease-linear">
              <li>About</li>
            </Link>
            <Link href={"/contact"} className="logo duration-150 ease-linear">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        {/* nav 2 */}
        <ul className="nav2 flex justify-between gap-8 text-[15px] sm:text-xl sm:gap-12 ">
          <Link href={"/"} className="logo duration-150 ease-linear">
            <li>Home</li>
          </Link>
          <Link href={"/about"} className="logo duration-150 ease-linear">
            <li>About</li>
          </Link>
          <Link href={"/contact"} className="logo duration-150 ease-linear">
            <li>Contact</li>
          </Link>
        </ul>
        {/* menu icon */}
        <li
          onClick={toggle}
          id="menu-icon"
          className="hidden text-3xl font-bold absolute top-5 right-4"
        >
          <CiMenuFries />
        </li>
      </div>
    </div>
  );
}
