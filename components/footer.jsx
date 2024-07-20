import { FaRegCopyright } from "react-icons/fa6";
import { TbHandLoveYou } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";




const Footer = () => {
  return (
    <div >
      <hr className='h-[10px]'></hr>
      <div className=" flex lg:flex-row flex-col-reverse lg:justify-between 
      justify-center items-center py-[30px] lg:px-[80px] px-[5px] lg:gap-[0px] gap-[10px] pb-[50px]">
        <div className="flex flex-row gap-[5px]">
          <p>2024 </p> 
          <FaRegCopyright />
           <p> All Right Reserved</p>
        </div>
        <div className="flex flex-row gap-[5px]">
           <p>Lets Analyze problems together </p>
           <TbHandLoveYou />
        </div>
        <div className="flex flex-row gap-[20px]">
         <Link href='mailto:adepojuwasiu031@gmail.com'><SiGmail className="w-[30px] h-[30px]" /></Link>
         <Link href='Https://wa.me/+2348163982842'><FaWhatsapp className="w-[30px] h-[30px]" /></Link>
         <Link href='https://github.com/AdepojuWasiu'><FaGithub className="w-[30px] h-[30px]"/></Link>
         <Link href='https://www.linkedin.com/in/adepojuwasiu'><FaLinkedin className="w-[30px] h-[30px]" /></Link>
       </div>
      </div>
    
   
    </div>
  )
}

export default Footer
