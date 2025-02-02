import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Left() {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white p-6">
      <div className="flex flex-col items-center">
        <Image
          src="/profile.jpg" 
          alt="Profile picture"
          width={260}
          height={200}
          className="rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          John Doe
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Software Engineer passionate about building scalable web applications and solving complex problems. 
          Experienced in full-stack development with expertise in React, Node.js, and cloud technologies.
        </p>


        <div className="flex space-x-4 mt-2">
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
