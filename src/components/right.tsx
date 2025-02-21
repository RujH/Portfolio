import Contact from "./contact";
import Experience from "./experience";
import Projects from "./projects";
import Tools from "./tools";

export default function Right() {
  return (
    <div className="grid gap-4 max-w-2xl text-left pb-8 overflow-y-auto">
      <div>
        <h1 className="text-6xl font-black text-white">
          SOFTWARE
        </h1>
        <h1 className="text-6xl font-black text-gray-800 mt-2">
          ENGINEER
        </h1>
      </div>
      
      <p className="text-gray-300 mb-16">
        I&apos;m a passionate software engineer with a focus on creating elegant solutions 
        to complex problems. I enjoy working with modern web technologies and building 
        user-friendly applications that make a difference.
      </p>

      <Projects/>
      <Experience/>
      <Tools/>
      <Contact/>
    
    
     
    </div>
  );
}
