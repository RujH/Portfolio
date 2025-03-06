import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { info } from "@/data/profileInfo";

export default function Left() {
  return (
    <div className="w-full max-w-xs rounded-3xl shadow-xl p-4 bg-white relative overflow-hidden border-2 border-orange-800 transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300" style={{ boxShadow: '0 15px 30px -8px rgba(249, 115, 22, 0.3), 0 10px 15px -6px rgba(249, 115, 22, 0.2)' }}>
      {/* Top curved dashed line decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 -left-10">
          <path d="M10 80C60 40 120 20 200 100" stroke="#F97316" strokeWidth="4" strokeDasharray="10 10" strokeLinecap="round" />
        </svg>
      </div>
      
      <div className="flex flex-col items-center mt-2">
        {/* Profile image */}
        <div className="rounded-2xl overflow-hidden mb-3 w-full aspect-square max-h-[220px] bg-[#C30100] relative">
          <Image
            src="/profile.jpeg" 
            alt="Profile picture"
            width={220}
            height={220}
            className="w-full h-full object-cover object-[center_40%] scale-110"
          />
        </div>
        
        {/* Name with larger font */}
        <h1 className="text-4xl font-bold text-black mb-4">
          {info.name}
        </h1>
        
        {/* Bottom curved dashed line */}
        <div className="w-full h-24 relative mt-4">
          <svg width="100%" height="200%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-20 -left-10">
            <path d="M10 20C80 80 150 100 250 10" stroke="#F97316" strokeWidth="4" strokeDasharray="10 10" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Description text */}
        <p className="text-gray-600 text-center text-lg mb-4">
          A Software Engineer who has developed countless innovative solutions.
        </p>
        
        {/* Social media icons in orange */}
        <div className="flex justify-center space-x-12 w-full">
          <a href={info.github} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">
            <FaGithub size={24} />
          </a>
          <a href={info.linkedIn} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">
            <FaLinkedin size={24} />
          </a>
          <a href={`mailto:${info.email}`} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
