'use client'
import { motion } from "framer-motion";

import { styles } from "./styles"
import ComputersCanvas from "@/components/Computers";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import {TbBrandJavascript} from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";






const Home = () => {
  return (
    <section className={`relative w-full h-screen mx-auto sm:mb-[100px] mb-0 sm:mt-0 mt-10`}>
      <div
        className={`absolute inset-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center '>
          <div className='w-5 h-5 rounded-full bg-[#ffd700] opacity-[0.9]' />
          <div className='w-1 sm:h-80 h-40 bg-[#ffd700] opacity-[0.9]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#FFD700] opacity-[0.9]'>Adepoju  Wasiu</span>
          </h1>
          <div className="flex">
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop full-stack web and mobile applications. I also derive insights and build machine learning 
                          models from datasets.
              </p>
          </div>
         
        </div>
      </div>

      <ComputersCanvas />

     <div className="flex justify-center items-center sm:mt-[-10px] mt-[-430px] gap-[5px] p-[20px]">
        <FaHtml5 className="w-[50px] h-[50px]" color="coral" />
        <FaCss3Alt className="w-[50px] h-[50px]" color="blue"/>
        <TbBrandJavascript className="w-[50px] h-[70px]" color="yellow" />
        <FaPython className="w-[50px] h-[50px]" color='aqua'/>
        <FaReact className="w-[50px] h-[50px]" color="blue"/>
        <RiNextjsLine className="w-[50px] h-[50px]" color="white"/>
        <FaNode className="w-[50px] h-[50px]" color="green"/>
        <RiTailwindCssFill className="w-[50px] h-[50px]" color="blue"/>
        <SiMongodb className="w-[50px] h-[50px]" color="green"/>
        <SiMysql className="w-[50px] h-[50px]" color="orange"/>
        <SiPandas className="w-[50px] h-[50px]" color="darkblue"/>
        <SiNumpy className="w-[50px] h-[50px]" color="aqua"/>

      </div> 
    </section>
  );
};

export default Home;

