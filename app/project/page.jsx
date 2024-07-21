import Image from "next/image"
import Link from "next/link"
import {GoArrowRight} from 'react-icons/go';
import projects from "@/constant";

const Project = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div>
        <h1 className='text-bold sm:text-[60px] text-[30px] text-[#ffd700] opacity-[0.8]'>Projects</h1>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-[40px] mt-[20px]'>
        {projects.map((project) => (
          <div className="hover:bg-gray-900 rounded-2xl">
              <div className="p-[10px]">
                <Image src={project.image} alt="project" width={500} height={100} className="h-[300px]"/>
              </div>
              <div className="flex  flex-col gap-[10px] p-[10px] mt-[10px]">
                <div className=""><p className="text-gray-400 text-[20px] ">{project.title}</p></div>
                
                <div><h1 className="text-[30px] text-[#ffd700] opacity-[0.8]">{project.name}</h1></div>
                <div className="max-w-[500px] font-normal"><p>{project.description}</p></div>
                <div className="flex justify-end items-end">
                  <Link href={project.link}>
                    <div className="flex justify-center items-center flex-row p-[10px] text-gray-400 hover:text-[#ffd700]">
                    <p>visit </p>
                    <GoArrowRight />

                    </div>
                    
                  </Link>
                </div>
            
          </div>
      </div>

        ))}
        
      </div> 
    </div>
  )
}

export default Project
