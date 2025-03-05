import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { info } from "@/data/profileInfo";

export default function Left() {
  return (
    <div className="w-[400px] rounded-lg shadow-lg p-6 bg-[url('/background.svg')] bg-cover bg-center h-[550px]">
      <div className="flex flex-col items-center mt-20">
        
        <Image
          src="/profile.jpg" 
          alt="Profile picture"
          width={200}
          height={200}
          className="rounded-full mb-10 aspect-square object-cover bg-[#A4C6F3]"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {info.name}
        </h1>
       

        <div className="flex space-x-4 rounded-lg ">
          <a href={info.github} target="_blank" rel="noopener noreferrer" className="text-[#C30100] hover:text-gray-900">
            <FaGithub size={30} />
          </a>
          <a href={info.linkedIn} target="_blank" rel="noopener noreferrer" className="text-[#C30100] hover:text-gray-900">
            <FaLinkedin size={30} />
          </a>
          <a href={`mailto:${info.email}`} target="_blank" rel="noopener noreferrer" className="text-[#C30100] hover:text-gray-900">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
