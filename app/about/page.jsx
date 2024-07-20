'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"

import { fadeIn,zoomIn} from "@/utils/motion"

const About = () => {
  return (
    <section className='flex  flex-col justify-center items-center mb-[100px]'>
      <div>
        <h1 className='text-bold sm:text-[60px] text-[30px] text-[#ffd700] opacity-[0.8]'>About Me!</h1>
      </div>
      <div className="flex gap-[20px] justify-center sm:flex-row-reverse flex-col-reverse items-center ">
        <div className="flex sm:max-w-[500px] max-w-[350px] justify-center items-center flex-col">
          
            <h1 className="text-[30px] mb-[10px]">Biography</h1>
            <p className="text-gray-200 inline-flex p-[15px]">
            Hi, I’m Adepoju Wasiu,  a dedicated software developer and data scientist with  passion for creating modern
             software applications and deriving actionable insights from datasets. With 2 years of hands-on learning and 
             experience in the field,  I continuously seeks innovative solutions to analyze and address problems effectively 
             and efficiently. <br></br>
             <br></br>
             Whether developing websites, mobile applications, or performing data analysis, I 
              leverages creativity and technical skills to deliver impactful results.  
              Driven by  commitment to solving complex societal challenges, am eager to apply my expertise and passion to make  meaningful difference.

            </p>
        
        </div>
        <div className=' box-content bg-white  mt-10 rounded-2xl border-white border-[2px] scale-up-center sm:h-[400px] h-[350px] sm:w-[400px] w-[300px]'>
            <div className='bg-black rounded-2xl flex justify-center items-center sm:w-[390px] w-[290px] sm:h-[390px] h-[340px] '>
              <Image src='/assets/wasiuu.JPG' alt="pics" width={250} height={250} className="sm:w-[250px] w-[200px]"/>
            </div>
        </div>

     </div>

      <div className="sm:mt-[150px] mt-[70px]">
        <h1 className="sm:text-[60px] text-[30px] text-[#ffd700] mt-[50px] opacity-[0.8]">Skills</h1>
      </div>


     <div className="flex sm:flex-row flex-col gap-[40px] mt-[50px] ">
     <Tilt className='sm:w-[350px]  w-[75vw]'>
    <motion.div
      variants={fadeIn("right", "spring")}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 400,
        }}
        className='bg-black rounded-[20px]  min-h-[400px] flex flex-col'
      >
        <div className="flex justify-center mt-[20px] mb-[20px] text-white" >
          <p className="text-bold text-[20px]"> Software Development</p>
        </div>
         <hr></hr>
         <p className="p-[10px] text-gray-200">
         I possess comprehensive skills in developing full-stack web and mobile applications. 
         My proficiency includes HTML, CSS, JavaScript, Node.js, Python, SQL, React, React Native,
          Next.js, Expo, MongoDB, MySQL, PostgreSQL, RESTful API, authentication, caching, web testing,
           web security, Git, CI/CD, and deployment. These capabilities enable me to handle all aspects 
           of the development process, ensuring robust and scalable solutions.
         </p>

      </div>
    </motion.div>
  </Tilt>
  <Tilt className='sm:w-[350px] w-[75vw]'>
    <motion.div
      variants={fadeIn("right", "spring")}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 400,
        }}
        className='bg-black rounded-[20px] min-h-[400px] flex flex-col'
      >
          <div className="flex justify-center mt-[20px] mb-[20px] text-white" >
          <p className="text-bold text-[20px]">Data Science</p>
        </div>
         <hr></hr>
         <p className="p-[10px] text-gray-200">
         I possess skills to extract valuable insights from extensive datasets 
         and make data driven predictions. My proficiency includes  Python,
          Pandas, Numpy, Scikitlearn,  Matplotlib, seaborn,  plotly, jupyter notebook,
           SQL , Data Visualization,  Data Analysis,  Hypothesis testing ,Machine Learning,
            Classification and Regression.
         </p>

      </div>
    </motion.div>
  </Tilt>
   </div>

  
      <div className="sm:mt-[150px] mt-[70px]">
        <h1 className="sm:text-[60px] text-[30px] text-[#ffd700] opacity-[0.8]">Education</h1>
      </div>

      <div className="flex flex-row">
        <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-[#ffd700] opacity-[0.8]' />
          <div className='w-1 sm:h-[200px] h-[200px] bg-[#ffd700] opacity-[0.8]' />
        </div>
        <div className=" sm:ml-[50px] ml-[10px] mt-[50px] sm:max-w-[500px] max-w-[300px]">
             <h1 className="text-bold text-[25px] text-gray-200">Bachelor Of Science Education in Mathematics</h1>
             <p className="text-gray-400 mt-[10px] mb-[10px]">2019-2023 | University of Ibadan (UI) | CGPA: 3.56/4.0</p>
             <p className="text-gray-200">Relevant courses included Advance Analysis, Complex Analysis, Advance Algebra,
                        Numerical analysis, Statistical Inferences, Topology.</p>
        </div>
      </div>

  

     
    </section>
  )
}

export default About
