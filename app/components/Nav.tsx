"use client";

import Link from "next/link";
import {  Card, Menu, MenuItem } from '@mui/material';
import { useState } from "react";

import { EyeIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";



export default function Nav() {

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <nav className="w-full mr-[50px]">
      <ul className="flex  justify-around items-center p-6 gap-3">

      <Link
          href="/" className="flex items-center  font-medium text-purple-500"
        >
          <EyeIcon className="text-purple h-6 w-6"></EyeIcon><span className="text-xl">S</span>copious
        </Link>


        <button className="flex items-center 
            self-start rounded-lg bg-purple-300  px-3 py-1
            text-purple-500 text-sm 
             hover:bg-purple-500 hover:text-white"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Personality
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Menu className="z-10"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
        
          <MenuItem onClick={handleClose} className="overflow-scroll ">
            <div className="flex flex-col overflow-visible">
              <Card className="p-4">
                <p className="font-bold ">Analysts</p>
                <p className="text-sm md:text-lg">Intuitive (N) and Thinking (T) personality types,known for their
                  rationality,impartiality, and intellectual excellence.
                </p>
                <div className="grid grid-cols-8 md:grid-cols-12  gap-3 mt-4 overflow-visible ">
                  <div onClick={()=>{router.push(`/personality/INTJ`)}} className="p-3 text-sm md:text-lg md:col-span-3 flex flex-col 
                  justify-center items-center bg-purple-400 border-sm rounded-md hover:bg-purple-200">
                    Architect<br />
                    <span className="text-sm ">INTJ</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/INTP`)}} className="p-3 text-sm md:text-lg md:col-span-3 flex flex-col 
                  justify-center items-center  bg-purple-400 border-sm rounded-md hover:bg-purple-200">
                    Logician<br />
                    <span className="text-sm">INTP</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ENTJ`)}} className="p-3  text-sm md:text-lg md:col-span-3 flex flex-col
                   justify-center items-center bg-purple-400 border-sm rounded-md hover:bg-purple-200">
                    Commander<br />
                    <span className="text-sm">ENTJ</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ENTP`)}} className="p-3 text-sm md:text-lg md:col-span-3  flex flex-col ju
                  stify-center items-center bg-purple-400 border-sm rounded-md hover:bg-purple-200">
                    Debater<br />
                    <span className="text-sm">ENTP</span>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <p className="font-bold ">Diplomats</p>
                <p className="text-sm md:text-lg">Intuitive (N) and Feeling (F) personality types,known for their
                  empathy,diplomatic skills and passionate idealism.
                </p>
                <div className="grid grid-cols-8 md:grid-cols-12 gap-3 mt-4">
                  <div onClick={()=>{router.push(`/personality/INFJ`)}} className="p-3 text-sm md:text-lg  md:col-span-3 flex flex-col
                   justify-center items-center bg-green-600 border-sm rounded-md hover:bg-green-200">
                    Advocate<br />
                    <span className="text-sm">INFJ</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/INFP`)}} className="p-3 text-sm md:text-lg md:col-span-3 flex flex-col
                   justify-center items-center bg-green-600 border-sm rounded-md hover:bg-green-200">
                    Mediator<br />
                    <span className="text-sm">INFP</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ENFJ`)}} className="p-3 text-sm md:text-lg md:col-span-3 flex flex-col
                   justify-center items-center bg-green-600 border-sm rounded-md hover:bg-green-200">
                    Protagonist<br />
                    <span className="text-sm">ENFJ</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ENFP`)}} className="p-3 text-sm md:text-lg md:col-span-3  flex flex-col
                   justify-center items-center bg-green-600 border-sm rounded-md hover:bg-green-200">
                    Campaigner<br />
                    <span className="text-sm">ENFP</span>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <p className="font-bold ">Sentinels</p>
                <p className="text-sm md:text-lg">Observant (S) and Judging (J) personality types,known for their
                  practicality and focus on order,security and stability.
                </p>
                <div className="grid grid-cols-8 md:grid-cols-12 gap-3 mt-4">
                  <div onClick={()=>{router.push(`/personality/ISTJ`)}} className="p-3 text-sm md:text-lg md:col-span-3 flex flex-col 
                  justify-center items-center bg-blue-400 border-sm rounded-md hover:bg-blue-200">
                    Logistician<br />
                    <span className="text-sm">ISTJ</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ISFJ`)}} className="p-3 text-sm md:text-lg md:col-span-3 flex flex-col
                   justify-center items-center  bg-blue-400 border-sm rounded-md hover:bg-blue-200">
                    Defender<br />
                    <span className="text-sm">ISFJ</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ESTJ`)}} className="p-3 text-sm md:text-lg md:col-span-3 flex flex-col 
                  justify-center items-center bg-blue-400 border-sm rounded-md hover:bg-blue-200">
                    Executive<br />
                    <span className="text-sm">ESTJ</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ESFJ`)}} className="p-3 text-sm md:text-lg md:col-span-3  flex flex-col
                   justify-center items-center bg-blue-400 border-sm rounded-md hover:bg-blue-200">
                    Consul<br />
                    <span className="text-sm">ESFJ</span>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <p className="font-bold ">Explorers</p>
                <p className="text-sm md:text-lg">Observant (S) and Prospecting (P) personality types,known for their
                  spontaneity, ingenuity, and flexbility.
                </p>
                <div className="grid grid-cols-8 md:grid-cols-12 gap-3 mt-4">
                  <div onClick={()=>{router.push(`/personality/ISTP`)}} className="p-3 text-sm md:text-lg md:col-span-3 flex flex-col
                   justify-center items-center bg-yellow-400 border-sm rounded-md hover:bg-yellow-200">
                    Virtuoso<br />
                    <span className="text-sm">ISTP</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ISFP`)}} className="p-3 text-sm md:text-lg md:col-span-3 flex flex-col 
                  justify-center items-center  bg-yellow-400 border-sm rounded-md hover:bg-yellow-200">
                    Adventurer<br />
                    <span className="text-sm">ISFP</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ESTP`)}} className="p-3 text-xs md:text-lg md:col-span-3 flex flex-col
                   justify-center items-center bg-yellow-400 border-sm rounded-md hover:bg-yellow-200">
                    Entrepreneur<br />
                    <span className="text-sm">ESTP</span>
                  </div>
                  <div onClick={()=>{router.push(`/personality/ESFP`)}} className="p-3 text-sm md:text-lg  md:col-span-3  flex flex-col
                   justify-center items-center bg-yellow-400 border-sm rounded-md hover:bg-yellow-200">
                    Entertainer<br />
                    <span className="text-sm">ESFP</span>
                  </div>
                </div>
              </Card>
            </div>
          </MenuItem>

        </Menu>


    


        <Link
          href="/login"
          className="flex items-center 
             rounded-lg bg-purple-300 px-3 py-1
            text-sm font-medium text-purple-500 transition-colors
             hover:bg-purple-500 hover:text-white md:text-base"
        >
          <li>Login</li>
        </Link>

      </ul>









    </nav>
  )
}
