import { Home, Folder, Briefcase, Wrench, StickyNote } from "lucide-react";

export default function Header() {
  return (
    <div className="max-w-[31.5%] mx-auto rounded-2xl shadow-lg bg-[rgba(255,255,255,0.03)] p-3 mt-8">
      <div className="flex justify-center space-x-12">
        <a href="#" className="text-white hover:text-gray-300">
          <Home size={22} />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <Folder size={22} />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <Briefcase size={22} />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <Wrench size={22} />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <StickyNote size={22} />
        </a>
      </div>
    </div>
  );
}
