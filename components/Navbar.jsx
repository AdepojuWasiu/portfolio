'use client';

import Link from "next/link";
import Image from "next/image";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { useState } from "react";



const Navbar = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [active, setActive] = useState("");

  return (
    <nav className="w-full mt-5 pt-3 xl:px-[200px] px-[30px] flex flex-col  text-[20px] relative"  >
      <div className="w-full flex flex-row justify-between ">
        <div className="flex justify-start gap-2 justify-items-start mt-[-10px]">
            <div>
                <Link href= '/'> <Image src= '/assets/logo.png' alt="logo" width={80} height={80}
                        className= {`rounded-full ${
                          active === 'home'? 'text-gray-500': 'text-white'
           }`} onClick={() => {setActive('home')}} /></Link>
            </div>
        </div>
        <div className="flex justify-end gap-5">
        <div className="flex justify-end justify-items-end  gap-5 pr-0 ">
           <div className="lg:flex hidden justify-end justify-items-end gap-5 pr-0 " >
              <Link href='/about'><p className={`${
                             active === 'about'? 'text-gray-500': 'text-white'
              } hover:text-[#c29b0c]`} onClick={()=>setActive('about')}>About</p></Link>

               <Link href='/project'><p className={`${
                             active === 'project'? 'text-gray-500': 'text-white'
              } hover:text-[#c29b0c]`} onClick={()=>setActive('project')}>Project</p></Link>

                 <Link href='/contact'><p className={`${
                             active === 'contact'? 'text-gray-500': 'text-white'
              } hover:text-[#c29b0c]`} onClick={()=>setActive('contact')}>Contact</p></Link>
              
              
           </div>
             
        </div> 
    
        <div className="flex flex-col lg:hidden " >
          <div className="z-20">
              {toggleDropdown 
              ? <RiCloseLine color='#808080' size={27} onClick = {() => setToggleDropdown(false)} />
              : <RiMenu3Line color='#808080' size={27} onClick = {() => setToggleDropdown(true) } /> 
            
            }
          </div>
          <div>
                {
                toggleDropdown && (
                  <div className="flex justify-center items-center justify-items-center gap-7  
                          flex-col scale-up-center fixed z-10  right-[10vw] bg-[#000000] 
                          left-[10vw] bottom-[10vw] top-[50px] border-white border-[1px]">
              <Link href='/about'><p className={`${
                             active === 'about'? 'text-gray-500': 'text-white'
              } hover:text-[#c29b0c]`} onClick={()=>{setActive('about'); setToggleDropdown(false)}}>About</p></Link>

               <Link href='/project'><p className={`${
                             active === 'project'? 'text-gray-500': 'text-white'
              } hover:text-[#c29b0c]`} onClick={()=>{setActive('project'); setToggleDropdown(false)}}>Project</p></Link>

                 <Link href='/contact'><p className={`${
                             active === 'contact'? 'text-gray-500': 'text-white'
              } hover:text-[#c29b0c]`} onClick={()=>{setActive('contact'); setToggleDropdown(false)}}>Contact</p></Link>
              </div>

                )
              }
          </div>
        </div>
        </div>
        
      
 
      </div> 

    </nav>
  )
}

export default Navbar
