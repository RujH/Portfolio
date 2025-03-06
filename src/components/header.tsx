import { Home, Folder, Briefcase, Wrench, StickyNote } from "lucide-react";

export default function Header() {
  return (
    <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[31.5%] mx-auto rounded-2xl shadow-lg bg-[rgba(255,255,255,0.03)] p-2 sm:p-3 mt-4 sm:mt-6 md:mt-8 border border-orange-800">
      <div className="flex justify-center space-x-6 sm:space-x-8 md:space-x-12">
        <a href="#" className="text-white hover:text-gray-300 p-1">
          <Home size={18} className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]" />
        </a>
        <a href="#projects" className="text-white hover:text-gray-300 p-1">
          <Folder size={18} className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]" />
        </a>
        <a href="#experience" className="text-white hover:text-gray-300 p-1">
          <Briefcase size={18} className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]" />
        </a>
        <a href="#tools" className="text-white hover:text-gray-300 p-1">
          <Wrench size={18} className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]" />
        </a>
        <a href="#contact" className="text-white hover:text-gray-300 p-1">
          <StickyNote size={18} className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]" />
        </a>
      </div>
    </div>
  );
}
