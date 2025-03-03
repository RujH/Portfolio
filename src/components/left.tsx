import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { info } from "@/data/profileInfo";

export default function Left() {
  return (
    <div className="max-w-sm rounded-lg shadow-lg p-6 bg-[url('/background.svg')] bg-cover bg-center">
      <div className="flex flex-col items-center">
        <Image
          src="/profile.jpg" 
          alt="Profile picture"
          width={280}
          height={280}
          className="rounded-full mb-4 aspect-square object-cover bg-[#A4C6F3]"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {info.name}
        </h1>
        <p className="text-gray-800 text-center mb-6 bg-white rounded-lg shadow-sm p-3 max-w-[80%]">
          {info.description}
        </p>

        <div className="flex space-x-4 mt-2 bg-[#FFAB00] p-3 rounded-lg shadow-md">
          <a href={info.github} target="_blank" rel="noopener noreferrer" className="text-[#006496] hover:text-gray-900">
            <FaGithub size={24} />
          </a>
          <a href={info.linkedIn} target="_blank" rel="noopener noreferrer" className="text-[#006496] hover:text-gray-900">
            <FaLinkedin size={24} />
          </a>
          <a href={`mailto:${info.email}`} target="_blank" rel="noopener noreferrer" className="text-[#006496] hover:text-gray-900">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
